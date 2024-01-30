---
title: Segment
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

A segment in a vector netWork.

<div className="property-preview">

<div className="property-table">

| Property                | Type                                   | Required                                            |
| :---------------------- | :------------------------------------- | :-------------------------------------------------- |
| [class](#class)         | `string`                               | <span className="property-required">Required</span> |
| [start](#start)         | `integer`                              | <span className="property-required">Required</span> |
| [end](#end)             | `integer`                              | <span className="property-required">Required</span> |
| [curveFrom](#curvefrom) | [`Point`](/specs/vectorgraphics/point) | <span className="property-optional">Optional</span> |
| [curveTo](#curveto)     | [`Point`](/specs/vectorgraphics/point) | <span className="property-optional">Optional</span> |

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
"segment"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## start

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The starting point of the segment. The number is the index of the `vertices` list in `Vector NetWork`, starting from `0`.

</div>

<div className="property-item">

Type

`integer`

</div>

</div>

<div className="property">

<div className="property-heading">

## end

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The ending point of the segment. The number is the index of the `vertices` list in `Vector NetWork`, starting from `0`.

</div>

<div className="property-item">

Type

`integer`

</div>

</div>

<div className="property">

<div className="property-heading">

## curveFrom

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The control point of the starting point of the Bezier curve.

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

The control point of the ending point of the Bezier curve.

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/vector-network#segments'>VectorNetwork.segments</Link>
      </li>

</ul>

</div>
