import path from "path"
import fs from "fs-extra"

import s from "./symbols.mjs"

/**
 * Write the JSON Schemas to filesystem or an object
 * @param {Object} options
 * @param {string} [options.schemaDir] - (optional) Directory where the files will be saved
 * @param {string} [options.originDir] - (optional) Directory where the files were loaded from
 * @returns {(schemas: ExtendedJsonSchema[]) => SchemaContent[]}
 */
export default function writeSchema({ schemaDir, originDir }) {
  return (schemas) => {
    // eslint-disable-next-line no-console
    console.log("preparing schemas")

    const realSchemas = Object.values(schemas).filter(
      (schema) => !schema[s.parent]
    )
    return realSchemas.map((schema) => {
      const fileName = schema[s.filename]
      const inputPath =
        schema[s.fullPath] || (originDir && path.join(originDir, fileName))
      let content = schema

      if (inputPath) {
        content = fs.readJsonSync(inputPath)
        if (schema[s.meta] && schema[s.meta].description) {
          // copy description from external file
          content.description = schema[s.meta].description
        }
        if (
          schema.examples &&
          Array.isArray(schema.examples) &&
          schema.examples.length > 0
        ) {
          // copy examples from external files
          content.examples = [...schema.examples]
        }
      }

      let fullPath
      if (schemaDir) {
        // eslint-disable-next-line no-console
        console.log("writing schemas to", schemaDir)
        fullPath = path.resolve(schemaDir, fileName)
        fs.outputJsonSync(fullPath, content)
      }

      return {
        fileName,
        fullPath,
        content,
      }
    })
  }
}
