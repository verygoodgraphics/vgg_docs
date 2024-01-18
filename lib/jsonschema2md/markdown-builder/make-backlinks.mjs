import { html } from "mdast-builder"

export function makeBacklinks(schema, backlinks = [], urlPrefix = "") {
  let matchedBacklinks = []
  if (schema.$id) {
    matchedBacklinks = backlinks[schema.$id.replace("#", "")] ?? []
  }

  // turn title like LowerCase into lower-case
  const simpleTitle = (title) => {
    return title
      .split(/(?=[A-Z])/)
      .join("-")
      .toLowerCase()
  }

  if (matchedBacklinks.length === 0) return []

  return [
    html(`<div id="backlinks" className="section-backlinks">`),
    html(`<div className="backlinks-title">Backlinks</div>`),
    html(`<ul className="backlinks-list">`),
    ...matchedBacklinks.map((x) => {
      const path = x.split(".")
      if (!path.at(2)) {
        return ""
      }
      return html(`<li className="backlink">
      <Link to='${urlPrefix}${simpleTitle(path.at(0))}#${path
        .at(2)
        ?.toLowerCase()}'>${path.at(0)}.${path.at(2)}</Link>
      </li>`)
    }),
    html(`</ul>`),
    // heading(level + 1, text(i18n`${simpleTitle(schema)}`)),
    html(`</div>`),
  ]
}
