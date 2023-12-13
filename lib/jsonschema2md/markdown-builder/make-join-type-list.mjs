import { code, html, inlineCode, link, list, listItem } from "mdast-builder"

import { genTitle } from "../formattingTools.mjs"
import { keyword } from "../keywords.mjs"
import s from "../symbols.mjs"
import { i18n, paragraph, text } from "./util.mjs"

export function makeJoinTypeList(schema, depth = 0, maxDepth = 3) {
  const wrapper = (nodesArr) => [
    html(`<div className="property-item">`),
    paragraph(text(i18n`Type`)),
    html(`<div className="property-item-type">`),
    ...nodesArr,
    html(`</div>`),
    html(`</div>`),
  ]

  if (schema[keyword`oneOf`] && depth <= maxDepth) {
    return wrapper([
      paragraph(text(i18n`one (and only one) of`)),
      list("ordered", [
        ...schema[keyword`oneOf`].map((subSchema) =>
          listItem(makeJoinTypeList(subSchema, depth + 1))
        ),
      ]),
    ])
  } else if (schema[keyword`anyOf`] && depth <= maxDepth) {
    return wrapper([
      paragraph(text(i18n`any of`)),
      list("ordered", [
        ...schema[keyword`anyOf`].map((subSchema) =>
          listItem(makeJoinTypeList(subSchema, depth + 1))
        ),
      ]),
    ])
  } else if (schema[keyword`allOf`] && depth <= maxDepth) {
    return wrapper([
      paragraph(text(i18n`all of`)),
      list("ordered", [
        ...schema[keyword`allOf`].map((subSchema) =>
          listItem(makeJoinTypeList(subSchema, depth + 1))
        ),
      ]),
    ])
  } else if (schema[keyword`not`] && depth <= maxDepth) {
    const subSchema = schema[keyword`not`]
    return wrapper([
      paragraph(text(i18n`not`)),
      list("ordered", [listItem(makeJoinTypeList(subSchema, depth + 1))]),
    ])
  } else if (depth > 0) {
    if (schema.pattern) {
      return [inlineCode(schema.type), code("js", schema.pattern)]
    } else if (schema.description) {
      return [inlineCode(schema.type), paragraph(text(schema.description))]
    }

    return [
      link(
        `${schema[s.slug]}.md`,
        i18n`check type definition`,
        text(genTitle(schema[s.titles], schema[keyword`type`]))
      ),
    ]
  } else {
    return []
  }
}
