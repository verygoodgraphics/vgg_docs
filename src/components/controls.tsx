import React, { useEffect } from "react"
import { cn } from "../../lib/utils/cn"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Slider } from "./ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Switch } from "./ui/switch"
import { RangeSlider } from "./ui/range-slider"
import { GradientSlider } from "./ui/gradient-slider"
import { MultiSlider } from "./ui/multi-slider"

export type ControlConfig = {
  frameName: string
  label: string
  type: string
  lineNumber?: number
  lineNumberMatchType?: "exact" | "range"
  lineNumbers?: number[]
  controlType:
    | "slider"
    | "select"
    | "input"
    | "color"
    | "checkbox"
    | "button"
    | "radio"
    | "switch"
    | "range-slider"
    | "gradient-slider"
    | "multi-slider"
  value: any
  valuePath: string
  valueLabels?: string[]
  options?: {
    label: string
    value: any
  }[]
  min?: number
  max?: number
  step?: number
  onBeforeChange?: (
    value: any,
    code?: string
  ) => {
    transformedValue?: any
    updatedCode?: string
  }
}

const unbounce = (fn: any, delay: number) => {
  let timer: any
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export function Controls({
  className,
  code,
  config,
  onChange,
}: {
  className?: string
  code?: string
  config?: ControlConfig[]
  onChange?: (data: {
    code?: string
    valuePath: string
    value: any
    lineNumber?: number
    lineNumberMatchType?: "exact" | "range"
  }) => void
}) {
  if (!config || config.length === 0) return null
  const codeCache = React.useRef(code)
  const oldValueCache = React.useRef<any>(null)

  useEffect(() => {
    codeCache.current = code
  }, [code])

  return (
    <div
      className={cn(
        "border rounded-lg px-2 py-1.5 border-zinc-200 border-solid min-w-[240px] bg-white shadow-sm z-10",
        className
      )}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[13px] text-zinc-600 font-bold mb-0">Controls</h2>
        <ChevronDownIcon className="w-[14px] h-[14px] text-zinc-400" />
      </div>
      <div className="flex flex-col gap-y-2">
        {config.map((control, index) => {
          const debouncedOnChange = unbounce(
            (value: number, lineNumber?: number) => {
              const { transformedValue, updatedCode } =
                control.onBeforeChange?.(value, codeCache.current) ?? {}

              onChange?.({
                valuePath: control.valuePath,
                value: transformedValue ?? value,
                lineNumber: lineNumber ?? control.lineNumber,
                lineNumberMatchType: control.lineNumberMatchType,
                code: updatedCode,
              })
            },
            100
          )

          switch (control.controlType) {
            case "slider":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
                    {control.label}
                  </label>
                  <Slider
                    defaultValue={[control.value]}
                    min={control.min}
                    max={control.max}
                    step={control.step || 1}
                    onValueChange={(value) => {
                      debouncedOnChange(value[0])
                    }}
                  />
                </div>
              )
            case "select":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
                    {control.label}
                  </label>
                  <Select
                    defaultValue={
                      typeof control.value === "string"
                        ? control.value
                        : undefined
                    }
                    onValueChange={debouncedOnChange}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder={control.options?.[0].label} />
                    </SelectTrigger>
                    <SelectContent>
                      {control.options?.map((option, index) => (
                        <SelectItem key={index.toString()} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )
            case "input":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <label className="text-xs text-zinc-600 font-medium">
                    {control.label}
                  </label>
                  <input
                    type="text"
                    value={control.value}
                    onChange={(event) => {
                      control.onBeforeChange?.(event.target.value)
                    }}
                  />
                </div>
              )
            case "color":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
                    {control.label}
                  </label>
                  <input
                    type="color"
                    value={control.value}
                    onChange={(event) => {
                      control.onBeforeChange?.(event.target.value)
                    }}
                  />
                </div>
              )
            case "checkbox":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
                    {control.label}
                  </label>
                  <input
                    type="checkbox"
                    checked={control.value}
                    onChange={(event) => {
                      control.onBeforeChange?.(event.target.checked)
                    }}
                  />
                </div>
              )
            case "button":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <button
                    onClick={() => {
                      control.onBeforeChange?.(control.value)
                    }}
                  >
                    {control.label}
                  </button>
                </div>
              )
            case "radio":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
                    {control.label}
                  </label>
                  {control.options?.map((option, index) => (
                    <div key={index.toString()} className="flex items-center">
                      <input
                        type="radio"
                        value={option.value}
                        checked={control.value === option}
                        onChange={(event) => {
                          control.onBeforeChange?.(event.target.value)
                        }}
                      />
                      <label>{option.label}</label>
                    </div>
                  ))}
                </div>
              )
            case "switch":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
                    {control.label}
                  </label>
                  <Switch
                    onCheckedChange={debouncedOnChange}
                    defaultChecked={control.value}
                  />
                </div>
              )
            case "range-slider":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
                    {control.label}
                  </label>
                  <RangeSlider
                    defaultValue={[30, 60]}
                    thumbLabels={["start", "end"]}
                  />
                </div>
              )
            case "gradient-slider":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
                    {control.label}
                  </label>
                  <GradientSlider
                    maxValue={control.max}
                    minValue={control.min}
                    step={control.step}
                    defaultValue={control.value}
                    thumbColors={control.value.map(
                      (v) =>
                        `rgba(${v.color.red * 255},${v.color.green * 255},${
                          v.color.blue * 255
                        },${v.color.alpha})`
                    )}
                    onChange={(values) => {
                      let diffValueIndex = 0

                      const newValues = (
                        oldValueCache.current ?? control.value
                      ).map((v, i) => {
                        if (values[i] !== v.position) {
                          diffValueIndex = i
                        }

                        return { ...v, position: values[i] }
                      })

                      oldValueCache.current = newValues

                      debouncedOnChange(
                        newValues,
                        control.lineNumbers?.[diffValueIndex]
                      )
                    }}
                    // thumbLabels={["start", "end"]}
                  />
                </div>
              )
            case "multi-slider":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-2"
                >
                  {/* <label className="text-xs text-zinc-600 font-medium flex-none w-[50%]">
                    {control.label}
                  </label> */}
                  <MultiSlider
                    sliderLabels={control.valueLabels ?? []}
                    defaultValue={control.value}
                    onChange={(value) => {
                      debouncedOnChange(value)
                    }}
                    min={control.min}
                    max={control.max}
                    step={control.step || 1}
                  />
                </div>
              )
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
