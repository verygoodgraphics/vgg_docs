"use client"

import { create } from "zustand"

// import { playgroundConfig } from "@/config/playground"

type Element = {
  id: string
}

export interface PlaygroundState {
  code: string
  setCode: (code: string) => void
  zipFile: Int8Array
  setZipFile: (zipFile: Int8Array) => void
  tabs: string[]
  setTabs: (tabs: string[]) => void
  currentTab: [string, string]
  setCurrentTab: (curTab: [string, string]) => void
  reloadKey: number
  setReloadKey: (key: number) => void
  fileUrl: string
  setFileUrl: (url: string) => void
  selectedElement: Element
  setSelectedElement: (element: Element) => void
}
export const usePlaygroundStore = create<PlaygroundState>()((set) => {
  return {
    code: "",
    setCode: (code) => set({ code }),
    zipFile: new Int8Array(),
    setZipFile: (file) => set({ zipFile: file }),
    tabs: [],
    setTabs: (tabs) => set({ tabs }),
    currentTab: ["", ""],
    setCurrentTab: (curTab) => set({ currentTab: curTab }),
    reloadKey: 0,
    setReloadKey: (key) => set({ reloadKey: key }),
    fileUrl: "",
    // fileUrl: playgroundConfig.demos[0].value,
    setFileUrl: (url) => set({ fileUrl: url }),
    selectedElement: { id: "" },
    setSelectedElement: (element) => set({ selectedElement: element }),
  }
})
