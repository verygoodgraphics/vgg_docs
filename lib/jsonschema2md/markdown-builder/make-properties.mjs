import { html } from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { makePropList } from "./make-prop-list.mjs"
import { makePropTable } from "./make-prop-table.mjs"
import { simpleTitle } from "./simple-title.mjs"

/**
 * Generates the properties section for a schema
 * @param {*} schema
 */
export function makeProperties(schema, slugger, urlPrefix, propsForSearch) {
  if (
    schema[keyword`properties`] ||
    schema[keyword`patternProperties`] ||
    schema[keyword`additionalProperties`]
  ) {
    return [
      html(`<div className="property-preview">`),
      // heading(3, text(`${simpleTitle(schema)} Properties`)),
      // html(`<div className="properties-badge">Properties</div>`),
      html(`<div className="property-table">`),
      makePropTable(
        schema[keyword`properties`],
        schema[keyword`patternProperties`],
        schema[keyword`additionalProperties`],
        schema[keyword`required`],
        slugger,
        [],
        urlPrefix,
        schema,
        propsForSearch
      ),
      html(`</div>`),
      html(`</div>`),
      ...makePropList(
        schema[keyword`properties`],
        schema[keyword`patternProperties`],
        schema[keyword`additionalProperties`],
        schema[keyword`required`],
        1,
        urlPrefix
      ),
    ]
  }
  return []
}
