import { html } from "mdast-builder"

import { makeTypeFact } from "./make-type-fact.mjs"

export function makeBadgeSection(
  schema,
  level = 1,
  skipProperties = [],
  options = {}
) {
  const { backlinks = [], urlPrefix = "" } = options
  let matchedBacklinks = []
  let backlinksElement = []
  if (schema.$id) {
    matchedBacklinks = backlinks[schema.$id.replace("#", "")] ?? []
  }

  if (matchedBacklinks.length > 0) {
    backlinksElement = [
      html(
        `<a href="#backlinks"><img alt="Backlinks" src="https://img.shields.io/badge/${matchedBacklinks.length}-Backlinks?label=Backlinks&color=%230ea5e9" /></a>`
      ),
    ]
  }

  if (skipProperties.includes("typesection")) {
    return ""
  }
  const { children } = makeTypeFact(schema)
  children[0].children.shift()
  const type = children[0].children.shift()
  return [
    html(`<div className="section-badges">`),
    html(
      `<div><img alt="${type.value}" src="https://img.shields.io/badge/${type.value}-${type.value}?label=Type" /></div>`
    ),
    ...backlinksElement,
    html(`</div>`),
  ]
}
