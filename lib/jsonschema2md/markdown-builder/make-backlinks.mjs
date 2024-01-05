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

  return [
    html(`<div className="section-backlinks">`),
    html(`<div className="backlinks-title">Backlinks</div>`),
    ...matchedBacklinks.map((x) => {
      const path = x.split(".")
      return html(`<div className="backlink">
      <Link to='${urlPrefix}${simpleTitle(path.at(0))}#${path
        .at(2)
        .toLowerCase()}'>${x}</Link>
      </div>`)
    }),
    // heading(level + 1, text(i18n`${simpleTitle(schema)}`)),
    html(`</div>`),
  ]
}
