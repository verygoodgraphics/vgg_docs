import path from "node:path"
import fs from "node:fs/promises"

import { jsonschema2md } from "../lib/jsonschema2md/index.mjs"
import imagesMap from "../resources/schemas/vector.json" assert { type: "json" }
import metaJSON from "../resources/schemas/meta.json" assert { type: "json" }

const rootDir = path.resolve(process.cwd())
const docDir = rootDir + "/docs/specs/vectorgraphics"

for (const file of await fs.readdir(docDir)) {
  await fs.unlink(path.join(docDir, file))
}

try {
  const schema = await fetch(
    "https://raw.githubusercontent.com/verygoodgraphics/resource/main/spec/vectorgraphics.schema.json"
  ).then((res) => res.json())

  jsonschema2md(schema, {
    outDir: docDir,
    urlPrefix: "/specs/vectorgraphics/",
    fileName: "overview.schema.json",
    rootDefinitionName: "Vector Graphics Spec",
    assets: {
      images: imagesMap,
      assetPrefix:
        "https://raw.githubusercontent.com/verygoodgraphics/resource/main",
    },
    disclaimer: metaJSON.vectorgraphics.disclaimer,
    // isBeta: metaJSON.vectorgraphics.status === "beta",
  })
} catch (err) {
  console.log(err)
}
