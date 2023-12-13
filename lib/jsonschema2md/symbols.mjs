/**
 * @typedef {import("../types/api").UniqueSymbols} UniqueSymbols
 */

export const filename = Symbol("filename")
export const fullPath = Symbol("fullPath")

/**
 * @type {UniqueSymbols}
 * */
const symbols = {
  pointer: Symbol("pointer"),
  filename,
  fullPath,
  id: Symbol("id"),
  titles: Symbol("titles"),
  resolve: Symbol("resolve"),
  slug: Symbol("slug"),
  meta: Symbol("meta"),
  parent: Symbol("parent"),
}

export default symbols
