export async function fetchZipFile(url: string) {
  try {
    const response = await fetch(url)
    const buffer = await response.arrayBuffer()
    return buffer
  } catch (error) {
    console.log(error)
    return null
  }
}
