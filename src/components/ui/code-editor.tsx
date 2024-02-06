import React, { useEffect, useImperativeHandle, useRef } from "react"
import Editor, { useMonaco } from "@monaco-editor/react"
import type Monaco from "monaco-editor/esm/vs/editor/editor.api"

interface CodeEditorProps {
  code: string
  path?: string
  onChange: (val: string) => void
}

export interface CodeEditorRef {
  monaco: React.MutableRefObject<typeof Monaco | undefined>
  editorRef: React.MutableRefObject<
    Monaco.editor.IStandaloneCodeEditor | undefined
  >
}

export const CodeEditor = React.forwardRef<CodeEditorRef, CodeEditorProps>(
  function CodeEditor({ code, onChange, path }, codeEditorRef) {
    const monacoRef = useRef<typeof Monaco>()
    const ref = useRef<HTMLDivElement>(null)
    const editorRef = useRef<Monaco.editor.IStandaloneCodeEditor>()

    useImperativeHandle(codeEditorRef, () => ({
      monaco: monacoRef,
      editorRef: editorRef,
    }))

    function init(monaco: typeof Monaco) {
      if (monaco) {
        monaco.editor.defineTheme("IDLE", {
          base: "vs",
          inherit: false,
          rules: [
            {
              background: "FFFFFF",
              token: "",
            },
            {
              token: "delimiter",
              foreground: "999999",
            },
            {
              token: "aaa",
              foreground: "00ff00",
            },
            {
              foreground: "919191",
              token: "comment",
            },
            {
              foreground: "00a33f",
              token: "string",
            },
            {
              foreground: "3b54bf",
              token: "number",
            },
            {
              foreground: "a535ae",
              token: "constant.language",
            },
            {
              foreground: "ff5600",
              token: "keyword",
            },
            {
              foreground: "ff5600",
              token: "storage",
            },
            {
              foreground: "21439c",
              token: "entity.name.type",
            },
            {
              foreground: "21439c",
              token: "entity.name.function",
            },
            {
              foreground: "a535ae",
              token: "support.function",
            },
            {
              foreground: "a535ae",
              token: "support.constant",
            },
            {
              foreground: "a535ae",
              token: "support.type",
            },
            {
              foreground: "a535ae",
              token: "support.class",
            },
            {
              foreground: "a535ae",
              token: "support.variable",
            },
            {
              foreground: "000000",
              background: "990000",
              token: "invalid",
            },
            {
              foreground: "990000",
              token: "constant.other.placeholder.py",
            },
          ],
          colors: {
            "editor.foreground": "#000000",
            "editor.background": "#FFFFFF",
            "editor.selectionBackground": "#BAD6FD",
            "editor.lineHighlightBackground": "#00000012",
            "editorCursor.foreground": "#000000",
            "editorWhitespace.foreground": "#BFBFBF",
          },
        })
        monaco.editor.setTheme("IDLE")
      }
    }

    return (
      <div ref={ref} style={{ height: "100%", position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <Editor
            height="100%"
            theme="IDLE"
            defaultLanguage="json"
            value={code}
            path={path}
            onChange={(newCode) => {
              onChange(newCode ?? "")
            }}
            onMount={async (editor, _monaco) => {
              if (ref.current) {
                const relayout = ([e]: any) => {
                  window.requestAnimationFrame(() =>
                    editor.layout({
                      width: e.borderBoxSize[0].inlineSize,
                      height: e.borderBoxSize[0].blockSize,
                    })
                  )
                }
                const resizeObserver = new ResizeObserver(relayout)
                resizeObserver.observe(ref.current)
                editorRef.current = editor
                monacoRef.current = _monaco

                init(_monaco)
              }
            }}
            options={{
              fontFamily: "iaw-mono-var",
              fontSize: 13,
              wordWrap: "on",
              tabSize: 2,
              minimap: {
                enabled: false,
              },
              // smoothScrolling: true,
              // cursorSmoothCaretAnimation: "on",
              // contextmenu: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>
    )
  }
)
