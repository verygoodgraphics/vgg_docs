---
title: PointAttr
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

The attributes of a point on the contour of a shape.

<div className="property-preview">

<div className="property-table">

| Property                    | Type                                              | Required                                            |
| :-------------------------- | :------------------------------------------------ | :-------------------------------------------------- |
| [class](#class)             | `string`                                          | <span className="property-required">Required</span> |
| [radius](#radius)           | `number`                                          | <span className="property-optional">Optional</span> |
| [cornerStyle](#cornerstyle) | `integer`                                         | <span className="property-optional">Optional</span> |
| [curveFrom](#curvefrom)     | [`Point`](/specs/vectorgraphics/point)            | <span className="property-optional">Optional</span> |
| [curveTo](#curveto)         | [`Point`](/specs/vectorgraphics/point)            | <span className="property-optional">Optional</span> |
| [point](#point)             | [`Point`](/specs/vectorgraphics/point)            | <span className="property-required">Required</span> |
| [markType](#marktype)       | [`MarkerType`](/specs/vectorgraphics/marker-type) | <span className="property-optional">Optional</span> |

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

<div>

Corner radius at the point.

</div>

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

<div>

Corner shapes of the point.

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

<img src="/img/vector/Path/cornerStyle.png" alt="" />

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

<div>

When the current point is the starting point of the Bezier curve, this attribute represents its control point.

</div>

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

<div>

When the current point is the end point of the Bezier curve, this attribute represents its control point.

</div>

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

<div>

The coordinates of the point before the matrix transformation.

</div>

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div className="property">

<div className="property-heading">

## markType

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The shape type of the point. This property only applies to endpoints.

</div>

</div>

<div className="property-item">

Type

[`MarkerType`](/specs/vectorgraphics/marker-type)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/contour#points'>Contour.points</Link>
      </li>

</ul>

</div>
