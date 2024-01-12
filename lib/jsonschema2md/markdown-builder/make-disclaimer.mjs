import { paragraph, html } from "mdast-builder"

export function makeDisclaimer(schema, disclaimer) {
  return [
    paragraph([
      html(`:::warning[Disclaimer]

${disclaimer}

:::`),
    ]),
  ]
}
