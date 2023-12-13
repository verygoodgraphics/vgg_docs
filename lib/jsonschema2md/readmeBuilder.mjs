import i from "es2015-i18n-tag"
import { filter, list as flist, map, mapSort, pipe, uniq } from "ferrum"
import {
  heading,
  inlineCode,
  link,
  list,
  listItem,
  paragraph,
  root,
  text,
} from "mdast-builder"

import { gendescription, genTitle } from "./formattingTools.mjs"
import { keyword } from "./keywords.mjs"
import s from "./symbols.mjs"

const { default: i18n } = i

function makeversionnote(schemas) {
  const versions = flist(
    uniq(schemas.map((schema) => schema[keyword`$schema`]).filter((e) => !!e))
  )

  if (versions.length === 1) {
    return [
      heading(2, text(i18n`Version Note`)),
      paragraph([
        text("The schemas linked above follow the JSON Schema Spec version: "),
        inlineCode(versions[0]),
      ]),
    ]
  }
  return []
}

/**
 * Generate the README.md
 * @param {object} opts
 */
export default function build({ readme = true }) {
  return (schemas) => {
    if (readme) {
      console.log("building readme")
      const toplevel = flist(
        pipe(
          schemas,
          filter((schema) => !schema[s.parent]), // remove schemas with a parent
          mapSort((schema) =>
            genTitle(schema[s.titles], schema[keyword`type`])
          ),
          map((schema) =>
            listItem(
              paragraph([
                link(`./${schema[s.slug]}.md`, gendescription(schema), [
                  text(genTitle(schema[s.titles], schema[keyword`type`])),
                ]),
                text(" – "),
                inlineCode(schema[keyword`$id`] || "-"),
              ])
            )
          )
        ),
        Array
      )

      const bytype = (type) =>
        flist(
          pipe(
            schemas,
            filter((schema) => schema[keyword`type`] === type), // remove schemas without matching type
            filter((schema) => !!schema[s.parent]), // keep only schemas with a parent
            filter((schema) => !schema.$ref), // it is not a reference
            mapSort((schema) =>
              genTitle(schema[s.titles], schema[keyword`type`])
            ),
            map((schema) =>
              listItem(
                paragraph([
                  link(`./${schema[s.slug]}.md`, gendescription(schema), [
                    text(genTitle(schema[s.titles], schema[keyword`type`])),
                  ]),
                  text(" – "),
                  inlineCode(`${schema[s.id]}#${schema[s.pointer]}`),
                ])
              )
            )
          ),
          Array
        )

      const readmenode = root([
        heading(1, text(i18n`README`)),
        heading(2, text(i18n`Top-level Schemas`)),
        list("unordered", toplevel),

        heading(2, text(i18n`Other Schemas`)),

        heading(3, text(i18n`Objects`)),
        list("unordered", bytype("object")),

        heading(3, text(i18n`Arrays`)),
        list("unordered", bytype("array")),

        ...makeversionnote(schemas),
      ])

      // console.log(inspect(readmenode));

      return readmenode
    }
    return null
  }
}
