"use client"

import React, { useEffect, useRef, useState } from "react"
import * as fflate from "fflate"
import toast, { Toaster } from "react-hot-toast"
import { JSONPath } from "jsonpath-plus"

import { fetchZipFile } from "../../lib/utils/fetch_zip_file"
import { LiveCode } from "../components/live-code"
import { LivePreview } from "../components/live-preview"
import { cn } from "../../lib/utils/cn"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable"
import { type ControlConfig } from "./controls"
import { DarumaPlayerLoader } from "./daruma-player-loader"

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

type FileName = string
type SourceCode = string

export function DarumaPlayer({
  runtime = "https://s5.vgg.cool/runtime/latest",
  src,
  id,
  tabs = [],
  codeTabs: defaultCodeTabs = ["design.json"],
  activeCodeTab = "design.json",
  controlsConfig,
}: {
  id?: string
  runtime?: string
  src: string
  codeTabs?: string[]
  activeCodeTab?: string
  tabs?: TabItem[]
  controlsConfig?: ControlConfig[]
}) {
  const [codeBase, setCodeBase] = useState<Record<FileName, SourceCode>>({})
  const [sourceCode, setSourceCode] = useState<SourceCode>("")
  const decompressed = useRef<any>(null)
  const [darumaSource, setDarumaSource] = useState<string | Int8Array>("")
  // const codeCache = useRef<string>("")
  const [selectedElement, setSelectedElement] = React.useState<{
    id: string
  }>({
    id: "",
  })
  const [activeLine, setActiveLine] = React.useState<[string, number]>(["", -1])
  const [lineNumberMatchType, setLineNumberMatchType] = React.useState<
    "exact" | "range"
  >("range")

  const [isMobile, setIsMobile] = useState(false)
  const [codeTabs] = useState<string[]>(() => defaultCodeTabs)
  const [currentCodeTab, setCurrentCodeTab] = useState<string>(activeCodeTab)
  const currentCodeCache = useRef<[FileName, SourceCode]>(["", ""])
  const codeBackup = useRef<Record<FileName, SourceCode>>({})
  const [isError, setIsError] = useState(false)
  const [sourceCodeForControl, setSourceCodeForControl] = useState("")

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    window.addEventListener("resize", () => {
      requestAnimationFrame(() => {
        setIsMobile(window.innerWidth < 768)
      })
    })

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 768)
      })
    }
  }, [])

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
    if (!decompressed.current) return

    const jsonUint8Array = decompressed.current[currentCodeTab]
    const jsonObject = generateJsonObjectFromUint8Array(jsonUint8Array)

    const newCode = {
      [currentCodeTab]: JSON.stringify(jsonObject, null, 2),
    }

    setCodeBase((origin) => ({
      ...origin,
      ...newCode,
    }))

    currentCodeCache.current = [currentCodeTab, newCode[currentCodeTab]]
  }, [currentCodeTab])

  useEffect(() => {
    const _currentCodeTab = currentCodeCache.current[0] || activeCodeTab
    const newCode = codeBase[_currentCodeTab]

    currentCodeCache.current = [_currentCodeTab, newCode]
    codeBackup.current = {
      ...codeBackup.current,
      [_currentCodeTab]: newCode,
    }

    setSourceCode(newCode)
  }, [codeBase])

  async function loadSource(source: string) {
    const response = await fetchZipFile(source)

    if (!response) {
      toast.error("Failed to fetch zip file")
      setIsError(true)
      return
    }

    try {
      const uint8array = new Uint8Array(response)
      const int8array = new Int8Array(response)

      decompressed.current = fflate.unzipSync(uint8array)

      if (!decompressed.current) return

      // const fileNames = Object.keys(decompressed.current)
      // const jsonFiles = fileNames.filter((name) =>
      //   ["design.json", "layout.json"].includes(name)
      // )
      // const firstJsonFile = jsonFiles[0]

      const jsonUint8Array = decompressed.current[currentCodeTab]
      const jsonObject = generateJsonObjectFromUint8Array(jsonUint8Array)

      // setCodeTabs(jsonFiles)
      // setCurrentCodeTab(firstJsonFile)
      const initSourceCode = JSON.stringify(jsonObject, null, 2)
      setCodeBase((origin) => ({
        ...origin,
        [currentCodeTab]: initSourceCode,
      }))
      setDarumaSource(int8array)
      setSourceCodeForControl(initSourceCode)
    } catch (err) {
      console.log(err)
      // toast.error("Failed to load source")
      setIsError(true)
    }
  }

  function handleRun() {
    if (!decompressed.current) return
    let isChanged = false

    for (const [fileName, sourceCode] of Object.entries(codeBackup.current)) {
      if (decompressed.current[fileName] !== codeBackup.current[fileName]) {
        isChanged = true
      }
    }

    if (!isChanged) return

    for (const [fileName, sourceCode] of Object.entries(codeBackup.current)) {
      decompressed.current[fileName] = new TextEncoder().encode(
        codeBackup.current[fileName]
      )
    }

    const compressed = fflate.zipSync(decompressed.current, {})
    const newDarumaSource = new Int8Array(compressed.buffer)

    if (newDarumaSource !== darumaSource) {
      setDarumaSource(newDarumaSource)
    }
  }

  function handleUpdateCode(newCode: string) {
    const currentCodeTabName = currentCodeCache.current[0]
    setCodeBase((origin) => ({
      ...origin,
      [currentCodeTabName]: newCode,
    }))
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
            <ResizablePanelGroup
              direction={isMobile ? "vertical" : "horizontal"}
              className={cn({
                "!flex-col-reverse": isMobile,
              })}
            >
              <ResizablePanel minSize={30}>
                <div className={isMobile ? "h-[320px]" : "h-[640px]"}>
                  <LiveCode
                    code={sourceCode}
                    setCode={handleUpdateCode}
                    onRun={handleRun}
                    selectedElement={selectedElement}
                    activeLine={activeLine}
                    lineNumberMatchType={lineNumberMatchType}
                    path={id}
                    key={id}
                    tabs={codeTabs}
                    currentTab={currentCodeTab}
                    setCurrentTab={setCurrentCodeTab}
                  />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel minSize={40}>
                <div className={isMobile ? "h-[320px]" : "h-[640px]"}>
                  <LivePreview
                    runtime={runtime}
                    src={darumaSource}
                    onSelect={setSelectedElement}
                    height={isMobile ? 300 : 640}
                    width={isMobile ? 300 : 640}
                    controlsConfig={controlsConfig}
                    code={sourceCodeForControl}
                    onControlChange={({
                      code: updatedCode,
                      valuePath,
                      value,
                      lineNumber,
                      lineNumberMatchType,
                    }) => {
                      const [fileName, sourceCode] = currentCodeCache.current
                      const codeString = updatedCode ?? sourceCode
                      const codeJSON = JSON.parse(codeString)
                      JSONPath({
                        json: codeJSON,
                        path: valuePath,
                        resultType: "all",
                      }).forEach(({ parent, parentProperty }) => {
                        parent[parentProperty] = value
                      })

                      setCodeBase((origin) => ({
                        ...origin,
                        [fileName]: JSON.stringify(codeJSON, null, 2),
                      }))

                      if (lineNumberMatchType) {
                        setLineNumberMatchType(lineNumberMatchType)
                      }

                      setTimeout(() => {
                        setActiveLine([valuePath, lineNumber ?? -1])
                        handleRun()
                        setTimeout(() => {
                          setActiveLine(["", -1])
                          setLineNumberMatchType("range")
                        })
                      }, 100)
                    }}
                  />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </>
        ) : isError ? (
          <div className="flex items-center justify-center h-full w-full">
            <p className="text-red-500 bg-red-50 px-2.5 py-0.5 rounded-lg">
              Failed to load source
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            <DarumaPlayerLoader />
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
    <div className="flex items-center justify-start flex-wrap gap-2 p-2 bg-zinc-50 border-b border-zinc-200 border-solid border-0">
      {tabs.map((tab, index) => (
        <button
          key={index.toString()}
          className={cn(
            "flex items-center justify-start space-x-1.5 cursor-pointer rounded bg-zinc-200/60 px-[14px] py-[6px] text-zinc-500 transition-all hover:bg-zinc-800 hover:text-white ring-0 shadow-none border-none",
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
