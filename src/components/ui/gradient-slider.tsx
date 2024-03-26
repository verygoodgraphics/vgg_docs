import React, { useState } from "react"
import type { SliderProps } from "react-aria-components"
import {
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components"
import { cn } from "../../../lib/utils/cn"

interface GradientSliderProps<T> extends SliderProps<T> {
  label?: string
  thumbLabels?: string[]
  thumbColors?: string[]
}

export function GradientSlider<T extends number | number[]>({
  label,
  thumbLabels,
  className,
  defaultValue,
  thumbColors,
  ...props
}: GradientSliderProps<T>) {
  const [value] = useState(() => {
    return ((defaultValue as any[])?.map((v) => v.position) ?? []) as T
  })

  return (
    <Slider {...props} defaultValue={value} className={cn("w-full", className)}>
      {/* <SliderOutput>
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")
        }
      </SliderOutput> */}
      <SliderTrack className="relative w-[calc(100%_-_8px)] h-7">
        {({ state }) => (
          <>
            <div className="absolute h-1 top-[50%] translate-y-[-50%] w-full rounded-full bg-black/[0.08]" />
            {/* fill */}
            {/* <div
              className="absolute h-2 top-[50%] translate-y-[-50%] rounded-full bg-white"
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
            /> */}

            {state.values.map((_, i) => (
              <SliderThumb
                className="h-[14px] flex relative justify-center items-center w-[14px] top-[50%] rounded-sm border border-solid border-zinc-200 bg-white transition dragging:shadow-md shadow outline-none focus-visible:ring-2 ring-black"
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
              >
                <div
                  className="h-[10px] w-[10px] rounded-sm z-20"
                  style={{
                    backgroundColor: thumbColors?.[i] ?? "inherit",
                  }}
                />
                <div
                  className="absolute h-[10px] w-[10px] top-[1px] left-[1px] rounded-sm overflow-hidden z-10"
                  style={{
                    backgroundColor: "#ffffff",
                    opacity: 0.8,
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #d7d7d7 25%, transparent 25%, transparent 75%, #d7d7d7 75%, #d7d7d7), repeating-linear-gradient(45deg, #d7d7d7 25%, #ffffff 25%, #ffffff 75%, #d7d7d7 75%, #d7d7d7)",
                    backgroundPosition: "0 0, 5px 5px",
                    backgroundSize: "10px 10px",
                  }}
                />
              </SliderThumb>
            ))}
          </>
        )}
      </SliderTrack>
    </Slider>
  )
}
