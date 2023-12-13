import path from "path"
import { URL } from "url"
import fs from "fs-extra"
import GhSlugger from "github-slugger"

import formatMeta from "./formatInfo.mjs"
import { keyword } from "./keywords.mjs"
import symbols from "./symbols.mjs"

const mySlug = Symbol("mySlug")

/**
 * @param {string} file
 * @param {number} [num=1]
 */
function loadExamples(file, num = 1) {
  const exampleFile = path.resolve(
    path.dirname(file),
    path.basename(file).replace(/\..*$/, `.example.${num}.json`)
  )
  try {
    const example = fs.readJSONSync(exampleFile)
    return [example, ...loadExamples(file, num + 1)]
  } catch {
    return []
  }
}

const handler = ({
  root = "",
  fullPath = null,
  filename = ".",
  schemas,
  subSchemas,
  parent = null,
  slugger,
}) => {
  const meta = {}

  meta[symbols.parent] = () => parent
  meta[symbols.pointer] = () => root
  meta[symbols.filename] = () => filename
  meta[symbols.fullPath] = () => fullPath
  meta[symbols.id] = (target) => {
    // if the schema has it's own ID, use it
    if (target[keyword`$id`]) {
      return target[keyword`$id`]
    }
    if (parent) {
      // if we can determine the parent ID (by walking up the tree, use it)
      return parent[symbols.id]
    }
    return undefined
  }
  meta[symbols.titles] = (target) => {
    if (parent) {
      // if we can determine the parent titles
      // then we append our own
      return [...parent[symbols.titles], target.title]
    }
    // otherwise, it's just our own
    if (typeof target.title === "string") {
      return [target[keyword`title`]]
    }
    return []
  }

  meta[symbols.resolve] = (target, prop, receiver) => (propPath) => {
    // console.log('trying to resolve', propPath, 'in', receiver[symbols.fullPath]);
    if (propPath === undefined) {
      return receiver
    }
    const [head, ...tail] =
      typeof propPath === "string" ? propPath.split("/") : propPath
    if ((head === "" || head === undefined) && tail.length === 0) {
      return receiver
    } else if (head === "" || head === undefined) {
      return receiver[symbols.resolve](tail)
    }
    return receiver[head] ? receiver[head][symbols.resolve](tail) : undefined
  }

  meta[symbols.slug] = (target, prop, receiver) => {
    if (!receiver[mySlug] && !parent && receiver[symbols.filename]) {
      // eslint-disable-next-line no-param-reassign
      receiver[mySlug] = slugger.slug(
        receiver[symbols.filename].replace(/\..*$/, "")
      )
    }
    if (!receiver[mySlug]) {
      const parentSlug = parent[symbols.slug]
      const { title } = receiver

      const name = receiver[symbols.pointer].split("/").pop()
      if (typeof title === "string") {
        // eslint-disable-next-line no-param-reassign
        // receiver[mySlug] = slugger.slug(`${parentSlug}-${title || name}`)
        const convertedTitle = receiver.$id
          .slice(1)
          .replace(/([a-z]+?)([A-Z])/g, (match, p1, p2) => {
            return p1 + " " + p2
          })
          .replace(/^./, (first) => first.toUpperCase())
        receiver[mySlug] = slugger.slug(`${convertedTitle || name}`)
      } else {
        // eslint-disable-next-line no-param-reassign
        if (name === "items") {
          if (!title) {
            // eslint-disable-next-line no-param-reassign
            // receiver[mySlug] = slugger.slug(`${parentSlug}-items`)
          } else {
            receiver[mySlug] = slugger.slug(`${parentSlug}-items`)
          }
        } else {
          receiver[mySlug] = slugger.slug(`${parentSlug}-${name}`)
        }
      }
    }

    // console.log(receiver[mySlug])

    return receiver[mySlug]
  }

  meta[symbols.meta] = (target, prop, receiver) => formatMeta(receiver)

  return {
    ownKeys: (target) => Reflect.ownKeys(target),

    get: (target, prop, receiver) => {
      if (typeof meta[prop] === "function") {
        return meta[prop](target, prop, receiver)
      }

      const retval = Reflect.get(target, prop, receiver)
      if (
        retval === undefined &&
        receiver[symbols.fullPath] &&
        prop === keyword`examples` &&
        !receiver[symbols.parent]
      ) {
        return loadExamples(receiver[symbols.fullPath], 1)
      }
      if (typeof retval === "object" && retval !== null) {
        if (retval[keyword`$ref`]) {
          const [uri, pointer] = retval.$ref.split("#")
          // console.log('resolving ref', uri, pointer, 'from', receiver[symbols.fullPath]);
          const baseDoc = uri || receiver[symbols.id]
          let referenced = null

          // $ref is a URI-reference so baseDoc might be an id URI or it might be a path

          if (schemas.known[baseDoc]) {
            referenced = schemas.known[baseDoc][symbols.resolve](pointer)
          } else if (path.parse(baseDoc)) {
            const basePath = path.dirname(meta[symbols.fullPath]())
            let relDoc = uri

            // if uri is a URI then only try to resolve it locally if the scheme is 'file:'
            try {
              const urlInfo = new URL(uri)
              if (urlInfo.protocol === "file:") {
                relDoc = uri.replace(/^file:\/\//, "")
              } else {
                relDoc = null
              }
            } catch (err) {
              // console.log('Error parsing URL - ' + uri);
            }

            if (relDoc) {
              const refPath = path.resolve(basePath, relDoc)

              if (schemas.files[refPath]) {
                referenced = schemas.files[refPath][symbols.resolve](pointer)
              }
            }
          }

          if (referenced !== null) {
            // inject the referenced schema into the current schema
            Object.assign(retval, referenced)
          } else {
            console.error("cannot resolve", baseDoc)
          }
        } else if (retval[symbols.filename]) {
          // console.log('I am in a loop!');
          return retval
        }

        // console.log('making new proxy from', target, prop, 'receiver', receiver[symbols.id]);
        let subSchema
        if (subSchemas.has(retval)) {
          subSchema = subSchemas.get(retval)
        } else {
          subSchema = new Proxy(
            retval,
            handler({
              root: `${root}/${prop}`,
              parent: receiver,
              fullPath,
              filename,
              schemas,
              subSchemas,
              slugger,
            })
          )

          subSchemas.set(retval, subSchema)
        }

        if (subSchema[keyword`$id`]) {
          // stow away the schema for lookup
          // eslint-disable-next-line no-param-reassign
          schemas.known[subSchema[keyword`$id`]] = subSchema
        }
        return subSchema
      }
      return retval
    },
  }
}

export default function loader() {
  const schemas = {
    loaded: [],
    known: {},
    files: {},
  }

  const subSchemas = new Map()

  const slugger = new GhSlugger()

  return (/** @type {string} */ name, /** @type {any} */ schema) => {
    // console.log('loading', name);
    const filename = path.basename(name)
    const fullPath = name === filename ? undefined : name

    const proxied = new Proxy(
      schema,
      handler({
        filename,
        fullPath,
        schemas,
        subSchemas,
        slugger,
      })
    )
    schemas.loaded.push(proxied)
    if (proxied[keyword`$id`]) {
      // stow away the schema for lookup
      schemas.known[proxied[keyword`$id`]] = proxied
    }

    schemas.files[fullPath || filename] = proxied

    return proxied
  }
}
