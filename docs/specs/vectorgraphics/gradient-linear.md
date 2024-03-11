---
title: GradientLinear
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

A linear gradient refers to the effect of transitioning between two or more different colors in a straight line.

<div className="property-preview">

<div className="property-table">

| Property        | Type                                                                                         | Required                                            |
| :-------------- | :------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class) | `string`                                                                                     | <span className="property-required">Required</span> |
| [from](#from)   | [`Point`](/specs/vectorgraphics/point)                                                       | <span className="property-required">Required</span> |
| [to](#to)       | [`Point`](/specs/vectorgraphics/point)                                                       | <span className="property-required">Required</span> |
| [stops](#stops) | <code>Array&lt;<Link to="/specs/vectorgraphics/gradient-stop">GradientStop</Link>&gt;</code> | <span className="property-required">Required</span> |

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
"gradientLinear"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## from

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A relative coordinate according to the `bounds`, where `(0, 0)` represents the top-left corner of the `bounds`, and `(1, -1)` represents the bottom-right corner of the `bounds`.

</div>

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div className="property">

<div className="property-heading">

## to

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A relative coordinate according to the `bounds`, where `(0, 0)` represents the top-left corner of the `bounds`, and `(1, -1)` represents the bottom-right corner of the `bounds`.

</div>

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div className="property">

<div className="property-heading">

## stops

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A list of positions shows how the colors transition from one to another.
If the number of items is `1`, it means the color of the stop will not transition.

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/gradient-stop">GradientStop</Link>&gt;</code>

</div>

<div className="property-item">

Value

<div className="value-description">

**minimum number of items**: the minimum number of items for this array is: `1`

</div>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/gradient#instance'>Gradient.instance</Link>
      </li>

</ul>

</div>
