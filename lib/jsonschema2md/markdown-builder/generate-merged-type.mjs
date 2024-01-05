import { html } from "mdast-builder"

import { type } from "./type.mjs"

/**
 * Generates the type for a merged type
 * @param {*} rule  e.g. "oneOf"
 * @param {*} value e.g. [{ "$ref": "#/definitions/Address" }, { "type": "string" }]
 * @returns  e.g. OneOf<Address | string>
 */
export function generateMergedType(rule, value, urlPrefix) {
  const types = value.map((val) => type(val, urlPrefix))

  return [
    html(
      `<code className="type-merged${value.length > 3 ? " separate" : ""}">`
    ),
    html(`${rule}&lt;`),
    html(
      `<span className="type-merged-types${
        value.length > 3 ? " separate" : ""
      }">`
    ),
    ...types.map((type) => {
      if (type.type === "link") {
        const link = type.children[0]
        return html(`<Link to="${type.url}"><code>${link.value}</code></Link>`)
      }
      return html(type.value)
    }),
    html(`</span>`),
    html(`&gt;`),
    html(`</code>`),
  ]
}
