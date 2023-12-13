import { flat, list as flist } from "ferrum"
import { heading, html, inlineCode } from "mdast-builder"

import s from "../symbols.mjs"
import { formatDescriptionParagraph } from "./format-description-paragraph.mjs"
import { isRequired } from "./is-required.mjs"
import { makeComment } from "./make-comment.mjs"
import { makeConstraintsSection } from "./make-constraints-section.mjs"
import { makeDefault } from "./make-default.mjs"
import { makeExamples } from "./make-examples.mjs"
import { makeFactList } from "./make-fact-list.mjs"
import { makeRestrictions } from "./make-restrictions.mjs"
import { makeTypeSection } from "./make-type-section.mjs"
import { type } from "./type.mjs"
import { i18n, paragraph, text } from "./util.mjs"

export function makePropList(
  properties = {},
  patternProperties = {},
  additionalProperties,
  required,
  level = 2,
  urlPrefix
) {
  return [
    ...flist(
      flat(
        Object.entries(properties || {}).map(([name, definition]) => {
          let description = paragraph(text(i18n`no description`))

          if (
            definition[s.meta] &&
            definition[s.meta].longdescription.children.length > 0
          ) {
            const descriptionParagraph = {
              ...definition[s.meta].longdescription,
            }

            description = formatDescriptionParagraph(descriptionParagraph)
          }

          const propType = type(definition, urlPrefix)

          return [
            html(`<div className="property">`),

            html(`<div className="property-heading">`),
            heading(level + 1, text(name)),
            // inferType(definition),
            isRequired(name, required),
            html(`</div>`),

            ...(name === "class"
              ? []
              : [
                  html(`<div className="property-item">`),
                  paragraph(text(i18n`Description`)),
                  description,
                  html(`</div>`),
                ]),

            html(`<div className="property-item">`),
            paragraph(text(i18n`Type`)),

            ...(propType instanceof Array ? propType : [paragraph(propType)]),

            html(`</div>`),

            // html('<div className="property-item">'),
            // paragraph(text('Default')),
            // paragraph(text(definition[keyword`const`] || '-')),
            // html('</div>'),

            ...makeConstraintsSection(definition, level + 1),

            // description,
            ...makeComment(definition),
            // paragraph(inlineCode(name)),
            // makeFactList(name, definition, required), // isRequired
            // ...makeTypeSection(definition, level + 1), // type inference
            ...makeDefault(definition, level + 1),
            ...makeExamples(definition, level + 1),
            ...makeRestrictions(definition, level + 1),

            html(`</div>`),
          ]
        })
      )
    ),
    ...flist(
      flat(
        Object.entries(patternProperties || {}).map(([name, definition]) => {
          const description =
            definition[s.meta] && definition[s.meta].longdescription
              ? definition[s.meta].longdescription
              : paragraph(text(i18n`no description`))

          return [
            heading(level + 1, [text(i18n`Pattern: `), inlineCode(name)]),
            description,
            ...makeComment(definition),
            paragraph(inlineCode(name)),
            makeFactList(name, definition, required),
            ...makeTypeSection(definition, level + 1),
            ...makeConstraintsSection(definition, level + 1),
            ...makeDefault(definition, level + 1),
            ...makeExamples(definition, level + 1),
            ...makeRestrictions(definition, level + 1),
          ]
        })
      )
    ),
    ...((definition) => {
      if (typeof additionalProperties === "object") {
        const description =
          definition[s.meta].longdescription ||
          paragraph(text(i18n`no description`))
        return [
          heading(level + 1, text(i18n`Additional Properties`)),
          paragraph(
            text(
              i18n`Additional properties are allowed, as long as they follow this schema:`
            )
          ),
          description,
          ...makeComment(definition),
          makeFactList(i18n`Additional properties`, definition, required),
          ...makeTypeSection(definition, level + 1),
          ...makeConstraintsSection(definition, level + 1),
          ...makeDefault(definition, level + 1),
          ...makeExamples(definition, level + 1),
          ...makeRestrictions(definition, level + 1),
        ]
      } else if (additionalProperties === true) {
        return [
          heading(level + 1, text(i18n`Additional Properties`)),
          paragraph(
            text(
              i18n`Additional properties are allowed and do not have to follow a specific schema`
            )
          ),
        ]
      }
      // nothing
      return []
    })(additionalProperties),
  ]
}