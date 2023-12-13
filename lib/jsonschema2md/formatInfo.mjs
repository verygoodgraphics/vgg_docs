import fs from "fs"
import path from "path"
import { toString as stringify } from "mdast-util-to-string"
import gfm from "remark-gfm"
import parse from "remark-parse"
import { unified } from "unified"

import { keyword } from "./keywords.mjs"
import s from "./symbols.mjs"

function isAbstract(schema) {
  return (
    schema.definitions !== undefined &&
    (!schema[keyword`properties`] ||
      Object.keys(schema[keyword`properties`]).length === 0)
  )
}

function isextensible(schema) {
  return (
    schema.definitions !== undefined ||
    schema[keyword`meta:extensible`] === true
  )
}

function isIdentifiable(schema) {
  if (!schema[keyword`properties`]) {
    return "undefined"
  }
  if (
    schema[keyword`properties`][keyword`@id`] &&
    schema[keyword`properties`][keyword`@id`][keyword`type`] === "string" &&
    schema[keyword`properties`][keyword`@id`].format === "uri"
  ) {
    return "true"
  } else {
    return "false"
  }
}

function isCustom(schema) {
  return (
    [...(schema[keyword`allOf`] || [])]
      .filter((e) => typeof e === "object")
      .filter((e) => typeof e.$ref === "string")
      .filter(
        ({ $ref }) =>
          $ref ===
          "https://ns.adobe.com/xdm/common/extensible.schema.json#/definitions/@context"
      ).length > 0
  )
}

function getDefined(schema) {
  if (schema[s.parent]) {
    return {
      text: `${schema[s.filename]}*`,
      link: schema[s.fullPath],
    }
  }
  return {
    text: schema[s.filename],
    link: schema[s.fullPath],
  }
}

function plainDescription(schema) {
  try {
    if (schema[s.fullPath] && !schema[s.parent]) {
      const fullPath = path.resolve(
        path.dirname(schema[s.fullPath]),
        schema[s.filename].replace(/\..*$/, ".description.md")
      )
      const longdesc = fs.readFileSync(fullPath)
      return longdesc.toString()
    }
  } catch {
    return schema[keyword`description`] || ""
  }
  return schema[keyword`description`] || ""
}

function shorten(str) {
  return str.split("\n")[0].split(".")[0]
}

const parser = unified().use(gfm).use(parse)

function parseDescription(str) {
  const markdown = parser.parse(str)
  return {
    longdescription: markdown,
    shortdescription: shorten(stringify(markdown)),
    description: str,
  }
}

function parseComment(str = "") {
  const markdown = parser.parse(str)
  return {
    longcomment: markdown,
    shortcomment: shorten(stringify(markdown)),
    comment: str,
  }
}

function getStatus(schema) {
  if (schema[keyword`deprecated`] === true) {
    return "deprecated"
  }
  return schema[keyword`meta:status`] || undefined
}

function getRestrictions(schema) {
  if (
    schema[keyword`readOnly`] === true &&
    schema[keyword`writeOnly`] === true
  ) {
    return "secret"
  } else if (schema[keyword`readOnly`] === true) {
    return "readOnly"
  } else if (schema[keyword`writeOnly`] === true) {
    return "writeOnly"
  }
  return undefined
}

export default function formatMeta(schema) {
  return {
    abstract: isAbstract(schema),
    extensible: isextensible(schema),
    status: getStatus(schema),
    identifiable: isIdentifiable(schema),
    custom: isCustom(schema),
    additional: schema[keyword`additionalProperties`] !== false,
    definedin: getDefined(schema),
    restrictions: getRestrictions(schema),
    ...parseDescription(plainDescription(schema)),
    ...parseComment(schema[keyword`$comment`]),
  }
}
