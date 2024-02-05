import React, { useState } from "react"
import { usePlaygroundStore } from "../store/playground"
import { useVGG } from "@verygoodgraphics/vgg-react"

import { Panel } from "./ui/panel"

// https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/main/svg/90-ring.svg
const spinner = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      fill: "white",
      zIndex: 1,
    }}
  >
    <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="0.75s"
        values="0 12 12;360 12 12"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

export function LivePreview({
  src,
  runtime,
}: {
  src: string
  runtime: string
}) {
  const setSelectedElement = usePlaygroundStore(
    (state) => state.setSelectedElement
  )
  const { canvasRef, vgg, isLoading } = useVGG({
    src: src,
    runtime: runtime,
    verbose: true,
    // editMode: true,
    onSelect: async (event) => {
      const { type, data } = event
      // @ts-ignore
      setSelectedElement({ id: data?.id })
    },
  })
  const zipFile = usePlaygroundStore((state) => state.zipFile)
  const reloadKey = usePlaygroundStore((state) => state.reloadKey)
  const [renderType, setRenderType] = useState("vgg")

  return (
    <Panel
      activeTab="VGG Render"
      title="Live Preview"
      tabs={["VGG Render"]}
      onChange={(text) => {
        const _renderType = text.split(" ")[0].toLowerCase()
        // 'svg' | 'png' | 'html' | 'pdf'
        setRenderType(_renderType)
      }}
      noHeader
    >
      <div className="preview-card relative flex flex-1 flex-col overflow-hidden border border-zinc-200 bg-white shadow h-full">
        {isLoading ? spinner : null}
        {isLoading && <div className="absolute h-screen w-screen bg-black" />}
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            marginTop: "-1px",
            marginLeft: "-1px",
            // marginLeft:
            //   windowSize.width > 1440 ? "auto" : (windowSize.width - 1440) / 2,
          }}
          className="bg-black outline-none"
        />
      </div>
    </Panel>
  )
}
