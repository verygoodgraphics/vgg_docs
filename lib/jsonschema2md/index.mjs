/* @ts-check */
import nodePath from "node:path"
import { fileURLToPath } from "url"
import { createDefaultLogger, SimpleInterface } from "@adobe/helix-log"
import { i18nConfig } from "es2015-i18n-tag"
import { map, pipe } from "ferrum"
import fs from "fs-extra"

import build from "./markdownBuilder.mjs"
// import readme from "./readmeBuilder.mjs"
import loader from "./schemaProxy.mjs"
import traverse from "./traverseSchema.mjs"
import { writeMarkdown } from "./writeMarkdown.mjs"
import writeSchema from "./writeSchema.mjs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = nodePath.dirname(__filename)

const logger = new SimpleInterface({
  logger: createDefaultLogger(),
})
const debug = logger.debug.bind(logger)
const info = logger.info.bind(logger)
const error = logger.error.bind(logger)

/**
 * Public API for jsonschema2md that can be used to turn JSON Schema files
 * into readable Markdown documentation.
 * @param {JsonSchema | SchemaFiles} schema JSON Schema input to get data from
 * @param {Object} options Additional options for generation
 * @param {string} [options.schemaPath] - (optional) Path to directory containing all JSON Schemas
 * or a single JSON Schema file. This will be considered as the baseURL.
 * @param {string} [options.outDir] - (optional) Path to output directory. Generating files will
 * be skipped if directory is not specified.
 * @param {{ [key:string]: string }} [options.metadata] - (optional) Add metadata elements to
 * .md files.
 * @param {string} [options.schemaOut] - (optional) Output JSON Schema files including
 * description and validated examples in the specified folder.
 * @param {{ [key:string]: string }[]} [options.links] - (optional) Add this file as a link
 * explaining the specified attribute.
 * @param {string} [options.i18n="locales/"] - (optional) Path to a locales folder with
 * JSON files used for internationalization.
 * @param {"en_US" | "de"} [options.language="en_US"] - (optional) Selected language.
 * @param {"json" | "yaml"} [options.exampleFormat="json"] - (optional) How to format examples.
 * @param {string[]} [options.includeProperties=[]] - (optional) Name of custom properties
 * which should be also in the description of an element.
 * @param {boolean} [options.header=true] - (optional) Whether or not to include the header
 * in markdown.
 * @param {string[]} [options.skipProperties=[]] - (optional) Name of a default property to
 * skip in markdown.
 * @param {string} [options.urlPrefix=""] - (optional) Prefix URL
 * @param {Object} [options.assets={}] - (optional) Assets to be used in markdown.
 * @returns {GeneratedOutput} List of raw markdown that were generated from input schema.
 */

export function jsonschema2md(schema, options) {
  const {
    schemaPath,
    outDir,
    metadata,
    schemaOut,
    links,
    i18n,
    language,
    includeProperties,
    rootDefinitionName,
    header,
    skipProperties,
    fileName,
    urlPrefix = "",
    assets,
  } = options
  let propsForSearch = new Map()
  checkSchema(schema)
  i18nInitialization(i18n, language)

  /** @type {SchemaFiles} */
  const normalized = normalizeSchema(schema, fileName)
  const schemas = parseSchema(normalized)

  console.log("preparing documentation...")

  /** @type {GeneratedOutput} */
  const output = {
    schema: writeSchema({
      schemaDir: schemaOut,
      originDir: schemaPath,
    })(schemas),
    markdown: pipe(
      schemas,
      // generate Markdown ASTs
      build({
        header,
        links,
        includeProperties,
        exampleFormat: "json",
        skipProperties,
        rewriteLinks: rewriteLinks(outDir, schemaPath, schemaOut),
        urlPrefix,
        propsForSearch,
        assets,
      }),

      // write to files
      writeMarkdown({
        out: outDir,
        error,
        meta: metadata,
        rootDefinitionName,
      })
    ),
  }

  return {
    output,
    propsForSearch,
  }
}

function checkSchema(schema) {
  if (!schema || typeof schema !== "object") {
    throw Error(
      "Input is not valid. Provide JSON schema either as Object or Array."
    )
  }

  return schema
}

function i18nInitialization(i18n, language) {
  const locales = i18n || nodePath.resolve(__dirname, "locales")
  i18nConfig(
    fs.readJSONSync(nodePath.resolve(locales, `${language || "en_US"}.json`))
  )
}

function normalizeSchema(schema, fileName) {
  if (Array.isArray(schema)) {
    return schema
  }

  return [
    {
      fileName: fileName ?? "schema.json",
      content: schema,
    },
  ]
}

function parseSchema(normalized) {
  const schemaLoader = loader()

  // collect data about the schemas and turn everything into a big object
  const schemas = pipe(
    normalized,
    // Checking if data contains the file path or its contents (JSON schema)
    map(({ fileName, fullPath, content }) => {
      if (!content && fullPath) {
        return schemaLoader(fullPath, fs.readJSONSync(fullPath))
      }
      return schemaLoader(fileName, content)
    }),
    traverse
  )

  return schemas
}

function rewriteLinks(outDir, schemaPath, schemaOut) {
  return function (origin) {
    const mdDir = outDir

    if (!mdDir) {
      return origin
    }

    const srcDir = schemaPath
    const schemaDir = schemaOut || schemaPath

    const target = nodePath
      .relative(
        mdDir,
        nodePath.resolve(schemaDir, nodePath.relative(srcDir, origin))
      )
      .split(nodePath.sep)
      .join(nodePath.posix.sep)

    return target
  }
}
