import { inlineCode, link, tableCell, tableRow } from "mdast-builder"

import { isRequired } from "./is-required.mjs"
import { type } from "./type.mjs"
import { text } from "./util.mjs"

/**
 * Generates the overview table row for a single property definition
 * @param {*} param0
 */
export function makePropHeader(
  required = [],
  isPattern = false,
  slugger,
  urlPrefix,
  schema = {},
  propsForSearch = new Map()
) {
  return ([name, definition]) => {
    // if (definition[keyword`type`] === "enum") {
    //   // console.log('definition::type', definition)
    // }
    // if (definition[keyword`description`]) {
    //   // console.log('definition::description', definition)
    // }
    // if (definition[keyword`items`]) {
    //   const { oneOf } = definition[keyword`items`] || {};
    //   // console.log({name, oneOf, value: definition[keyword`const`]})
    // }
    const schemaId = schema["$id"] ?? ""

    const prop = isPattern
      ? inlineCode(name)
      : link(`#${slugger.slug(name)}`, "", text(name))

    if (prop.type === "link" && prop.url.startsWith("#")) {
      if (schemaId.startsWith("http")) {
        Object.keys(schema.properties).forEach((propName) => {
          const propUrl =
            urlPrefix.slice(0, -1) + "#" + propName.toLocaleLowerCase()

          propsForSearch.set(propUrl, {
            title: propName,
            structuredData: {},
            url: propUrl,
            slug: propName,
          })
        })
      } else {
        const currentSchemaName = schemaId
          .slice(1)
          .replace(/([a-z]+?)([A-Z])/g, (match, p1, p2) => {
            return p1 + "-" + p2
          })
          .toLowerCase()
        const propName = prop.children[0].value
        const propUrl = urlPrefix + currentSchemaName + prop.url
        const propForSearch = {
          title: propName,
          structuredData: {},
          url: propUrl,
          slug: propName,
        }

        propsForSearch.set(propUrl, propForSearch)
      }
    }

    return tableRow([
      tableCell(prop), // Property
      tableCell(type(definition, urlPrefix)),
      tableCell(isRequired(name, required)),
      // tableCell(nullable(definition)),
      // tableCell(text(definition[keyword`const`] || '-')),
      // tableCell(text(definition[keyword`description`] || '-')),
      // tableCell(link(
      //   `${definition[s.slug]}`,
      //   `${definition[s.id]}#${definition[s.pointer]}`,
      //   text(definition[s.titles] && definition[s.titles][0] ? definition[s.titles][0] : `Untitled schema`),
      // )),
    ])
  }
}
