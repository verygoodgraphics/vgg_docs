---
title: PointAttr
sidebar_class_name: show
---

<div className="section-badges">

<div><img alt="object" src="https://img.shields.io/badge/object-object?label=Type" /></div>

<a href="#backlinks"><img alt="Backlinks" src="https://img.shields.io/badge/1-Backlinks?label=Backlinks&color=%230ea5e9" /></a>

</div>

One point on the contour of a shape.

<div className="property-preview">

<div className="property-table">

| Property                    | Type                                   | Required                                            |
| :-------------------------- | :------------------------------------- | :-------------------------------------------------- |
| [class](#class)             | `string`                               | <span className="property-required">Required</span> |
| [radius](#radius)           | `number`                               | <span className="property-optional">Optional</span> |
| [cornerStyle](#cornerstyle) | `integer`                              | <span className="property-optional">Optional</span> |
| [curveFrom](#curvefrom)     | [`Point`](/specs/vectorgraphics/point) | <span className="property-optional">Optional</span> |
| [curveTo](#curveto)         | [`Point`](/specs/vectorgraphics/point) | <span className="property-optional">Optional</span> |
| [point](#point)             | [`Point`](/specs/vectorgraphics/point) | <span className="property-required">Required</span> |

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
"pointAttr"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## radius

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Corner radius at the point.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## cornerStyle

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Corner shapes of the point.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                              |
| :---- | :------------------------------------------------------- |
| `0`   | <div className="enum-description">rounded</div>          |
| `1`   | <div className="enum-description">inverted rounded</div> |
| `2`   | <div className="enum-description">angled</div>           |
| `3`   | <div className="enum-description">squared</div>          |

</div>

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Path/cornerStyle.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## curveFrom

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

When the current point is the starting point of the Bezier curve, this attribute represents its control point.

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div className="property">

<div className="property-heading">

## curveTo

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

When the current point is the end point of the Bezier curve, this attribute represents its control point.

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div className="property">

<div className="property-heading">

## point

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The coordinates of the point before the matrix transformation.

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/contour#points'>Contour.points</Link>
      </div>

</div>
