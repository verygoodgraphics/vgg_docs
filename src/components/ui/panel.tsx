import React from "react"
import { cn } from "../../../lib/utils/cn"

interface PanelProps {
  title?: string
  activeTab: string
  tabs: string[]
  onChange: (value: string) => void
  children: React.ReactNode
  rightElement?: React.ReactNode
  noHeader?: boolean
}

export function Panel({
  title,
  activeTab,
  tabs,
  onChange,
  children,
  rightElement,
  noHeader = false,
}: PanelProps) {
  return (
    <div className="tabs flex h-full w-full flex-col overflow-hidden">
      {!noHeader && (
        <div className="tabs-container relative z-[1] flex max-w-[cal(100%_-_15px)] select-none items-center justify-between whitespace-nowrap border border-b-0 border-zinc-200 bg-zinc-50 text-xs">
          <div className="flex items-center justify-start">
            {/* {title && (
            <div className="text-default mr-2 px-3 py-2 font-mono font-bold">
              {title}
            </div>
          )} */}
            {tabs.map((option) => (
              <div
                title={option}
                className={cn(
                  "tab ml-[-1px] cursor-pointer overflow-hidden text-ellipsis border-x border-zinc-200 bg-zinc-100 px-3 py-2.5 text-zinc-500 hover:bg-zinc-50",
                  {
                    "bg-white font-medium text-zinc-900 hover:bg-white":
                      activeTab === option,
                  }
                )}
                key={option}
                onClick={() => {
                  onChange(option)
                }}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="px-3">{rightElement}</div>
        </div>
      )}
      {children}
    </div>
  )
}
