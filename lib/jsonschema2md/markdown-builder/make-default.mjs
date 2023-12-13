import i from "es2015-i18n-tag"
import { code, heading } from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { simpleTitle } from "./simple-title.mjs"
import { paragraph, text } from "./util.mjs"

const { default: i18n } = i

export function makeDefault(schema, level = 1) {
  if (schema[keyword`default`]) {
    return [
      heading(level + 1, text(i18n`${simpleTitle(schema)} Default Value`)),
      paragraph(text(i18n`The default value is:`)),
      paragraph(
        code("json", JSON.stringify(schema[keyword`default`], undefined, 2))
      ),
    ]
  }
  return []
}
