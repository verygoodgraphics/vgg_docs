import {
  html,
  inlineCode,
  strong,
  table,
  tableCell,
  tableRow,
} from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { i18n, paragraph, text } from "./util.mjs"

export function makeEnumArrayFact(schema) {
  const constraints = []
  if (schema[keyword`enum`]) {
    // const metas = schema[keyword`meta:enum`] || {};
    const enumDescriptions = schema[keyword`enumDescriptions`]

    constraints.push(
      paragraph([
        strong(text(i18n`enum`)),
        text(": "),
        text(
          i18n`the value of this property must be equal to one of the following values:`
        ),
      ])
    )
    constraints.push(
      table("left", [
        tableRow([
          tableCell(text(i18n`Value`)),
          tableCell(text(i18n`Explanation`)),
        ]),
        ...(Array.isArray(schema[keyword`enum`])
          ? schema[keyword`enum`].map((value, index) =>
              tableRow([
                tableCell(inlineCode(JSON.stringify(value))),
                tableCell(
                  paragraph([
                    html(`<div className="enum-description">`),
                    ...enumDescriptions[index]
                      .split(/(`[^`]*`)/g)
                      .map((str) => {
                        if (str.startsWith("`")) {
                          return inlineCode(str.slice(1, -1))
                        }

                        return text(str)
                      }),
                    // ...makeEnumImage(schema, assets, prefix, id, index),
                    html(`</div>`),
                  ])
                ),
                // tableCell(text(metas[Array.isArray(value) ? JSON.stringify(value) : value] || '')),
              ])
            )
          : []),
      ])
    )
  }

  return constraints
}
