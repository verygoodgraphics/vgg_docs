import React from "react"
import { VGGRender } from "@verygoodgraphics/vgg-react"

import { Panel } from "./ui/panel"

export function LivePreview({
  src,
  runtime,
  onSelect,
  width,
  height,
}: {
  src: string | Int8Array
  runtime: string
  width?: number
  height?: number
  minHeight?: number
  onSelect: (event: any) => void
}) {
  return (
    <Panel
      activeTab="VGG Render"
      title="Live Preview"
      tabs={["VGG Render"]}
      noHeader
    >
      <div className="preview-card relative flex flex-1 flex-col overflow-hidden border border-zinc-200 bg-white shadow h-full">
        <VGGRender
          key={src.toString()}
          src={src}
          runtime={runtime}
          editMode
          verbose
          onSelect={async (event) => {
            const { type, data } = event
            // @ts-ignore
            onSelect?.({ id: data?.id })
          }}
          className="h-full w-full flex justify-center items-center"
          canvasStyle={{
            width: width ?? "100%",
            height: height ?? "100%",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
      </div>
    </Panel>
  )
}
