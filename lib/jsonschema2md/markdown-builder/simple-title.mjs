import { genTitle } from "../formattingTools.mjs"
import { keyword } from "../keywords.mjs"
import s from "../symbols.mjs"

export function simpleTitle(schema) {
  return schema[s.parent]
    ? schema[s.pointer].split("/").pop()
    : genTitle(schema[s.titles], schema[keyword`type`])
}
