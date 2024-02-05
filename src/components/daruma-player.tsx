"use client"

import React, { useEffect, useRef, useState } from "react"
import { usePlaygroundStore } from "../store/playground"
import * as fflate from "fflate"
import toast, { Toaster } from "react-hot-toast"

// import { siteConfig } from "@/config/site"
import { fetchZipFile } from "../../lib/utils/fetch_zip_file"
import useUpdateEffect from "../hooks/use-update-effect"
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
  console.log("DarumaPlayer", src, id)
  // const [isMobileView, setIsMobileView] = useState(false)
  const [code, setCode] = useState("")
  const [zipFile, setZipFile] = useState<Int8Array | null>(null)
  const decompressed = useRef<any>(null)

  useEffect(() => {
    if (!src) return
    ;(async () => {
      const response = await fetchZipFile(src)

      if (!response) return toast.error("Failed to fetch zip file")

      const uint8array = new Uint8Array(response)
      const int8array = new Int8Array(response)

      decompressed.current = fflate.unzipSync(uint8array)

      const fileNames = Object.keys(decompressed.current)
      const jsonFiles = fileNames.filter((name) =>
        ["design.json", "layout.json"].includes(name)
      )
      // const jsonFiles = fileNames.filter(
      //   (name) => name.endsWith(".json") && !name.startsWith("__MACOSX")
      // )
      const firstJsonFile = jsonFiles[0]

      // console.log(firstJsonFile)
      // setCode(firstJsonFile)

      if (!decompressed.current) return

      const jsonUint8Array = decompressed.current["design.json"]
      const jsonObject = generateJsonObjectFromUint8Array(jsonUint8Array)

      setCode(JSON.stringify(jsonObject, null, 2))

      setZipFile(int8array)
      // setReloadKey(new Date().getTime())
    })()
  }, [src])

  // useEffect(() => {
  //   if (!decompressed.current) return

  //   const jsonUint8Array = decompressed.current[currentTab[1]]
  //   const jsonObject = generateJsonObjectFromUint8Array(jsonUint8Array)

  //   setCode(JSON.stringify(jsonObject, null, 2))
  // }, [currentTab])

  // useUpdateEffect(() => {
  //   if (!decompressed.current) return

  //   const uint8array = new TextEncoder().encode(code)
  //   decompressed.current[currentTab[1]] = uint8array
  //   const compressed = fflate.zipSync(decompressed.current, {})

  //   if (new Int8Array(compressed.buffer) !== zipFile) {
  //     setZipFile(new Int8Array(compressed.buffer))
  //   }
  // }, [code])

  // set isMobileView to true if the screen is less than 600px wide
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileView(window.innerWidth < 600)
  //   }
  //   handleResize()
  //   window.addEventListener("resize", handleResize)
  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

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
        {/* <ul className="m-0 flex list-none gap-3 p-0 font-mono text-xs">
          {siteConfig.nav.map((navItem) => (
            <li key={navItem.name}>
              <a href={navItem.url} className="hover:underline">
                {navItem.name}
              </a>
            </li>
          ))}
        </ul> */}
      </nav>
      <div className="box-border flex h-[640px] w-full items-start justify-between">
        <div className="h-full w-1/2 min-w-1/2">
          <LiveCode path={id ?? src} code={code} setCode={setCode} />
        </div>
        <div className="h-full w-1/2 min-w-1/2">
          <LivePreview runtime={runtime} src={src} />
        </div>
      </div>
    </div>
  )
}
