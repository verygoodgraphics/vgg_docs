import path from "path"
import { each, pairs } from "ferrum"
import fs from "fs-extra"
import yaml from "js-yaml"
import gfm from "remark-gfm"
import stringify from "remark-stringify"
import { unified } from "unified"

import { capitalizeFirstLetter } from "../jsonschema2md/utils.mjs"

/**
 * Write the Markdown to filesystem or an object
 * @param {Object} options
 * @param {string} [options.out] - (optional) Directory where the files will be saved
 * @param {Function} [options.error] - (optional) Error logger
 * @param {Function} [options.info] - (optional) Info logger
 * @param {Function} [options.debug] - (optional) Debug logger
 * @param {{ [key: string]: string }} [options.meta] - (optional) Metadata to be added to Markdown
 * @returns {(astFiles: MarkdownAstFiles) => MarkdownContent[]}
 */
export function writeMarkdown({ out, error, meta, rootDefinitionName }) {
  const processor = unified().use(gfm).use(stringify)

  return (schemas) => {
    /** @type {MarkdownContent[]} */
    const output = []
    each(pairs(schemas), (tuple) => {
      /** @type {[ string, MarkdownAst ]} */
      const [name, markdownAst] = tuple

      if (
        name.includes("properties") ||
        name.includes("oneof") ||
        name.includes("anyof") ||
        name.includes("allof") ||
        name.includes("not") ||
        name.includes("definitions") ||
        name === "undefined"
      )
        return

      console.log(111, name.split("-").map(capitalizeFirstLetter).join(""))

      // add YAML frontmatter
      const content =
        "---\n" +
        `title: ${
          name === "overview"
            ? rootDefinitionName ?? "Overview"
            : name.split("-").map(capitalizeFirstLetter).join("")
        }\n` +
        `sidebar_class_name: ${name === "overview" ? "hidden" : "show"}\n` +
        (!meta ? "" : yaml.dump(meta)) +
        "---\n\n" +
        processor.stringify(markdownAst)

      const fileName = `${name}.md`
      let fullPath
      if (out) {
        fullPath = path.resolve(out, fileName)
        try {
          fs.outputFileSync(fullPath, content)
        } catch (err) {
          error(err)
        }
        // info(`${fileName} created`);
      }
      output.push({
        fileName,
        fullPath,
        markdownAst,
        content,
      })
    })

    return output
  }
}
