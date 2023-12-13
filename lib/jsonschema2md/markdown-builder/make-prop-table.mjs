import { link, table, tableCell, tableRow } from "mdast-builder"

import { makePropHeader } from "./make-prop-header.mjs"
import { type } from "./type.mjs"
import { i18n, nullable, text } from "./util.mjs"

/**
 * Generates the table of contents for a properties
 * object.
 * @param {*} props
 */
export function makePropTable(
  props = {},
  patternProps = {},
  additionalProps,
  required,
  slugger,
  skipProperties = [],
  urlPrefix,
  schema,
  propsForSearch
) {
  if (skipProperties.includes("proptable")) {
    return paragraph()
  }
  const propRows = Object.entries(props).map(
    makePropHeader(required, false, slugger, urlPrefix, schema, propsForSearch)
  )
  const patternPropRows = Object.entries(patternProps).map(
    makePropHeader(required, true, slugger, urlPrefix, schema, propsForSearch)
  )
  const additionalPropRows = (() => {
    if (additionalProps) {
      const any = additionalProps === true
      return [
        tableRow([
          tableCell(text(i18n`Additional Properties`)),
          tableCell(any ? text("Any") : type(additionalProps, urlPrefix)),
          tableCell(text(i18n`Optional`)),
          tableCell(any ? text("can be null") : nullable(additionalProps)),
          tableCell(
            any
              ? text("")
              : link(
                  `${additionalProps[s.slug]}.md`,
                  `${additionalProps[s.id]}#${additionalProps[s.pointer]}`,
                  text(additionalProps[s.titles][0] || i18n`Untitled schema`)
                )
          ),
        ]),
      ]
    }
    return []
  })()

  // const propRows = flist(map(iter(props || {}), makePropHeader(required)));

  return table("left", [
    tableRow([
      tableCell(text(i18n`Property`)),
      tableCell(text(i18n`Type`)),
      tableCell(text(i18n`Required`)),
      // tableCell(text(i18n`Nullable`)),
      // tableCell(text(i18n`Defined by`)),
    ]),
    ...propRows,
    ...patternPropRows,
    ...additionalPropRows,
  ])
}
