import React from "react"
import { cn } from "../../../lib/utils/cn"

export function Loader({ className }: { className?: string }) {
  return <span className={cn("loader", className)}></span>
}
