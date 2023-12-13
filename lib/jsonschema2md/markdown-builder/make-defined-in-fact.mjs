import { listItem } from "mdast-builder"

import { i18n, paragraph, text } from "./util.mjs"

export function makeDefinedInFact(definition) {
  return listItem(
    paragraph([
      text(i18n`defined in: `),
      link(
        `${definition[s.slug]}`,
        `${definition[s.id]}#${definition[s.pointer]}`,
        text(
          definition[s.titles] && definition[s.titles][0]
            ? definition[s.titles][0]
            : i18n`Untitled schema`
        )
      ),
    ])
  )
}
