import { html } from "mdast-builder"

import { makeTypeFact } from "./make-type-fact.mjs"

export function makeBadgeSection(
  schema,
  level = 1,
  skipProperties = [],
  options = {}
) {
  const { backlinks = [], urlPrefix = "", showBeta } = options
  let matchedBacklinks = []
  let backlinksElement = []
  let betaBadgeElement = []
  if (schema.$id) {
    matchedBacklinks = backlinks[schema.$id.replace("#", "")] ?? []
  }

  if (matchedBacklinks.length > 0) {
    backlinksElement = [
      html(
        `<a href="#backlinks" className="badge backlinks">
          <span className="label">Backlinks</span>
          <span className="value">${matchedBacklinks.length}</span>
        </a>`
      ),
    ]
  }

  if (showBeta) {
    betaBadgeElement.push(
      html(
        `<div className="badge beta">
          <span className="label">Beta</span>
        </div>`
      )
    )
  }

  if (skipProperties.includes("typesection")) {
    return ""
  }
  const { children } = makeTypeFact(schema)

  if (!children || children?.length === 0) {
    return ""
  }

  children[0].children.shift()
  const type = children[0].children.shift()
  return [
    html(`<div className="section-badges">`),
    ...betaBadgeElement,
    html(
      `<div className="badge type">
        <span className="label">Type</span>
        <span className="value">${type.value}</span>
      </div>`
    ),
    ...backlinksElement,
    html(`</div>`),
  ]
}
