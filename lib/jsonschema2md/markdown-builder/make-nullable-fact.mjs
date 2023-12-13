import { listItem } from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { i18n, paragraph, text } from "./util.mjs"

export function makeNullableFact(definition) {
  const allTypes = Array.isArray(definition[keyword`type`])
    ? definition[keyword`type`]
    : [definition[keyword`type`]]
  // can the type be `null`
  const isNullable =
    allTypes.filter((myType) => myType === keyword`null`).length > 0

  if (isNullable) {
    return listItem(paragraph(text(i18n`Nullable`)))
  } else {
    return listItem(paragraph(text(i18n`NoNull`)))
  }
}
