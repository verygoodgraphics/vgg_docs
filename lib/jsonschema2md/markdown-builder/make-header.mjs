import { list as flist } from "ferrum"
import { code, heading, link, table, tableCell, tableRow } from "mdast-builder"

import { genTitle } from "../formattingTools.mjs"
import { keyword } from "../keywords.mjs"
import { makeComment } from "./make-comment.mjs"
import { i18n, paragraph, text } from "./util.mjs"

const headerProps = [
  /*
  {
    name: 'type',
    title: i18n`Type`,
    objectlabel: i18n`Object`,
    arraylabel: i18n`Array`,
    multiplelabel: i18n`Multiple`,
    mergedlabel: i18n`Merged`,
    undefinedlabel: i18n`Undefined`,
    numberlabel: i18n`Number`,
    booleanlabel: i18n`Boolean`,
    stringlabel: i18n`String`,
    integerlabel: i18n`Integer`,
    nulllabel: i18n`Null`,
  },
  */
  {
    name: "abstract",
    title: i18n`Abstract`,
    truelabel: i18n`Cannot be instantiated`,
    falselabel: i18n`Can be instantiated`,
    undefinedlabel: i18n`Unknown abstraction`,
  },
  {
    name: "extensible",
    title: i18n`Extensible`,
    undefinedlable: i18n`Unknown extensibility`,
    truelabel: i18n`Yes`,
    falselabel: i18n`No`,
  },
  {
    name: "status",
    title: i18n`Status`,
    undefinedlabel: "Unknown status",
    deprecatedlabel: i18n`Deprecated`,
    stablelabel: i18n`Stable`,
    stabilizinglabel: i18n`Stabilizing`,
    experimentallabel: i18n`Experimental`,
  },
  {
    name: "identifiable",
    title: i18n`Identifiable`,
    truelabel: i18n`Yes`,
    falselabel: i18n`No`,
    undefinedlabel: i18n`Unknown identifiability`,
  },
  {
    name: "custom",
    title: i18n`Custom Properties`,
    truelabel: i18n`Allowed`,
    falselabel: i18n`Forbidden`,
    undefinedlabel: i18n`Unknown custom properties`,
  },
  {
    name: "additional",
    title: i18n`Additional Properties`,
    truelabel: i18n`Allowed`,
    falselabel: i18n`Forbidden`,
    undefinedlabel: i18n`Unknown additional properties`,
  },
  {
    name: "restrictions",
    title: i18n`Access Restrictions`,
    readOnlylabel: i18n`Read only`,
    writeOnlylabel: i18n`Write only`,
    secretlabel: i18n`cannot be read or written`,
    undefinedlabel: i18n`none`,
  },
  {
    name: "definedin",
    title: i18n`Defined In`,
    undefinedlabel: i18n`Unknown definition`,
  },
]

/**
 * Generates the overall header for the schema documentation
 * @param {*} schema
 */
export function makeHeader(schema, header, links) {
  // console.log('making header for', schema[s.filename], schema[s.pointer]);
  if (header) {
    return [
      heading(
        1,
        text(i18n`${genTitle(schema[s.titles], schema[keyword`type`])} Schema`)
      ),
      paragraph(
        code(
          "txt",
          schema[s.id] + (schema[s.pointer] ? `#${schema[s.pointer]}` : "")
        )
      ),
      schema[s.meta].longdescription,
      ...makeComment(schema),
      table("left", [
        // iterate over header
        tableRow(
          flist(
            map(headerProps, ({ name, title }) => {
              if (links[name]) {
                return tableCell(
                  link(links[name], i18n`What does ${title} mean?`, text(title))
                )
              }
              return tableCell(text(title))
            }),
            Array
          )
        ),
        tableRow(
          flist(
            map(headerProps, (prop) => {
              // this is a linked property
              if (
                schema[s.meta] &&
                typeof schema[s.meta][prop.name] === "object" &&
                schema[s.meta][prop.name].link &&
                schema[s.meta][prop.name].text
              ) {
                return tableCell(
                  link(
                    // rewriteLinks(schema[s.meta][prop.name].link),
                    schema[s.meta][prop.name].link,
                    i18n`open original schema`,
                    [text(schema[s.meta][prop.name].text)]
                  )
                )
              }
              const value = schema[s.meta]
                ? schema[s.meta][prop.name]
                : undefined
              return tableCell(
                text(prop[`${String(value)}label`] || i18n`Unknown`)
              )
            }),
            Array
          )
        ),
      ]),
    ]
  }
  return []
}
