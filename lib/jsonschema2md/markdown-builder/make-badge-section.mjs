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
        `<a href="#backlinks" class="badge backlinks">
          <span class="label">Backlinks</span>
          <span class="value">${matchedBacklinks.length}</span>
        </a>`
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
      `<div class="badge type">
        <span class="label">Type</span>
        <span class="value">${type.value}</span>
      </div>`
    ),
    ...backlinksElement,
    html(`</div>`),
  ]
}
