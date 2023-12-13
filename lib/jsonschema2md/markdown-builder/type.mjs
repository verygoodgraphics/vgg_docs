import i from "es2015-i18n-tag"
import { filter, list as flist, size } from "ferrum"
import { inlineCode, link } from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { generateArrayType } from "./generate-array-type.mjs"
import { generateMergedType } from "./generate-merged-type.mjs"
import { generateObjectType } from "./generate-object-type.mjs"
import { parseRefValue } from "./parse-ref-value.mjs"
import { text } from "./util.mjs"

const { default: i18n } = i

export function type(property, urlPrefix) {
  if (
    !Array.isArray(property[keyword`type`]) &&
    typeof property[keyword`type`] === "object"
  ) {
    return text(i18n`Unknown Type`)
  }

  const types = Array.isArray(property[keyword`type`])
    ? property[keyword`type`]
    : [property[keyword`type`]]

  const realTypes = flist(
    filter(types, (myType) => myType !== "null" && myType !== undefined)
  )

  const typeRule = flist(
    filter(["oneOf", "allOf", "anyOf", "not"], (rule) => property[rule])
  )

  if (size(typeRule) > 0) {
    const type = generateMergedType(typeRule[0], property[typeRule[0]])
    return type
  }

  if (size(realTypes) === 0) {
    if (property[keyword`const`]) {
      return inlineCode("const")
    }

    if (property[keyword`$ref`]) {
      const refValue = property[keyword`$ref`]
      const { url, anchor } = parseRefValue(refValue, urlPrefix)

      return link(url, "", inlineCode(anchor))
    }

    return text(i18n`Not specified`)
  }

  /**
   * If the type is an array, we need to check if the item is a reference
   * or a type
   */
  if (size(realTypes) === 1 && realTypes[0] === "array") {
    const arrayType = generateArrayType(
      property.item ?? property.items,
      urlPrefix
    )

    if (arrayType) {
      return arrayType
    }
  }

  if (size(realTypes) === 1 && realTypes[0] === "object") {
    const objectType = generateObjectType(property, "Object", urlPrefix)

    if (objectType) return objectType
  }

  return size(realTypes) === 1 ? inlineCode(realTypes[0]) : text(i18n`Multiple`)
}
