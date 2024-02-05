"use client"

import React, { useEffect, useRef, useState } from "react"
import * as fflate from "fflate"
import toast, { Toaster } from "react-hot-toast"

import { fetchZipFile } from "../../lib/utils/fetch_zip_file"
import { LiveCode } from "../components/live-code"
import { LivePreview } from "../components/live-preview"

function generateJsonObjectFromUint8Array(uint8array: Uint8Array) {
  // Convert the Uint8Array to a string (assuming the data is in UTF-8 encoding)
  const jsonString = new TextDecoder().decode(uint8array)
  // Parse the JSON string into a JavaScript object
  const jsonObject = JSON.parse(jsonString)

  return jsonObject
}

export function DarumaPlayer({
  runtime = "https://s5.vgg.cool/runtime/latest",
  src,
  id,
}: {
  id?: string
  runtime?: string
  src: string
}) {
  const [code, setCode] = useState("")
  const decompressed = useRef<any>(null)
  const [darumaSource, setDarumaSource] = useState<string | Int8Array>(src)
  const codeCache = useRef<string>("")
  const codeBackup = useRef<string>("")
  const [selectedElement, setSelectedElement] = React.useState<{
    id: string
  }>({
    id: "",
  })

  useEffect(() => {
    if (!src) return
    ;(async () => {
      const response = await fetchZipFile(src)

      if (!response) return toast.error("Failed to fetch zip file")

      const uint8array = new Uint8Array(response)
      const int8array = new Int8Array(response)

      decompressed.current = fflate.unzipSync(uint8array)

      // const fileNames = Object.keys(decompressed.current)
      // const jsonFiles = fileNames.filter((name) =>
      //   ["design.json", "layout.json"].includes(name)
      // )

      if (!decompressed.current) return

      const jsonUint8Array = decompressed.current["design.json"]
      const jsonObject = generateJsonObjectFromUint8Array(jsonUint8Array)

      setCode(JSON.stringify(jsonObject, null, 2))
      setDarumaSource(int8array)
    })()
  }, [src])

  useEffect(() => {
    codeBackup.current = codeCache.current
    codeCache.current = code
  }, [code])

  function handleRun() {
    if (!decompressed.current) return
    if (codeCache.current === codeBackup.current) return

    const uint8array = new TextEncoder().encode(codeCache.current)
    decompressed.current["design.json"] = uint8array
    const compressed = fflate.zipSync(decompressed.current, {})

    if (new Int8Array(compressed.buffer) !== darumaSource) {
      setDarumaSource(new Int8Array(compressed.buffer))
    }
  }

  return (
    <div className="border border-solid border-zinc-200 h-full overflow-hidden">
      <Toaster
        toastOptions={{
          style: {
            fontSize: 13,
            borderRadius: 6,
            padding: "2px 4px 2px 12px",
          },
        }}
      />
      <nav className="top-0 z-10 flex h-[40px] w-full items-center justify-between bg-white px-3 shadow border-0 border-b border-zinc-200 border-solid">
        <h1 className="text-zinc-900 text-sm !mb-0">
          <span className="font-bold">VGG</span>{" "}
          <span className="font-mono font-normal">Playground</span>
        </h1>
      </nav>
      <div className="box-border flex h-[640px] w-full items-start justify-between">
        <div className="h-full w-1/2 min-w-1/2">
          <LiveCode
            code={code}
            setCode={setCode}
            onRun={handleRun}
            selectedElement={selectedElement}
            path={id}
          />
        </div>
        <div className="h-full w-1/2 min-w-1/2">
          <LivePreview
            runtime={runtime}
            src={darumaSource}
            onSelect={setSelectedElement}
          />
        </div>
      </div>
    </div>
  )
}
