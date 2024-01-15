import { paragraph, html } from "mdast-builder"

export function makeDisclaimer(schema, disclaimer) {
  return disclaimer ? [
    paragraph([
      html(`:::warning[Disclaimer]

${disclaimer}

:::`),
    ]),
  ] : [];
}
