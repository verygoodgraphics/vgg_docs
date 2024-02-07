import { useEffect } from "react"

import { useFirstMountState } from "./use-first-mount"

const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState()

  useEffect(() => {
    if (!isFirstMount) {
      return effect()
    }
  }, deps)
}

export default useUpdateEffect
