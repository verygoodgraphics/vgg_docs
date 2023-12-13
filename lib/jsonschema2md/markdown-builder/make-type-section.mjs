import { heading, html } from "mdast-builder"

import { makeTypeFact } from "./make-type-fact.mjs"
import { simpleTitle } from "./simple-title.mjs"
import { i18n, text } from "./util.mjs"

export function makeTypeSection(schema, level = 1, skipProperties = []) {
  if (skipProperties.includes("typesection")) {
    return ""
  }
  const { children } = makeTypeFact(schema)
  children[0].children.shift()
  const type = children[0].children.shift()
  return [
    html(`<div className="section-type">`),
    html(`<div className="badge-type">${type.value}</div>`),
    // heading(level + 1, text(i18n`${simpleTitle(schema)}`)),
    html(`</div>`),
  ]
}
