---
title: PatternLayerInstance
sidebar_class_name: show
---

<div className="section-badges">

<div className="badge type">
        <span className="label">Type</span>
        <span className="value">object</span>
      </div>

<a href="#backlinks" className="badge backlinks">
          <span className="label">Backlinks</span>
          <span className="value">1</span>
        </a>

</div>

Use a layer as the content of the pattern.

<div className="property-preview">

<div className="property-table">

| Property                      | Type                                     | Required                                            |
| :---------------------------- | :--------------------------------------- | :-------------------------------------------------- |
| [class](#class)               | `string`                                 | <span className="property-required">Required</span> |
| [refLayerName](#reflayername) | `string`                                 | <span className="property-required">Required</span> |
| [offset](#offset)             | [`Point`](/specs/vectorgraphics/point)   | <span className="property-required">Required</span> |
| [scale](#scale)               | [`Point`](/specs/vectorgraphics/point)   | <span className="property-required">Required</span> |
| [angle](#angle)               | `number`                                 | <span className="property-required">Required</span> |
| [reflection](#reflection)     | `boolean`                                | <span className="property-required">Required</span> |
| [r](#r)                       | `number`                                 | <span className="property-required">Required</span> |
| [shear](#shear)               | `number`                                 | <span className="property-required">Required</span> |
| [shearAxis](#shearaxis)       | `number`                                 | <span className="property-required">Required</span> |
| [matrix](#matrix)             | [`Matrix`](/specs/vectorgraphics/matrix) | <span className="property-required">Required</span> |

</div>

</div>

<div className="property">

<div className="property-heading">

## class

<span className="property-required">Required</span>

</div>

<div className="property-item">

Type

`string`

</div>

<div className="property-item">

Value

<div className="value-description">

**constant**: the value of this property must be equal to:

```json
"patternLayer"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## refLayerName

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The name (UTF-8) of the referenced pattern layer. Note that this is the name of the pattern layer, not its ID. The pattern layer name is unique.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## offset

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Specify the offset from the ruler origin to be used for tiling the pattern. Each distance is specified in points.

</div>

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div className="property">

<div className="property-heading">

## scale

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Specify the scale factors to be applied to the x and y dimensions, respectively, of the pattern.

</div>

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div className="property">

<div className="property-heading">

## angle

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Specifies the angle in counterclockwise degrees to rotate the pattern.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## reflection

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Whether to apply a reflection to the pattern.

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## r

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Specifies the angle of the line about which the pattern is reflected, measured in degrees counterclockwise from the origin. This is used if the `reflection` operand is `true`.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## shear

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Specifies the shear angle.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## shearAxis

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Specifies the shear axis.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## matrix

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Specifies the initial matrix to which all other pattern transformations are to be applied. This matrix describes transformations that are not otherwise expressible as the single combination of the other transformations.

</div>

</div>

<div className="property-item">

Type

[`Matrix`](/specs/vectorgraphics/matrix)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/pattern#instance'>Pattern.instance</Link>
      </li>

</ul>

</div>
