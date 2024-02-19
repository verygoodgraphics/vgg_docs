import React from "react"
import { cn } from "../../lib/utils/cn"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Slider } from "./ui/slider"

export type ControlConfig = {
  frameName: string
  label: string
  type: string
  controlType:
    | "slider"
    | "select"
    | "input"
    | "color"
    | "checkbox"
    | "button"
    | "radio"
  value: any
  valuePath: string
  options?: string[]
  min?: number
  max?: number
  step?: number
  onChange?: (value: any) => void
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
  config,
  onChange,
}: {
  className?: string
  config?: ControlConfig[]
  onChange?: (frameName: string, valuePath: string, value: any) => void
}) {
  if (!config || config.length === 0) return null

  return (
    <div
      className={cn(
        "border rounded-lg px-2 py-1.5 border-zinc-200 border-solid min-w-[200px] bg-white shadow-sm z-10",
        className
      )}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[13px] text-zinc-600 font-bold mb-0">Controls</h2>
        <ChevronDownIcon className="w-[14px] h-[14px] text-zinc-400" />
      </div>
      <div>
        {config.map((control, index) => {
          const debouncedOnChange = unbounce((value: number) => {
            control.onChange?.(value)
            onChange?.(control.frameName, control.valuePath, value)
          }, 100)

          switch (control.controlType) {
            case "slider":
              return (
                <div
                  key={index.toString()}
                  className="flex items-center gap-x-4"
                >
                  <label className="text-xs text-zinc-600 font-medium flex-none">
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
                <div key={index.toString()} className="flex items-center">
                  <label className="text-xs text-zinc-600 font-medium">
                    {control.label}
                  </label>
                  <select
                    value={control.value}
                    onChange={(event) => {
                      control.onChange?.(event.target.value)
                    }}
                  >
                    {control.options?.map((option, index) => (
                      <option key={index.toString()} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )
            case "input":
              return (
                <div key={index.toString()} className="flex items-center">
                  <label className="text-xs text-zinc-600 font-medium">
                    {control.label}
                  </label>
                  <input
                    type="text"
                    value={control.value}
                    onChange={(event) => {
                      control.onChange?.(event.target.value)
                    }}
                  />
                </div>
              )
            case "color":
              return (
                <div key={index.toString()} className="flex items-center">
                  <label className="text-xs text-zinc-600 font-medium">
                    {control.label}
                  </label>
                  <input
                    type="color"
                    value={control.value}
                    onChange={(event) => {
                      control.onChange?.(event.target.value)
                    }}
                  />
                </div>
              )
            case "checkbox":
              return (
                <div key={index.toString()} className="flex items-center">
                  <label className="text-xs text-zinc-600 font-medium">
                    {control.label}
                  </label>
                  <input
                    type="checkbox"
                    checked={control.value}
                    onChange={(event) => {
                      control.onChange?.(event.target.checked)
                    }}
                  />
                </div>
              )
            case "button":
              return (
                <div key={index.toString()} className="flex items-center">
                  <button
                    onClick={() => {
                      control.onChange?.(control.value)
                    }}
                  >
                    {control.label}
                  </button>
                </div>
              )
            case "radio":
              return (
                <div key={index.toString()} className="flex items-center">
                  <label className="text-xs text-zinc-600 font-medium">
                    {control.label}
                  </label>
                  {control.options?.map((option, index) => (
                    <div key={index.toString()} className="flex items-center">
                      <input
                        type="radio"
                        value={option}
                        checked={control.value === option}
                        onChange={(event) => {
                          control.onChange?.(event.target.value)
                        }}
                      />
                      <label>{option}</label>
                    </div>
                  ))}
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
