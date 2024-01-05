import { html, inlineCode, link } from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { parseRefValue } from "./parse-ref-value.mjs"
import { type } from "./type.mjs"
import { paragraph, text } from "./util.mjs"

/**
 * Generates the type for an object
 * @param {*} propertyItem  e.g. { "$ref": "#/definitions/Address" }
 * @returns  e.g. [Address](#address)
 */
export function generateObjectType(
  propertyItem,
  typeLiteral = "Object",
  urlPrefix
) {
  if (!propertyItem) return null

  // if (propertyItem[keyword`$ref`]) {
  //   const refValue = propertyItem[keyword`$ref`]
  //   const { url, anchor } = parseRefValue(refValue, urlPrefix)
  //   const linkEl = link(url, "", inlineCode(anchor))

  //   return paragraph([
  //     html(`<code className="type-object separate">`),
  //     linkEl,
  //     html(`</code>`),
  //   ])
  // }

  if (propertyItem[keyword`$ref`]) {
    const refValue = propertyItem[keyword`$ref`]
    const { url, anchor } = parseRefValue(refValue, urlPrefix)
    return html(`<Link href="${url}"><code>${anchor}</code></Link>`)
  }

  if (propertyItem[keyword`properties`]) {
    const properties = propertyItem[keyword`properties`]
    const required = propertyItem[keyword`required`]
    const withRequired = Object.keys(properties).reduce((acc, cur) => {
      const isRequired = required && required.includes(cur)

      return {
        ...acc,
        [cur]: {
          ...properties[cur],
          required: isRequired,
        },
      }
    }, {})

    return paragraph([
      html(`<code className="type-object separate">`),
      html("<span>" + typeLiteral + "&lt;`{`</span>"),
      html(`<div className="type-object-types separate no-border">`),
      ...Object.keys(withRequired).map((key) => {
        const propType = type(withRequired[key], urlPrefix)

        if (propType instanceof Array) {
          const _paragraph = paragraph([
            html(`<span>`),
            ...propType,
            html(`</span>`),
          ])
          return _paragraph
        }

        return paragraph([
          html(`<span>`),
          paragraph([text(`${key}: `), propType, text(`;`)]),
          html(`</span>`),
        ])
      }),
      html(`</div>`),
      html("<span>`}`&gt;</span>"),
      html(`</code>`),
    ])
  }

  if (propertyItem[keyword`type`]) {
    return inlineCode(propertyItem.type)
  }
}
