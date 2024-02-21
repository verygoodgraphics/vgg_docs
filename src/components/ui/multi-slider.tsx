import React from "react"
import { Slider } from "./slider"

export function MultiSlider({
  sliderLabels,
  value = [],
  defaultValue = [],
  onChange,
  min = 0,
  max = 100,
  step = 1,
}: {
  sliderLabels?: string[]
  value?: any[]
  defaultValue?: any[]
  onChange?: (value: any[]) => void
  min?: number
  max?: number
  step?: number
}) {
  const valueRef = React.useRef(defaultValue)

  return (
    <div className="w-full flex flex-col gap-y-2">
      {sliderLabels?.map((label, index) => (
        <div key={index.toString()} className="flex items-center gap-x-2">
          <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
            {label}
          </label>
          <Slider
            defaultValue={[defaultValue?.[index]]}
            min={min}
            max={max}
            step={step}
            onValueChange={(value) => {
              valueRef.current[index] = value[0]
              onChange?.(valueRef.current)
            }}
          />
        </div>
      ))}
    </div>
  )
}
