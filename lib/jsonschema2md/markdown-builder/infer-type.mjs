import { html } from "mdast-builder"

export function inferType(schema) {
  const { value } = type(schema)
  return html(`<span className="property-type">${value}</span>`)
}
