import { blockquote } from "mdast-builder"

import { keyword } from "../keywords.mjs"

export function makeComment(schema) {
  if (schema[keyword`$comment`]) {
    return [blockquote(schema[s.meta].longcomment)]
  }
  return []
}
