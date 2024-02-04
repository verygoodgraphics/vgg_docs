import { link, listItem, list } from "mdast-builder"

import { genTitle } from "../formattingTools.mjs"
import { keyword } from "../keywords.mjs"
import { i18n, paragraph, text } from "./util.mjs"

export function makeArrayFact(items, additional, skipProperties = []) {
  if (skipProperties.includes("arrayfact")) {
    return ""
  }
  return listItem([
    paragraph([
      text(i18n`Type: `),
      text(
        i18n`an array where each item follows the corresponding schema in the following list:`
      ),
    ]),
    list("ordered", [
      ...items.map((schema) =>
        listItem(
          paragraph(
            link(
              `${schema[s.slug]}.md`,
              i18n`check type definition`,
              text(genTitle(schema[s.titles], schema[keyword`type`]))
            )
          )
        )
      ),
      ...(() => {
        if (additional === true) {
          return [
            listItem(
              paragraph(
                text(i18n`and all following items may follow any schema`)
              )
            ),
          ]
        } else if (typeof additional === "object") {
          return [
            listItem(
              paragraph([
                text(i18n`and all following items must follow the schema: `),
                link(
                  `${additional[s.slug]}.md`,
                  i18n`check type definition`,
                  text(
                    genTitle(additional[s.titles], additional[keyword`type`])
                  )
                ),
              ])
            ),
          ]
        }
        return []
      })(),
    ]),
  ])
}
