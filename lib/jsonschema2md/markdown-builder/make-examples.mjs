import yaml from "js-yaml"
import { code, heading } from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { simpleTitle } from "./simple-title.mjs"
import { i18n, paragraph, text } from "./util.mjs"

export function makeExamples(schema, level = 1, format = "json") {
  if (
    schema[keyword`examples`] &&
    schema[keyword`examples`].length > 0 &&
    format === "yaml"
  ) {
    return [
      heading(level + 1, text(i18n`${simpleTitle(schema)} Examples`)),
      ...schema[keyword`examples`].map((example) =>
        paragraph(code("yaml", yaml.dump(example, undefined, 2)))
      ),
    ]
  }
  if (
    schema[keyword`examples`] &&
    schema[keyword`examples`].length > 0 &&
    format === "json"
  ) {
    return [
      heading(level + 1, text(i18n`${simpleTitle(schema)} Examples`)),
      ...schema[keyword`examples`].map((example) =>
        paragraph(code("json", JSON.stringify(example, undefined, 2)))
      ),
    ]
  }
  return []
}
