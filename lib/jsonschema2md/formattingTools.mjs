import i from "es2015-i18n-tag"

import s from "./symbols.mjs"

const { default: i18n } = i

export function genTitle(titles, type) {
  if (!Array.isArray(titles)) {
    return i18n`Untitled schema`
  }
  const [firstTitle] = titles
  const lastTitle = [...titles].pop()

  if (titles.length === 1 && firstTitle !== undefined) {
    return firstTitle
  }
  if (lastTitle) {
    return lastTitle
  }
  if (typeof type === "string") {
    return i18n`Untitled ${type} in ${String(firstTitle)}`
  }
  if (firstTitle === undefined) {
    return i18n`Untitled schema`
  }
  return i18n`Untitled undefined type in ${firstTitle}`
}

export function gendescription(schema) {
  return schema && schema[s.meta] ? schema[s.meta].shortdescription : ""
}
