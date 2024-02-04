import React, { useEffect, useRef } from "react"
import { usePlaygroundStore } from "../store/playground"
// import copy from "copy-to-clipboard"
import * as fflate from "fflate"
import { Base64 } from "js-base64"
import toast from "react-hot-toast"

// import { playgroundConfig } from "@/config/playground"
import { CodeEditor, CodeEditorRef } from "./ui/code-editor"
// import { DemoDropdown } from "./demo-dropdown"

import { IconPlay } from "./icons"
import { Panel } from "./ui/panel"

export function LiveCode() {
  const code = usePlaygroundStore((state) => state.code)
  const setCode = usePlaygroundStore((state) => state.setCode)
  const tabs = usePlaygroundStore((state) => state.tabs)
  const currentTab = usePlaygroundStore((state) => state.currentTab)
  const setCurrentTab = usePlaygroundStore((state) => state.setCurrentTab)
  const setReloadKey = usePlaygroundStore((state) => state.setReloadKey)
  const setFileUrl = usePlaygroundStore((state) => state.setFileUrl)
  const codeRef = useRef<CodeEditorRef>(null)
  const selectedElement = usePlaygroundStore((state) => state.selectedElement)

  useEffect(() => {
    codeRef.current?.editor
      ?.getEditors()[0]
      ?.setScrollPosition({ scrollTop: 0 })
    codeRef.current?.editor?.getEditors()[0]?.focus()
  }, [currentTab])

  useEffect(() => {
    const editor = codeRef.current?.editor?.getEditors()[0]

    if (editor && selectedElement.id) {
      const model = editor?.getModel()
      const position = model?.getPositionAt(
        code.indexOf(`"id": "${selectedElement.id}"`)
      )
      if (!position) return
      editor.revealPositionInCenter(position)
      editor?.setSelection({
        startLineNumber: position?.lineNumber || 0,
        startColumn: position?.column || 0,
        endLineNumber: position?.lineNumber || 0,
        endColumn: position?.column || 0,
      })
    }
  }, [selectedElement])

  return (
    <Panel
      title="Live Editor"
      activeTab={currentTab[1]}
      // tabs={tabs}
      tabs={["design.json"]}
      onChange={(tab) => setCurrentTab([currentTab[0], tab])}
      rightElement={
        <div className="flex items-center justify-start gap-3">
          {/* <DemoDropdown
            options={playgroundConfig.demos}
            onChange={setFileUrl}
            defaultValue={playgroundConfig.demos[0].value}
          /> */}
          <button
            className="flex items-center justify-start space-x-1.5 cursor-pointer rounded bg-zinc-900 px-2 py-1 text-white transition-all hover:bg-zinc-800 ring-0 shadow-none border-none"
            onClick={() => setReloadKey(new Date().getTime())}
          >
            <IconPlay className="h-2.5 w-2.5" />
            <span className="font-bold">Run</span>
          </button>
        </div>
      }
    >
      <div className="editor flex h-full flex-col overflow-auto border border-zinc-200 bg-white shadow">
        {/* <div className="editor-controls">
          <ResetCode activeCard={currentTab} />
          <button
            onClick={() => {
              const compressed = Base64.fromUint8Array(
                fflate.deflateSync(
                  fflate.strToU8(
                    JSON.stringify({
                      code,
                      tab: currentTab,
                    })
                  )
                ),
                true
              )

              window.history.replaceState(null, "", "?share=" + compressed)
              copy(window.location.href)
              toast.success("Copied to clipboard")
            }}
          >
            Share
          </button>
        </div> */}
        <div className="monaco-container h-full">
          <CodeEditor code={code} onChange={setCode} ref={codeRef} />
        </div>
      </div>
    </Panel>
  )
}

function ResetCode({ activeCard }: { activeCard: string }) {
  useEffect(() => {
    const params = new URL(String(document.location)).searchParams
    const shared = params.get("share")
    // we just need change editedCards on mounted
    if (shared) {
      try {
        const decompressedData = fflate.strFromU8(
          fflate.decompressSync(Base64.toUint8Array(shared))
        )
        let card
        let tab
        try {
          const decoded = JSON.parse(decompressedData)
          card = decoded.code
          tab = decoded.tab || "helloworld"
        } catch (e) {
          card = decompressedData
        }
      } catch (e) {
        console.error("Failed to parse shared card:", e)
      }
    }
  }, [])

  return (
    <button
      onClick={() => {
        window.history.replaceState(null, "", "/")
        toast.success("Content reset")
      }}
    >
      Reset
    </button>
  )
}
