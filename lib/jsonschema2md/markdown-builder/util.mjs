import i from "es2015-i18n-tag"
import { filter, list as flist, size } from "ferrum"
import { paragraph as _paragraph, text as _text, html } from "mdast-builder"

import { keyword } from "../keywords.mjs"

export const paragraph = (text) => {
  if (typeof text === "string") {
    text = text.replaceAll(/\{/g, "\\{").replaceAll(/\}/g, "\\}")
  }

  return _paragraph(text)
}

export const text = (str) => {
  if (typeof str === "string") {
    str = str.replaceAll(/\{/g, "\\{").replaceAll(/\}/g, "\\}")
  }

  return _text(str)
}

export const { default: i18n } = i

export function nullable(property) {
  const types = Array.isArray(property[keyword`type`])
    ? property[keyword`type`]
    : [property[keyword`type`]]
  const nullTypes = flist(filter(types, (myType) => myType === keyword`null`))
  if (size(nullTypes)) {
    return html(`<HiCheckCircle />`)
  }
  return html(`<HiMinusCircle />`)
}
