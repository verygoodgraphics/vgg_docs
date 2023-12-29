import { html } from "mdast-builder"

export function makeImage(schema, assets, path = "", id = "") {
  // return if no id or path
  if (!id || !path) return []

  // skip root definition
  if (schema.definitions) return []

  const images = assets.images[`#${id}`]
  // return if no images
  if (!images || images.length < 1) return []

  const imagesByPath = images.find(
    (img) => img.path === (path?.startsWith("/") ? path.slice(1) : path)
  )
  // return if no matched images
  if (!imagesByPath) return []

  const { _img } = imagesByPath

  if (!_img || _img.length < 1) return []

  return [
    html(`<div className="property-item">`),
    html(`<p></p>`),
    html(`<div className="property-images">`),
    ..._img.map((imgUrl) =>
      html(`<img src="${(assets.assetPrefix ?? "") + imgUrl}" alt="" />`)
    ),
    html(`</div>`),
    html(`</div>`),
  ]
}

export function makeEnumImage(schema, assets, path = "", id = "", index = 0) {
  // return if no id or path
  if (!id || !path) return []

  // skip root definition
  if (schema.definitions) return []

  const images = assets.images[`#${id}`]
  // return if no images
  if (!images || images.length < 1) return []

  const imagesByPath = images.find(
    (img) => img.path === (path?.startsWith("/") ? path.slice(1) : path)
  )

  // return if no matched images
  if (!imagesByPath) return []

  const { _enumImg } = imagesByPath

  if (!_enumImg || _enumImg.length < 1) return []

  const img = _enumImg[index]

  return [
    html(`<div className="enum-images">`),
    ...img.map((imgUrl) =>
      html(`<img src="${(assets.assetPrefix ?? "") + imgUrl}" alt="" />`)
    ),
    html(`</div>`),
  ]
}
