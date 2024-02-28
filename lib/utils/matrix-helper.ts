import { mat2d } from "gl-matrix"

export function rotateAboutCenter(
  a: number,
  b: number,
  c: number,
  d: number,
  tx: number,
  ty: number,
  centerX: number,
  centerY: number,
  angle: number
) {
  // Convert angle to radians
  const radian = (angle * Math.PI) / 180

  // Step 1: Translate to the center
  const translateToCenter = mat2d.fromTranslation(mat2d.create(), [
    centerX,
    centerY,
  ])

  // Step 2: Rotate
  const rotateMatrix = mat2d.fromRotation(mat2d.create(), radian)

  // Step 3: Translate back
  const translateBack = mat2d.fromTranslation(mat2d.create(), [
    -centerX,
    -centerY,
  ])

  // Combine transformations
  const finalMatrix = mat2d.create()
  mat2d.multiply(finalMatrix, finalMatrix, translateToCenter)
  mat2d.multiply(finalMatrix, finalMatrix, rotateMatrix)
  mat2d.multiply(finalMatrix, finalMatrix, translateBack)

  // Apply the transformation to the original matrix
  const originalMatrix = mat2d.fromValues(a, b, c, d, tx, ty)
  const transformed = mat2d.create()
  mat2d.multiply(transformed, finalMatrix, originalMatrix)

  // Return the transformed matrix
  return Array.from(transformed)
}
