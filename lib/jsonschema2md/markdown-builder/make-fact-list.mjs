import { list, listItem } from "mdast-builder"

import { makeDefinedInFact } from "./make-defined-in-fact.mjs"
import { makeNullableFact } from "./make-nullable-fact.mjs"
import { makeTypeFact } from "./make-type-fact.mjs"
import { i18n, text } from "./util.mjs"

export function makeFactList(
  name,
  definition,
  required = [],
  skipProperties = []
) {
  const children = []

  if (required.indexOf(name) > -1) {
    children.push(listItem(text(i18n`is required`)))
  } else {
    children.push(listItem(text(i18n`is optional`)))
  }

  if (!skipProperties.includes("typefact")) {
    children.push(makeTypeFact(definition))
  }
  if (!skipProperties.includes("nullablefact")) {
    children.push(makeNullableFact(definition))
  }
  if (!skipProperties.includes("definedinfact")) {
    children.push(makeDefinedInFact(definition))
  }

  // const additionalFacts = includeProperties
  //   .map((propName) => {
  //     if (definition[propName]) {
  //       return listItem(text(`${propName}: ${String(definition[propName])}`))
  //     }
  //     return undefined
  //   })
  //   .filter((item) => item !== undefined)

  // children.push(...additionalFacts)

  return list("unordered", children)
}
