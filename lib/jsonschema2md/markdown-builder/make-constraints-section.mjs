import {
  code,
  html,
  inlineCode,
  link,
  strong,
  table,
  tableCell,
  tableRow,
} from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { i18n, paragraph, text } from "./util.mjs"
import { makeEnumImage } from "./make-image.mjs"

const formats = {
  "date-time": {
    label: i18n`date time`,
    text: i18n`the string must be a date time string, according to `,
    specname: "RFC 3339, section 5.6",
    speclink: "https://tools.ietf.org/html/rfc3339",
  },
  date: {
    label: i18n`date`,
    text: i18n`the string must be a date string, according to `,
    specname: "RFC 3339, section 5.6",
    speclink: "https://tools.ietf.org/html/rfc3339",
  },
  time: {
    label: i18n`time`,
    text: i18n`the string must be a time string, according to `,
    specname: "RFC 3339, section 5.6",
    speclink: "https://tools.ietf.org/html/rfc3339",
  },
  duration: {
    label: i18n`duration`,
    text: i18n`the string must be a duration string, according to `,
    specname: "RFC 3339, section 5.6",
    speclink: "https://tools.ietf.org/html/rfc3339",
  },
  email: {
    label: i18n`email`,
    text: i18n`the string must be an email address, according to `,
    specname: "RFC 5322, section 3.4.1",
    speclink: "https://tools.ietf.org/html/rfc5322",
  },
  "idn-email": {
    label: i18n`(international) email`,
    text: i18n`the string must be an (international) email address, according to `,
    specname: "RFC 6531",
    speclink: "https://tools.ietf.org/html/rfc6531",
  },
  hostname: {
    label: i18n`hostname`,
    text: i18n`the string must be a hostname, according to `,
    specname: "RFC 1123, section 2.1",
    speclink: "https://tools.ietf.org/html/rfc1123",
  },
  "idn-hostname": {
    label: i18n`(international) hostname`,
    text: i18n`the string must be an (IDN) hostname, according to `,
    specname: "RFC 5890, section 2.3.2.3",
    speclink: "https://tools.ietf.org/html/rfc5890",
  },
  ipv4: {
    label: i18n`IPv4`,
    text: i18n`the string must be an IPv4 address (dotted quad), according to `,
    specname: "RFC 2673, section 3.2",
    speclink: "https://tools.ietf.org/html/rfc2673",
  },
  ipv6: {
    label: i18n`IPv6`,
    text: i18n`the string must be an IPv6 address, according to `,
    specname: "RFC 4291, section 2.2",
    speclink: "https://tools.ietf.org/html/rfc4291",
  },
  uri: {
    label: i18n`URI`,
    text: i18n`the string must be a URI, according to `,
    specname: "RFC 3986",
    speclink: "https://tools.ietf.org/html/rfc3986",
  },
  iri: {
    label: i18n`IRI`,
    text: i18n`the string must be a IRI, according to `,
    specname: "RFC 3987",
    speclink: "https://tools.ietf.org/html/rfc3987",
  },
  "uri-reference": {
    label: i18n`URI reference`,
    text: i18n`the string must be a URI reference, according to `,
    specname: "RFC 3986",
    speclink: "https://tools.ietf.org/html/rfc3986",
  },
  "iri-reference": {
    label: i18n`IRI reference`,
    text: i18n`the string must be a IRI reference, according to `,
    specname: "RFC 3987",
    speclink: "https://tools.ietf.org/html/rfc3987",
  },
  uuid: {
    label: i18n`UUID`,
    text: i18n`the string must be a UUID, according to `,
    specname: "RFC 4122",
    speclink: "https://tools.ietf.org/html/rfc4122",
  },
  "json-pointer": {
    label: i18n`JSON Pointer`,
    text: i18n`the string must be a JSON Pointer, according to `,
    specname: "RFC 6901, section 5",
    speclink: "https://tools.ietf.org/html/rfc6901",
  },
  "relative-json-pointer": {
    label: i18n`Relative JSON Pointer`,
    text: i18n`the string must be a relative JSON Pointer, according to `,
    specname: "draft-handrews-relative-json-pointer-01",
    speclink:
      "https://tools.ietf.org/html/draft-handrews-relative-json-pointer-01",
  },
  regex: {
    label: i18n`RegEx`,
    text: i18n`the string must be a regular expression, according to `,
    specname: "ECMA-262",
    speclink:
      "http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf",
  },
  "uri-template": {
    label: i18n`URI Template`,
    text: i18n`the string must be a URI template, according to `,
    specname: "RFC 6570",
    speclink: "https://tools.ietf.org/html/rfc6570",
  },
}

export function makeConstraintsSection(schema, level = 1, assets, prefix, id) {
  const constraints = []
  if (schema[keyword`const`] !== undefined) {
    constraints.push(
      paragraph([
        strong(text(i18n`constant`)),
        text(": "),
        text(i18n`the value of this property must be equal to:`),
      ])
    )
    constraints.push(
      code("json", JSON.stringify(schema[keyword`const`], undefined, 2))
    )
  }

  if (schema[keyword`enum`]) {
    // const metas = schema[keyword`meta:enum`] || {};
    const enumDescriptions = schema[keyword`enumDescriptions`]

    constraints.push(
      paragraph([
        strong(text(i18n`enum`)),
        text(": "),
        text(
          i18n`the value of this property must be equal to one of the following values:`
        ),
      ])
    )
    constraints.push(
      table("left", [
        tableRow([
          tableCell(text(i18n`Value`)),
          tableCell(text(i18n`Explanation`)),
        ]),
        ...(Array.isArray(schema[keyword`enum`])
          ? schema[keyword`enum`].map((value, index) =>
              tableRow([
                tableCell(inlineCode(JSON.stringify(value))),
                tableCell(
                  paragraph([
                    html(`<div className="enum-description">`),
                    ...enumDescriptions[index]
                      .split(/(`[^`]*`)/g)
                      .map((str) => {
                        if (str.startsWith("`")) {
                          return inlineCode(str.slice(1, -1))
                        }

                        return text(str)
                      }),
                    ...makeEnumImage(schema, assets, prefix, id, index),
                    html(`</div>`),
                  ])
                ),
                // tableCell(text(metas[Array.isArray(value) ? JSON.stringify(value) : value] || '')),
              ])
            )
          : []),
      ])
    )
  }

  // https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
  if (
    schema[keyword`multipleOf`] !== undefined &&
    typeof schema[keyword`multipleOf`] === "number"
  ) {
    // console.log('multiple!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`multiple of`)),
        text(": "),
        text(i18n`the value of this number must be a multiple of: `),
        inlineCode(String(schema[keyword`multipleOf`])),
      ])
    )
  }
  if (
    schema[keyword`maximum`] !== undefined &&
    typeof schema[keyword`maximum`] === "number"
  ) {
    // console.log('maximum!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`maximum`)),
        text(": "),
        text(i18n`the value of this number must smaller than or equal to: `),
        inlineCode(String(schema[keyword`maximum`])),
      ])
    )
  }
  if (
    schema[keyword`exclusiveMaximum`] !== undefined &&
    typeof schema[keyword`exclusiveMaximum`] === "number"
  ) {
    // console.log('exclusiveMaximum!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`maximum (exclusive)`)),
        text(": "),
        text(i18n`the value of this number must be smaller than: `),
        inlineCode(String(schema[keyword`exclusiveMaximum`])),
      ])
    )
  }
  if (
    schema[keyword`minimum`] !== undefined &&
    typeof schema[keyword`minimum`] === "number"
  ) {
    // console.log('minimum!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`minimum`)),
        text(": "),
        text(i18n`the value of this number must greater than or equal to: `),
        inlineCode(String(schema[keyword`minimum`])),
      ])
    )
  }
  if (
    schema[keyword`exclusiveMinimum`] !== undefined &&
    typeof schema[keyword`exclusiveMinimum`] === "number"
  ) {
    // console.log('exclusiveMinimum!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`minimum (exclusive)`)),
        text(": "),
        text(i18n`the value of this number must be greater than: `),
        inlineCode(String(schema[keyword`exclusiveMinimum`])),
      ])
    )
  }

  // https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
  if (
    schema[keyword`maxLength`] !== undefined &&
    typeof schema[keyword`maxLength`] === "number"
  ) {
    // console.log('maxLength!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`maximum length`)),
        text(": "),
        text(i18n`the maximum number of characters for this string is: `),
        inlineCode(String(schema[keyword`maxLength`])),
      ])
    )
  }
  if (
    schema[keyword`minLength`] !== undefined &&
    typeof schema[keyword`minLength`] === "number"
  ) {
    // console.log('minLength!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`minimum length`)),
        text(": "),
        text(i18n`the minimum number of characters for this string is: `),
        inlineCode(String(schema[keyword`minLength`])),
      ])
    )
  }
  if (schema[keyword`pattern`]) {
    // console.log('pattern!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`pattern`)),
        text(": "),
        text(i18n`the string must match the following regular expression: `),
      ])
    )
    constraints.push(code("regexp", schema[keyword`pattern`]))
    constraints.push(
      paragraph([
        link(
          `https://regexr.com/?expression=${encodeURIComponent(
            schema[keyword`pattern`]
          )}`,
          i18n`try regular expression with regexr.com`,
          text(i18n`try pattern`)
        ),
      ])
    )
  }
  // https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.7.3
  if (
    schema.format &&
    typeof schema.format === "string" &&
    formats[schema.format]
  ) {
    constraints.push(
      paragraph([
        strong(text(formats[keyword([schema.format])].label)),
        text(": "),
        text(formats[schema.format].text),
        link(
          formats[schema.format].speclink,
          i18n`check the specification`,
          text(formats[schema.format].specname)
        ),
      ])
    )
  } else if (schema.format && typeof schema.format === "string") {
    constraints.push(
      paragraph([
        strong(text(i18n`unknown format`)),
        text(": "),
        text(i18n`the value of this string must follow the format: `),
        inlineCode(String(schema.format)),
      ])
    )
  }

  if (schema[keyword`contentEncoding`]) {
    constraints.push(
      paragraph([
        strong(text(i18n`encoding`)),
        text(": "),
        text(
          i18n`the string content must be using the ${
            schema[keyword`contentEncoding`]
          } content encoding.`
        ),
      ])
    )
  }
  if (schema[keyword`contentMediaType`]) {
    constraints.push(
      paragraph([
        strong(text(i18n`media type`)),
        text(": "),
        text(i18n`the media type of the contents of this string is: `),
        inlineCode(String(schema[keyword`contentMediaType`])),
      ])
    )
  }
  if (schema[keyword`contentSchema`]) {
    constraints.push(
      paragraph([
        strong(text(i18n`schema`)),
        text(": "),
        text(i18n`the contents of this string should follow this schema: `),
        link(
          `${schema[keyword`contentSchema`][s.slug]}.md`,
          i18n`check type definition`,
          text(
            genTitle(
              schema[keyword`contentSchema`][s.titles],
              schema[keyword`contentSchema`][keyword`type`]
            )
          )
        ),
      ])
    )
  }

  // https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
  if (schema[keyword`maxItems`] !== undefined) {
    // console.log('maxItems!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`maximum number of items`)),
        text(": "),
        text(i18n`the maximum number of items for this array is: `),
        inlineCode(String(schema[keyword`maxItems`])),
      ])
    )
  }
  if (schema[keyword`minItems`] !== undefined) {
    // console.log('minItems!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`minimum number of items`)),
        text(": "),
        text(i18n`the minimum number of items for this array is: `),
        inlineCode(String(schema[keyword`minItems`])),
      ])
    )
  }
  if (schema[keyword`uniqueItems`]) {
    // console.log('uniqueItems!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`unique items`)),
        text(": "),
        text(
          i18n`all items in this array must be unique. Duplicates are not allowed.`
        ),
      ])
    )
  }
  if (schema[keyword`minContains`] !== undefined && schema[keyword`contains`]) {
    // console.log('minContains!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`minimum number of contained items`)),
        text(": "),
        text(
          `${i18n`this array may not contain fewer than ${String(
            schema[keyword`minContains`]
          )} items that validate against the schema:`} `
        ),
        link(
          `${schema[keyword`contains`][s.slug]}.md`,
          i18n`check type definition`,
          text(
            genTitle(
              schema[keyword`contains`][s.titles],
              schema[keyword`contains`][keyword`type`]
            )
          )
        ),
      ])
    )
  }
  if (schema[keyword`maxContains`] !== undefined && schema[keyword`contains`]) {
    // console.log('maxContains!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`maximum number of contained items`)),
        text(": "),
        text(
          `${i18n`this array may not contain more than ${String(
            schema[keyword`maxContains`]
          )} items that validate against the schema:`} `
        ),
        link(
          `${schema[keyword`contains`][s.slug]}.md`,
          i18n`check type definition`,
          text(
            genTitle(
              schema[keyword`contains`][s.titles],
              schema[keyword`contains`][keyword`type`]
            )
          )
        ),
      ])
    )
  }

  // https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
  if (schema[keyword`maxProperties`] !== undefined) {
    // console.log('maxProperties!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`maximum number of properties`)),
        text(": "),
        text(i18n`the maximum number of properties for this object is: `),
        inlineCode(String(schema[keyword`maxProperties`])),
      ])
    )
  }
  if (schema[keyword`minProperties`] !== undefined) {
    // console.log('minProperties!', schema[s.filename], schema[s.pointer]);
    constraints.push(
      paragraph([
        strong(text(i18n`minimum number of properties`)),
        text(": "),
        text(i18n`the minimum number of properties for this object is: `),
        inlineCode(String(schema[keyword`minProperties`])),
      ])
    )
  }

  if (constraints.length > 0) {
    return [
      html(`<div className="property-item">`),
      paragraph(text(i18n`Value`)),
      html(`<div className="value-description">`),
      ...constraints,
      html(`</div>`),
      html(`</div>`),
    ]
  }
  return []
}
