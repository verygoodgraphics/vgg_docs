import path from "node:path"
import fs from "node:fs/promises"

import { jsonschema2md } from "../lib/jsonschema2md/index.mjs"
import schema from "../schemas/layout.schema.json" assert { type: "json" }

const rootDir = path.resolve(process.cwd())
const docDir = rootDir + "/docs/specs/layout"
const outputPath = rootDir + "/schemas/layout-search-params.json"

for (const file of await fs.readdir(docDir)) {
  await fs.unlink(path.join(docDir, file))
}

const { propsForSearch } = jsonschema2md(schema, {
  outDir: docDir,
  urlPrefix: "/specs/layout/",
  fileName: "overview.schema.json",
  rootDefinitionName: "Layout",
})

const searchParamsJSON = JSON.stringify(
  Array.from(propsForSearch, ([key, value]) => value),
  null,
  2
)

fs.writeFile(outputPath, searchParamsJSON, (err) => {
  if (err) throw err
  console.log("JSON data is saved to " + outputPath)
})
