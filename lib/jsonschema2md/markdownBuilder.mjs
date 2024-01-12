import jp from "jsonpath"
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
import { makeBadgeSection } from "./markdown-builder/make-badge-section.mjs"
import { i18n, paragraph, text } from "./markdown-builder/util.mjs"
import { makeImage } from "./markdown-builder/make-image.mjs"
import { makeBacklinks } from "./markdown-builder/make-backlinks.mjs"
import { makeDisclaimer } from "./markdown-builder/make-disclaimer.mjs"
import s from "./symbols.mjs"

export default function build({
  header,
  links = {},
  urlPrefix,
  propsForSearch,
  assets,
  disclaimer,
  isBeta,
  // includeProperties = [],
  // rewriteLinks = (x) => x,
  // exampleFormat = "json",
  // skipProperties = [],
} = {}) {
  console.log("generating markdown")
  return (schemas) => {
    const nodes = jp.nodes([schemas[0].definitions], "$..*[?(@.$ref)]")
    const backlinks = nodes.reduce((acc, cur) => {
      const path = cur.path.slice(2).join(".")
      const refObj = jp.value(schemas[0].definitions, path)
      const _refName = refObj.$ref.slice("#/definitions/".length)
      if (acc[_refName]) {
        // console.log(444, cur)
        acc[_refName].push(path)
      } else {
        acc[_refName] = [path]
      }

      return acc
    }, {})

    return foldl(schemas, {}, (pv, schema) => {
      const slugger = new GhSlugger()
      const description =
        formatDescriptionParagraph(schema[s.meta].longdescription) ||
        paragraph(text(i18n`no description`))

      const id = schema[s.id].replace("#", "")
      // if (typeof schema[s.id] === "string" && !schema[s.id].startsWith("#")) {
      //   console.log(schema[s.slug], schema[s.filename], schema[s.pointer])
      // }
      const prefix = schema[s.pointer].replace(`/definitions/${id}`, "")

      // eslint-disable-next-line no-param-reassign
      pv[schema[s.slug]] = root([
        // todo add more elements
        ...makeHeader(schema, header, links),
        ...makeBadgeSection(schema, 1, [], {
          backlinks,
          urlPrefix,
          showBeta: schema[s.slug] === "overview" && isBeta,
        }),
        ...(schema[s.slug] === "overview"
          ? makeDisclaimer(schema, disclaimer)
          : []),
        description,
        ...makeImage(schema, assets, prefix + "/description", id),
        ...makeJoinTypeList(schema),
        ...makeImage(schema, assets, prefix + "/type", id),
        ...makeConstraintsSection(schema, 1, assets, prefix + "/value", id),
        ...makeImage(schema, assets, prefix + "/value", id),
        ...makeDefault(schema, 1),
        ...makeExamples(schema, 1),
        ...makeProperties(schema, slugger, urlPrefix, propsForSearch, assets),
        ...makeDefinitions(schema, slugger),
        ...makeBacklinks(schema, backlinks, urlPrefix),
      ])

      return pv
    })
  }
}
