---
title: GradientDiamond
sidebar_class_name: show
---

<div className="section-badges">

<div class="badge type">
        <span class="label">Type</span>
        <span class="value">object</span>
      </div>

<a href="#backlinks" class="badge backlinks">
          <span class="label">Backlinks</span>
          <span class="value">1</span>
        </a>

</div>

A diamond gradient is a color effect that transitions similar to the luster of a diamond.

<div className="property-preview">

<div className="property-table">

| Property            | Type                                                                                                                                          | Required                                            |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)     | `string`                                                                                                                                      | <span className="property-required">Required</span> |
| [from](#from)       | [`Point`](/specs/vectorgraphics/point)                                                                                                        | <span className="property-required">Required</span> |
| [to](#to)           | [`Point`](/specs/vectorgraphics/point)                                                                                                        | <span className="property-required">Required</span> |
| [stops](#stops)     | <code>Array&lt;<Link to="/specs/vectorgraphics/gradient-stop">GradientStop</Link>&gt;</code>                                                  | <span className="property-required">Required</span> |
| [invert](#invert)   | `boolean`                                                                                                                                     | <span className="property-required">Required</span> |
| [ellipse](#ellipse) | <code className="type-merged">oneOf&lt;<span className="type-merged-types">number<Link to="point"><code>Point</code></Link></span>&gt;</code> | <span className="property-required">Required</span> |

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
"gradientDiamond"
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

A relative coordinate according to the `bounds`, where `(0, 0)` represents the top-left corner of the `bounds`, and `(1, -1)` represents the bottom-right corner of the `bounds`.

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

A relative coordinate according to the `bounds`, where `(0, 0)` represents the top-left corner of the `bounds`, and `(1, -1)` represents the bottom-right corner of the `bounds`.

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

A list of positions shows how the colors transition from one to another.
If the number of items is `1`, it means the color of the stop will not transition.

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

<div className="property">

<div className="property-heading">

## invert

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Whether the gradient has been inverted.

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## ellipse

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

When the type is set to `number`, the line connecting `from` to `to` is regarded as one semi-axis of the ellipse, denoted as `A`. The length of the other semi-axis of the ellipse is denoted as `B`. Then, `ellipse = B / A`, which is used to represent the shape of the gradient. The semi-axis `B` is perpendicular to `A` and takes the counterclockwise direction.
When the type is set to `point`, it represents another point on the ellipse with a relative coordinate according to the `bounds`, where `(0, 0)` represents the top-left corner of the `bounds`, and `(1, -1)` represents the bottom-right corner of the `bounds`.

</div>

<div className="property-item">

Type

<code className="type-merged">

oneOf&lt;

<span className="type-merged-types">

number

<Link to="point"><code>Point</code></Link>

</span>

&gt;

</code>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/gradient#instance'>Gradient.instance</Link>
      </li>

</ul>

</div>
