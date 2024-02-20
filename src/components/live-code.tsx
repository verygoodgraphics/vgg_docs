import React, { useEffect, useRef } from "react"
import { JSONPath } from "jsonpath-plus"

import { CodeEditor, CodeEditorRef } from "./ui/code-editor"

import { IconPlay } from "./icons"
import { Panel } from "./ui/panel"

export function LiveCode({
  path,
  code,
  selectedElement,
  activeLine,
  setCode,
  onRun,
}: {
  path?: string
  code: string
  selectedElement?: { id: string }
  activeLine?: string
  setCode: (val: string) => void
  onRun?: () => void
}) {
  const codeRef = useRef<CodeEditorRef>(null)
  const codeStringRef = useRef<string>("")

  useEffect(() => {
    codeStringRef.current = code
  }, [code])

  useEffect(() => {
    const editor = codeRef.current?.editorRef?.current

    if (editor && selectedElement?.id) {
      const model = editor?.getModel()
      let matches = model?.findMatches(
        `"${selectedElement.id}"`,
        false,
        true,
        false,
        null,
        false
      )

      if (matches && matches.length > 0) {
        let line = matches[0].range.startLineNumber
        editor.revealLineInCenter(line)
        editor.setPosition({ lineNumber: line, column: 0 })
      }
    }
  }, [selectedElement])

  useEffect(() => {
    if (!activeLine) return

    const valuePath = activeLine

    const result = JSONPath({
      json: JSON.parse(codeStringRef.current),
      path: valuePath,
      resultType: "all",
    })

    if (result.length > 0) {
      const editor = codeRef.current?.editorRef?.current
      const lineNumber = getLineNumber(
        codeStringRef.current,
        result[0].pointer.split("/") as string[]
      )
      editor?.revealLineInCenter(lineNumber)
      editor?.setPosition({ lineNumber: lineNumber, column: 0 })
    }

    function getLineNumber(jsonString: string, jsonPath: string[]) {
      const lines = jsonString.split("\n")
      const matchPath = jsonPath.filter(
        (p) => !!p && p !== "$" && typeof p === "string" && isNaN(Number(p))
      )
      console.log({ jsonPath, matchPath })
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(matchPath[0])) {
          if (matchPath.length === 1) {
            return i + 1
          }

          matchPath.shift()
        }
      }

      return -1
    }
  }, [activeLine])

  return (
    <Panel
      title="Live Editor"
      activeTab={"design.json"}
      tabs={["design.json"]}
      rightElement={
        <div className="flex items-center justify-start gap-3">
          <button
            className="flex items-center justify-start space-x-1.5 cursor-pointer rounded bg-white px-2 py-1 text-zinc-800 shadow-sm transition-all hover:shadow active:bg-zinc-100 ring-0 border border-zinc-200 border-solid"
            onClick={() => onRun?.()}
          >
            <IconPlay className="h-2.5 w-2.5" />
            <span className="font-bold">Run</span>
          </button>
        </div>
      }
    >
      <div className="editor flex h-full flex-col overflow-auto border border-zinc-200 bg-white shadow">
        <div className="monaco-container h-full overflow-hidden">
          <CodeEditor
            code={code}
            onChange={setCode}
            ref={codeRef}
            // path={path}
          />
        </div>
      </div>
    </Panel>
  )
}
