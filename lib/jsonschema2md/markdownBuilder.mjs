import { foldl } from "ferrum"
import GhSlugger from "github-slugger"
import { root } from "mdast-builder"

import { formatDescriptionParagraph } from "./markdown-builder/format-description-paragraph.mjs"
import { makeConstraintsSection } from "./markdown-builder/make-constraints-section.mjs"
import { makeDefault } from "./markdown-builder/make-default.mjs"
import { makeDefinitions } from "./markdown-builder/make-definitions.mjs"
import { makeExamples } from "./markdown-builder/make-examples.mjs"
import { makeHeader } from "./markdown-builder/make-header.mjs"
import { makeJoinTypeList } from "./markdown-builder/make-join-type-list.mjs"
import { makeProperties } from "./markdown-builder/make-properties.mjs"
import { makeTypeSection } from "./markdown-builder/make-type-section.mjs"
import { i18n, paragraph, text } from "./markdown-builder/util.mjs"
import s from "./symbols.mjs"

export default function build({
  header,
  links = {},
  urlPrefix,
  propsForSearch,
  // includeProperties = [],
  // rewriteLinks = (x) => x,
  // exampleFormat = "json",
  // skipProperties = [],
} = {}) {
  console.log("generating markdown")
  return (schemas) =>
    foldl(schemas, {}, (pv, schema) => {
      const slugger = new GhSlugger()
      const description =
        formatDescriptionParagraph(schema[s.meta].longdescription) ||
        paragraph(text(i18n`no description`))
      // eslint-disable-next-line no-param-reassign
      pv[schema[s.slug]] = root([
        // todo add more elements
        ...makeHeader(schema, header, links),
        ...makeTypeSection(schema, 1),
        description,
        ...makeJoinTypeList(schema),
        ...makeConstraintsSection(schema, 1),
        ...makeDefault(schema, 1),
        ...makeExamples(schema, 1),
        ...makeProperties(schema, slugger, urlPrefix, propsForSearch),
        ...makeDefinitions(schema, slugger),
      ])

      return pv
    })
}
