import path from "node:path"
import fs from "node:fs/promises"

import { jsonschema2md } from "../lib/jsonschema2md/index.mjs"
import schema from "../static/schemas/layout.schema.json" assert { type: "json" }
import imagesMap from "../resources/schemas/layout.json" assert { type: "json" }
import metaJSON from "../resources/schemas/meta.json" assert { type: "json" }

const rootDir = path.resolve(process.cwd())
const docDir = rootDir + "/docs/specs/layout"
// const outputPath = rootDir + "/static/schemas/layout-search-params.json"

for (const file of await fs.readdir(docDir)) {
  await fs.unlink(path.join(docDir, file))
}

jsonschema2md(schema, {
  outDir: docDir,
  urlPrefix: "/specs/layout/",
  fileName: "overview.schema.json",
  rootDefinitionName: "Layout",
  assets: {
    images: imagesMap,
    assetPrefix:
      "https://raw.githubusercontent.com/verygoodgraphics/resource/main",
  },
  disclaimer: metaJSON.layout.disclaimer,
  isBeta: metaJSON.layout.status === "beta",
})

// const searchParamsJSON = JSON.stringify(
//   Array.from(propsForSearch, ([key, value]) => value),
//   null,
//   2
// )

// fs.writeFile(outputPath, searchParamsJSON, (err) => {
//   if (err) throw err
//   console.log("JSON data is saved to " + outputPath)
// })
