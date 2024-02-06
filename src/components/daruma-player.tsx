"use client"

import React, { useEffect, useRef, useState } from "react"
import * as fflate from "fflate"
import toast, { Toaster } from "react-hot-toast"

import { fetchZipFile } from "../../lib/utils/fetch_zip_file"
import { LiveCode } from "../components/live-code"
import { LivePreview } from "../components/live-preview"
import { cn } from "../../lib/utils/cn"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"

function generateJsonObjectFromUint8Array(uint8array: Uint8Array) {
  // Convert the Uint8Array to a string (assuming the data is in UTF-8 encoding)
  const jsonString = new TextDecoder().decode(uint8array)
  // Parse the JSON string into a JavaScript object
  const jsonObject = JSON.parse(jsonString)

  return jsonObject
}

type TabItem = {
  id?: string
  label: string
  src: string
}

export function DarumaPlayer({
  // runtime = "https://s5.vgg.cool/runtime/latest",
  runtime = "https://s3.vgg.cool/test/runtime/202402061557",
  src,
  id,
  tabs = [],
}: {
  id?: string
  runtime?: string
  src: string
  tabs?: TabItem[]
}) {
  const [code, setCode] = useState("")
  const decompressed = useRef<any>(null)
  const [darumaSource, setDarumaSource] = useState<string | Int8Array>("")
  const codeCache = useRef<string>("")
  const codeBackup = useRef<string>("")
  const [selectedElement, setSelectedElement] = React.useState<{
    id: string
  }>({
    id: "",
  })

  useEffect(() => {
    if (!src && tabs?.length > 0) return
    loadSource(src)
  }, [src])

  useEffect(() => {
    if (tabs.length > 0) {
      loadSource(tabs[0].src)
    }
  }, [tabs])

  useEffect(() => {
    codeBackup.current = codeCache.current
    codeCache.current = code
  }, [code])

  async function loadSource(source: string) {
    const response = await fetchZipFile(source)

    if (!response) return toast.error("Failed to fetch zip file")

    const uint8array = new Uint8Array(response)
    const int8array = new Int8Array(response)

    decompressed.current = fflate.unzipSync(uint8array)

    if (!decompressed.current) return

    const jsonUint8Array = decompressed.current["design.json"]
    const jsonObject = generateJsonObjectFromUint8Array(jsonUint8Array)

    setCode(JSON.stringify(jsonObject, null, 2))
    setDarumaSource(int8array)
  }

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
      {tabs.length > 0 && (
        <Tabs tabs={tabs} onSelect={(tab) => loadSource(tab.src)} />
      )}
      <div className="box-border flex h-[640px] w-full items-start justify-between">
        {darumaSource ? (
          <>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel>
                <div className="h-[640px]">
                  <LiveCode
                    code={code}
                    setCode={setCode}
                    onRun={handleRun}
                    selectedElement={selectedElement}
                    path={id}
                    key={id}
                  />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel>
                <div className="h-[640px]">
                  <LivePreview
                    runtime={runtime}
                    src={darumaSource}
                    onSelect={setSelectedElement}
                    minHeight={640}
                  />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </>
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  )
}

function Tabs({
  tabs,
  onSelect,
}: {
  tabs: TabItem[]
  onSelect: (tab: TabItem) => void
}) {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className="flex items-center justify-start gap-2 p-2 bg-zinc-50 border-b border-zinc-200 border-solid border-0">
      {tabs.map((tab, index) => (
        <button
          key={index.toString()}
          className={cn(
            "flex items-center justify-start space-x-1.5 cursor-pointer rounded bg-zinc-200/60 px-2 py-1 text-zinc-500 transition-all hover:bg-zinc-800 hover:text-white ring-0 shadow-none border-none",
            {
              "bg-zinc-800 text-white": activeTab.src === tab.src,
            }
          )}
          onClick={() => {
            onSelect(tab)
            setActiveTab(tab)
          }}
        >
          <span className="font-bold">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
