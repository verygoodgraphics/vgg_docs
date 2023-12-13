import { html } from "mdast-builder"

export function isRequired(name, required = []) {
  if (required.indexOf(name) > -1) {
    return html(`<span className="property-required">Required</span>`)
  } else {
    return html(`<span className="property-optional">Optional</span>`)
  }
}
