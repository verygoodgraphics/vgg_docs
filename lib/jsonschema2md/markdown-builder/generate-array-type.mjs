import { html, inlineCode } from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { generateMergedType } from "./generate-merged-type.mjs"
import { generateObjectType } from "./generate-object-type.mjs"
import { parseRefValue } from "./parse-ref-value.mjs"

/**
 * Generates the type for an array
 * @param {*} propertyItem  e.g. { "$ref": "#/definitions/Address" }
 * @returns e.g. [Address](#address)
 */
export function generateArrayType(propertyItem, urlPrefix) {
  if (!propertyItem) return null

  if (propertyItem[keyword`$ref`]) {
    const refValue = propertyItem[keyword`$ref`]
    const { url, anchor } = parseRefValue(refValue, urlPrefix)
    return html(`<code>Array&lt;<a href="${url}">${anchor}</a>&gt;</code>`)
  }

  if (propertyItem[keyword`oneOf`]) {
    const mergedType = generateMergedType(
      "Array",
      propertyItem[keyword`oneOf`],
      urlPrefix
    )

    return mergedType
  }

  if (propertyItem[keyword`type`]) {
    if (propertyItem[keyword`type`] === "object") {
      const generatedObjectType = generateObjectType(propertyItem, "Array")
      if (generatedObjectType) return generatedObjectType
    }

    return inlineCode("Array<" + propertyItem.type + ">")
  }
}
