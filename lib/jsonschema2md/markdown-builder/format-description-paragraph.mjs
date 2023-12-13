function escape(str) {
  if (typeof str === "string") {
    if (/\{/g.test(str)) {
      str = str.replaceAll(/\{/g, `\(`).replaceAll(/\}/g, `\)`)
    } else if (/\</g.test(str)) {
      str = str.replaceAll(/\</g, `&lt;`).replaceAll(/\>/g, `&gt;`)
    }
  }

  return str
}

export function formatDescriptionParagraph(paragraph) {
  paragraph.children = paragraph.children.map((p_dep_1) => {
    return {
      ...p_dep_1,
      children:
        p_dep_1.children?.map((p_dep_2) => {
          if (p_dep_2.type === "text") {
            return {
              ...p_dep_2,
              value: escape(p_dep_2.value),
            }
          } else if (p_dep_2.type === "link") {
            return {
              ...p_dep_2,
              url: p_dep_2.url,
              title: p_dep_2.url,
            }
          } else if (p_dep_2.type === "html") {
            return {
              ...p_dep_2,
              value: escape(p_dep_2.value),
            }
          }

          return p_dep_2
        }) ?? [],
    }
  })

  return paragraph
}
