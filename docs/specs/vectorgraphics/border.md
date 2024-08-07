---
title: Border
sidebar_class_name: show
---

<div className="section-badges">

<div className="badge type">
        <span className="label">Type</span>
        <span className="value">object</span>
      </div>

<a href="#backlinks" className="badge backlinks">
          <span className="label">Backlinks</span>
          <span className="value">2</span>
        </a>

</div>

Define a border style of an object.

<div className="property-preview">

<div className="property-table">

| Property                                              | Type                                                                         | Required                                            |
| :---------------------------------------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                                       | `string`                                                                     | <span className="property-required">Required</span> |
| [isEnabled](#isenabled)                               | `boolean`                                                                    | <span className="property-required">Required</span> |
| [color](#color)                                       | [`Color`](/specs/vectorgraphics/color)                                       | <span className="property-optional">Optional</span> |
| [fillType](#filltype)                                 | [`FillType`](/specs/vectorgraphics/fill-type)                                | <span className="property-required">Required</span> |
| [position](#position)                                 | [`BorderPosition`](/specs/vectorgraphics/border-position)                    | <span className="property-required">Required</span> |
| [thickness](#thickness)                               | `number`                                                                     | <span className="property-required">Required</span> |
| [borderWeightsIndependent](#borderweightsindependent) | `boolean`                                                                    | <span className="property-optional">Optional</span> |
| [topWeight](#topweight)                               | `number`                                                                     | <span className="property-optional">Optional</span> |
| [leftWeight](#leftweight)                             | `number`                                                                     | <span className="property-optional">Optional</span> |
| [bottomWeight](#bottomweight)                         | `number`                                                                     | <span className="property-optional">Optional</span> |
| [rightWeight](#rightweight)                           | `number`                                                                     | <span className="property-optional">Optional</span> |
| [contextSettings](#contextsettings)                   | [`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings) | <span className="property-required">Required</span> |
| [gradient](#gradient)                                 | [`Gradient`](/specs/vectorgraphics/gradient)                                 | <span className="property-optional">Optional</span> |
| [pattern](#pattern)                                   | [`Pattern`](/specs/vectorgraphics/pattern)                                   | <span className="property-optional">Optional</span> |
| [style](#style)                                       | `integer`                                                                    | <span className="property-required">Required</span> |
| [dashedPattern](#dashedpattern)                       | `Array<number>`                                                              | <span className="property-required">Required</span> |
| [dashedOffset](#dashedoffset)                         | `number`                                                                     | <span className="property-required">Required</span> |
| [lineCapStyle](#linecapstyle)                         | [`LineCapStyle`](/specs/vectorgraphics/line-cap-style)                       | <span className="property-required">Required</span> |
| [lineJoinStyle](#linejoinstyle)                       | [`LineJoinStyle`](/specs/vectorgraphics/line-join-style)                     | <span className="property-required">Required</span> |
| [miterLimit](#miterlimit)                             | `number`                                                                     | <span className="property-required">Required</span> |
| [flat](#flat)                                         | `number`                                                                     | <span className="property-required">Required</span> |

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
"border"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## isEnabled

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

no description

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## color

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The color of the border's fill.

</div>

</div>

<div className="property-item">

Type

[`Color`](/specs/vectorgraphics/color)

</div>

</div>

<div className="property">

<div className="property-heading">

## fillType

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The content types of the border's fill.

</div>

</div>

<div className="property-item">

Type

[`FillType`](/specs/vectorgraphics/fill-type)

</div>

</div>

<div className="property">

<div className="property-heading">

## position

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The position types of the border relative to the boundary.

</div>

</div>

<div className="property-item">

Type

[`BorderPosition`](/specs/vectorgraphics/border-position)

</div>

</div>

<div className="property">

<div className="property-heading">

## thickness

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The thickness of the border.
This attribute only works if `borderWeightsIndependent` is set to `false`.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## borderWeightsIndependent

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

For rectangles only. If `true`, independent border weights for all four sides.
Default value is `false`.

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## topWeight

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

This is used only when `borderWeightsIndependent` is set to true, in order to specify the border weight at the top of the rectangle. Default value is `0`.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## leftWeight

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

This is used only when `borderWeightsIndependent` is set to true, in order to specify the border weight at the left of the rectangle. Default value is `0`.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## bottomWeight

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

This is used only when `borderWeightsIndependent` is set to true, in order to specify the border weight at the bottom of the rectangle. Default value is `0`.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## rightWeight

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

This is used only when `borderWeightsIndependent` is set to true, in order to specify the border weight at the right of the rectangle. Default value is `0`.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## contextSettings

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The opacity and blending-related configurations of the border.

</div>

</div>

<div className="property-item">

Type

[`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings)

</div>

</div>

<div className="property">

<div className="property-heading">

## gradient

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The gradient of the border's fill.

</div>

</div>

<div className="property-item">

Type

[`Gradient`](/specs/vectorgraphics/gradient)

</div>

</div>

<div className="property">

<div className="property-heading">

## pattern

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The pattern of the border's fill.

</div>

</div>

<div className="property-item">

Type

[`Pattern`](/specs/vectorgraphics/pattern)

</div>

</div>

<div className="property">

<div className="property-heading">

## style

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The type of the border style. The dashed style is further specified in `dashedOffset` and `dashedPattern`.

</div>

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                    |
| :---- | :--------------------------------------------- |
| `0`   | <div className="enum-description">solid</div>  |
| `1`   | <div className="enum-description">dotted</div> |
| `2`   | <div className="enum-description">dashed</div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## dashedPattern

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A list of values that describe the lengths of dashes (filled regions) and gaps (empty regions) in a `dashed` border by repeating themselves.

</div>

</div>

<div className="property-item">

Type

`Array<number>`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Border/dashedPattern.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## dashedOffset

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Border dash initial offset. (applies to `dashed` borders)
If it is positive, it is offset to the left.
If it is negative, it is offset to the right.
Units: pixel.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## lineCapStyle

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The shape styles at the end of border lines.

</div>

</div>

<div className="property-item">

Type

[`LineCapStyle`](/specs/vectorgraphics/line-cap-style)

</div>

</div>

<div className="property">

<div className="property-heading">

## lineJoinStyle

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The shape style at the corner of two border lines.

</div>

</div>

<div className="property-item">

Type

[`LineJoinStyle`](/specs/vectorgraphics/line-join-style)

</div>

</div>

<div className="property">

<div className="property-heading">

## miterLimit

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

When the angle between two adjacent border lines is less than this value, a `miter` join is used instead.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## flat

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The flatness parameter specifies the accuracy or smoothness with which curves are rendered as a sequence of flat line segments.
Default value is `0`.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

Value

<div className="value-description">

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `0`

</div>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/style#borders'>Style.borders</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/font-attr#borders'>FontAttr.borders</Link>
      </li>

</ul>

</div>
