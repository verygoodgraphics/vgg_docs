import { flat, list as flist } from "ferrum"
import { inlineCode, link, listItem } from "mdast-builder"

import { keyword } from "../keywords.mjs"
import s from "../symbols.mjs"
import { makeArrayFact } from "./make-array-fact.mjs"
import { i18n, paragraph, text } from "./util.mjs"

export function makeTypeFact(definition, isarray = "") {
  const allTypes = Array.isArray(definition[keyword`type`])
    ? definition[keyword`type`]
    : [definition[keyword`type`]]
  // filter out types that are null
  const realTypes = allTypes.filter((myType) => myType !== keyword`null`)
  // can the type be `null`
  const isNullable =
    allTypes.filter((myType) => myType === keyword`null`).length > 0
  // is there only a single type or can there be multiple types
  const singleType = realTypes.length <= 1
  const [firstType] = realTypes
  // is `null` the only allowed value
  const nullType = isNullable && realTypes.length === 0

  const array = firstType === keyword`array`
  const merged = !!(
    definition[keyword`allOf`] ||
    definition[keyword`anyOf`] ||
    definition[keyword`oneOf`] ||
    definition[keyword`not`]
  )

  if (array && Array.isArray(definition[keyword`items`])) {
    return makeArrayFact(
      definition[keyword`items`],
      definition[keyword`additionalItems`]
    )
  } else if (array && definition[keyword`items`]) {
    return makeTypeFact(definition[keyword`items`], `[]`)
  }

  const typeFact = (() => {
    if (nullType) {
      return [
        inlineCode(`null${isarray}`),
        text(i18n`, the value must be null`),
      ]
    } else if (singleType && firstType && typeof firstType === "string") {
      return [inlineCode(firstType + isarray)]
    } else if (!singleType) {
      return [
        text(
          isarray
            ? i18n`an array of the following:`
            : i18n`any of the following: `
        ),
        ...flist(
          flat(
            realTypes.map((myType, index) => [
              inlineCode(myType || i18n`not defined`),
              text(index === realTypes.length - 1 ? "" : i18n` or `),
            ])
          )
        ),
      ]
    } else if (merged) {
      return [text(isarray ? "an array of merged types" : i18n`merged type`)]
    }
    // console.log('unknown type', realTypes, singleType, merged, definition[s.pointer]);
    return [text(i18n`unknown` + isarray)]
  })()

  const typeLink = (() => {
    if (
      definition[keyword`title`] &&
      typeof definition[keyword`title`] === "string"
    ) {
      // if the type has a title, always create a link to the schema
      return [
        text(" ("),
        link(`${definition[s.slug]}.md`, "", text(definition[keyword`title`])),
        text(")"),
      ]
    } else if (!singleType || firstType === keyword`object` || merged) {
      return [
        text(" ("),
        link(`${definition[s.slug]}.md`, "", text(i18n`Details`)),
        text(")"),
      ]
    }
    return []
  })()

  const retval = listItem(
    paragraph([text(i18n`Type: `), ...typeFact, ...typeLink])
  )

  return retval
}
