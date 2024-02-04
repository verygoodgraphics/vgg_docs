export function debounce(func: Function, wait: number): Function {
  let timeout: ReturnType<typeof setTimeout>
  return function (...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
