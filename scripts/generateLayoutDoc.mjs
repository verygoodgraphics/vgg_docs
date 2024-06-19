import path from "node:path"
import fs from "node:fs/promises"

import { jsonschema2md } from "../lib/jsonschema2md/index.mjs"
import imagesMap from "../resources/schemas/layout.json" assert { type: "json" }
import metaJSON from "../resources/schemas/meta.json" assert { type: "json" }
import schema from "../static/schemas/layout.schema.json" assert { type: "json" }

const rootDir = path.resolve(process.cwd())
const docDir = rootDir + "/docs/specs/layout"

for (const file of await fs.readdir(docDir)) {
  await fs.unlink(path.join(docDir, file))
}

try {
  jsonschema2md(schema, {
    outDir: docDir,
    urlPrefix: "/specs/layout/",
    fileName: "overview.schema.json",
    rootDefinitionName: "Layout",
    assets: {
      images: imagesMap,
      assetPrefix:
        "",
    },
    disclaimer: metaJSON.layout.disclaimer,
    // isBeta: metaJSON.layout.status === "beta",
  })
} catch (err) {
  console.log(err)
}
