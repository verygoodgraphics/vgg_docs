/**
 * Parse the $ref value into a url and anchor
 * @param {*} refValue e.g. "#/definitions/Address"
 * @returns e.g. { url: "#address", anchor: "Address" }
 */
export function parseRefValue(refValue, prefix = "") {
  const anchor = refValue.split("/").pop()

  const url = refValue
    .split("/")
    .pop()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()

  return {
    anchor,
    url: prefix + url,
  }
}
