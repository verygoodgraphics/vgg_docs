import { heading } from "mdast-builder"

import { keyword } from "../keywords.mjs"
import { simpleTitle } from "./simple-title.mjs"
import { i18n, paragraph, text } from "./util.mjs"

export function makeRestrictions(schema, level = 1) {
  if (schema[keyword`readOnly`] && schema[keyword`writeOnly`]) {
    return [
      heading(
        level + 1,
        text(i18n`${simpleTitle(schema)} Access Restrictions`)
      ),
      paragraph(
        text(
          i18n`The value of this property is managed exclusively by the owning authority and never exposed to the outside. It can neither be read nor written.`
        )
      ),
    ]
  }
  if (schema[keyword`readOnly`]) {
    return [
      heading(
        level + 1,
        text(i18n`${simpleTitle(schema)} Access Restrictions`)
      ),
      paragraph(
        text(
          i18n`The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority`
        )
      ),
    ]
  }
  if (schema[keyword`writeOnly`]) {
    return [
      heading(
        level + 1,
        text(i18n`${simpleTitle(schema)} Access Restrictions`)
      ),
      paragraph(
        text(
          i18n`The value of this property is never present when the instance is retrieved from the owning authority. It can be present when sent to the owning authority to update or create the document (or the resource it represents), but it will not be included in any updated or newly created version of the instance.`
        )
      ),
    ]
  }
  return []
}
