import React from "react"
import type { SliderProps } from "react-aria-components"
import {
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components"
import { cn } from "../../../lib/utils/cn"

interface RangeSliderProps<T> extends SliderProps<T> {
  label?: string
  thumbLabels?: string[]
}

export function RangeSlider<T extends number | number[]>({
  label,
  thumbLabels,
  className,
  ...props
}: RangeSliderProps<T>) {
  return (
    <Slider {...props} className={cn("w-full", className)}>
      {/* <SliderOutput>
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")
        }
      </SliderOutput> */}
      <SliderTrack className="relative w-full h-7">
        {({ state }) => (
          <>
            <div className="absolute h-[5px] top-[50%] translate-y-[-50%] w-full rounded-full bg-black/[0.08]" />
            {/* fill */}
            {/* <div
              className="absolute h-2 top-[50%] translate-y-[-50%] rounded-full bg-white"
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
            /> */}

            {state.values.map((_, i) => (
              <SliderThumb
                className="h-[14px] w-[14px] top-[50%] rounded-full border border-solid border-zinc-200 bg-white transition dragging:shadow-md shadow outline-none focus-visible:ring-2 ring-black"
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
              />
            ))}
          </>
        )}
      </SliderTrack>
    </Slider>
  )
}
