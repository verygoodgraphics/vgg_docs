import React, { useEffect, useRef } from "react"

import { CodeEditor, CodeEditorRef } from "./ui/code-editor"

import { IconPlay } from "./icons"
import { Panel } from "./ui/panel"

export function LiveCode({
  path,
  code,
  selectedElement,
  setCode,
  onRun,
}: {
  path?: string
  code: string
  selectedElement?: { id: string }
  setCode: (val: string) => void
  onRun?: () => void
}) {
  const codeRef = useRef<CodeEditorRef>(null)

  useEffect(() => {
    const editor = codeRef.current?.editor?.getEditors()[0]

    if (editor && selectedElement?.id) {
      const model = editor?.getModel()
      const position = model?.getPositionAt(
        code.indexOf(`"name": "${selectedElement.id}"`)
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
      activeTab={"design.json"}
      tabs={["design.json"]}
      rightElement={
        <div className="flex items-center justify-start gap-3">
          <button
            className="flex items-center justify-start space-x-1.5 cursor-pointer rounded bg-zinc-900 px-2 py-1 text-white transition-all hover:bg-zinc-800 ring-0 shadow-none border-none"
            onClick={() => onRun?.()}
          >
            <IconPlay className="h-2.5 w-2.5" />
            <span className="font-bold">Run</span>
          </button>
        </div>
      }
    >
      <div className="editor flex h-full flex-col overflow-auto border border-zinc-200 bg-white shadow">
        <div className="monaco-container h-full">
          <CodeEditor
            code={code}
            onChange={setCode}
            ref={codeRef}
            path={path}
          />
        </div>
      </div>
    </Panel>
  )
}
