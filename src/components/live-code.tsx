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
  lineNumberMatchType,
  tabs,
  currentTab,
  setCurrentTab,
  setCode,
  onRun,
}: {
  path?: string
  code: string
  selectedElement?: { id: string }
  activeLine?: [string, number]
  lineNumberMatchType?: "exact" | "range"
  tabs?: string[]
  currentTab: string
  setCurrentTab: (val: string) => void
  setCode: (val: string) => void
  onRun?: () => void
}) {
  const codeRef = useRef<CodeEditorRef>(null)
  const codeStringRef = useRef<string>("")

  useEffect(() => {
    const editor = codeRef.current?.editorRef?.current
    editor?.setScrollPosition({ scrollTop: 0 })
    editor?.focus()
  }, [currentTab])

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
    if (!activeLine?.[0]) return

    const [valuePath, _lineNumber] = activeLine

    const result = JSONPath({
      json: JSON.parse(codeStringRef.current),
      path: valuePath,
      resultType: "all",
    })

    if (result.length > 0) {
      const editor = codeRef.current?.editorRef?.current
      const lineNumber =
        lineNumberMatchType === "range"
          ? getLineNumber(
              codeStringRef.current,
              result[0].pointer.split("/") as string[]
            )
          : _lineNumber
      editor?.revealLineInCenter(lineNumber)
      editor?.setPosition({ lineNumber: lineNumber, column: 0 })
    }

    function getLineNumber(jsonString: string, jsonPath: string[]) {
      const lines = jsonString.split("\n")
      const matchPath = jsonPath.filter(
        (p) => !!p && p !== "$" && typeof p === "string"
      )
      // console.log({ jsonPath, matchPath: [...matchPath] })
      for (let i = 0; i < lines.length; i++) {
        const pointer = Number(matchPath[0])

        if (!isNaN(pointer)) {
          if (!lines[i].trim().startsWith(`"${matchPath[1]}":`)) continue

          if (pointer > 0) {
            matchPath[0] = String(pointer - 1)
          } else {
            if (matchPath.length === 2) {
              if (_lineNumber === -1) {
                return i + 1
              }

              if (_lineNumber - 6 < i && i < _lineNumber + 4) {
                return i + 1
              }

              continue
            }

            matchPath.splice(0, 2)
          }

          continue
        } else if (lines[i].trim().startsWith(`"${matchPath[0]}":`)) {
          if (matchPath.length === 1) {
            if (_lineNumber === -1) {
              return i + 1
            }

            if (_lineNumber - 6 < i && i < _lineNumber + 4) {
              return i + 1
            }

            continue
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
      activeTab={currentTab}
      // tabs={["design.json"]}
      tabs={tabs || ["design.json"]}
      onChange={(tab) => setCurrentTab(tab)}
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
          {code ? (
            <CodeEditor
              code={code}
              onChange={setCode}
              ref={codeRef}
              // path={path}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-400">
              No code to display
            </div>
          )}
        </div>
      </div>
    </Panel>
  )
}
