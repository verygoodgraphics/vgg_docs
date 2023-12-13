/**
 * Generates the definitions section for a schema
 * @param {*} schema
 */
export function makeDefinitions(schema, slugger) {
  // if (schema.definitions || schema[keyword`$defs`]) {
  //   const defGroups = [
  //     ...Object.entries(schema[keyword`$defs`] || {}),
  //     ...Object.entries(schema.definitions || {}),
  //   ].map(([groupname, subSchema]) => {
  //     const groupTable = makePropTable(
  //       subSchema[keyword`properties`],
  //       subSchema[keyword`patternProperties`],
  //       subSchema[keyword`additionalProperties`],
  //       subSchema[keyword`required`],
  //       slugger
  //     )
  //     return [
  //       heading(2, text(i18n`Definitions group ${groupname}`)),
  //       paragraph(text(i18n`Reference this group by using`)),
  //       code(
  //         "json",
  //         JSON.stringify({
  //           $ref: `${subSchema[s.id]}#${subSchema[s.pointer]}`,
  //         })
  //       ),
  //       groupTable,
  //       html('<div className="properties">'),
  //       ...makePropList(
  //         subSchema[keyword`properties`],
  //         subSchema[keyword`patternProperties`],
  //         subSchema[keyword`additionalProperties`],
  //         subSchema[keyword`required`],
  //         2
  //       ),
  //       html("</div>"),
  //     ]
  //   })

  //   return [
  //     html(`<div className="definitions-wrapper">`),
  //     heading(
  //       1,
  //       text(
  //         i18n`${genTitle(
  //           schema[s.titles],
  //           schema[keyword`type`]
  //         )} Definitions`
  //       )
  //     ),
  //     ...flist(flat(defGroups)),
  //     html("</div>"),
  //   ]
  // }
  return []
}
