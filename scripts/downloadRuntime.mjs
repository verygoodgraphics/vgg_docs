// download files from $VGG_DOWNLOAD in `.env`
import fs from "node:fs"
import path from "node:path"
import fetch from "node-fetch"

import "dotenv/config"

async function downloadFile(url, dest) {
  const file = fs.createWriteStream
  const res = await fetch(url)
  return new Promise((resolve, reject) => {
    res.body.pipe(file(dest))
    res.body
      .on("error", (err) => {
        reject(err)
      })
      .on("finish", () => {
        resolve()
      })
  })
}

async function downloadRuntime() {
  if (!process.env.VGG_DOWNLOAD) {
    throw new Error("Environment variable VGG_DOWNLOAD is not set")
  }

  const runtimeDir = path.resolve(path.dirname(""), "static/runtime")
  if (!fs.existsSync(runtimeDir)) {
    fs.mkdirSync(runtimeDir)
  } else {
    fs.rmdirSync(runtimeDir, { recursive: true })
    fs.mkdirSync(runtimeDir)
  }
  console.log(
    `Downloading runtime to ${runtimeDir}: ${process.env.VGG_DOWNLOAD}`
  )

  const runtimeUrl = process.env.VGG_DOWNLOAD + "/runtime/latest/"
  const files = ["vgg_runtime.js", "vgg_runtime.data", "vgg_runtime.wasm"]
  for (const file of files) {
    await downloadFile(`${runtimeUrl}${file}`, path.resolve(runtimeDir, file))
  }
}

try {
  await downloadRuntime()
} catch (err) {
  console.error(err)
  process.exit(1)
}
