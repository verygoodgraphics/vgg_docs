---
title: GradientBasic
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

> ***Unstable.*** This gradient format is only used to represent the gradient effect converted from AI and is not the final format. It is likely to be modified in the future.

<div className="property-preview">

<div className="property-table">

| Property                                    | Type                                                                                                                                                                                                                         | Required                                            |
| :------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                             | `string`                                                                                                                                                                                                                     | <span className="property-required">Required</span> |
| [gradientType](#gradienttype)               | `integer`                                                                                                                                                                                                                    | <span className="property-required">Required</span> |
| [stops](#stops)                             | <code>Array&lt;<Link to="/specs/vectorgraphics/gradient-stop">GradientStop</Link>&gt;</code>                                                                                                                                 | <span className="property-required">Required</span> |
| [invert](#invert)                           | `boolean`                                                                                                                                                                                                                    | <span className="property-required">Required</span> |
| [geometry](#geometry)                       | [`GradientBasicGeometry`](/specs/vectorgraphics/gradient-basic-geometry)                                                                                                                                                     | <span className="property-required">Required</span> |
| [hilight](#hilight)                         | [`GradientHilight`](/specs/vectorgraphics/gradient-hilight)                                                                                                                                                                  | <span className="property-optional">Optional</span> |
| [overallMatrix](#overallmatrix)             | [`Matrix`](/specs/vectorgraphics/matrix)                                                                                                                                                                                     | <span className="property-optional">Optional</span> |
| [perpendicularMatrix](#perpendicularmatrix) | <code className="type-object separate"><span>Array&lt;`{`</span><div className="type-object-types separate no-border"><span>flag: `integer`;</span><span>matrix: [`Matrix`](matrix);</span></div><span>`}`&gt;</span></code> | <span className="property-optional">Optional</span> |

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
"gradientBasic"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## gradientType

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

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                             |
| :---- | :------------------------------------------------------ |
| `0`   | <div className="enum-description">linear gradient</div> |
| `1`   | <div className="enum-description">radial gradient</div> |

</div>

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

no description

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/gradient-stop">GradientStop</Link>&gt;</code>

</div>

<div className="property-item">

Value

<div className="value-description">

**minimum number of items**: the minimum number of items for this array is: `2`

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

<div>

Flag indicating whether the gradient has been inverted.

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## geometry

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The meaning of the gradient vector is different for radial gradients than for linear gradients. The vector origin is the center of the circle containing the radial gradient; the vector length is the radius of the that circle. The vector angle is not used by radial blends, but is preserved and used if the user changes the gradient from radial to linear.

</div>

</div>

<div className="property-item">

Type

[`GradientBasicGeometry`](/specs/vectorgraphics/gradient-basic-geometry)

</div>

</div>

<div className="property">

<div className="property-heading">

## hilight

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Only exists in radial mode.

</div>

</div>

<div className="property-item">

Type

[`GradientHilight`](/specs/vectorgraphics/gradient-hilight)

</div>

</div>

<div className="property">

<div className="property-heading">

## overallMatrix

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Its parameters are six floating point values, which describe the overall matrix applied to the gradient.

</div>

</div>

<div className="property-item">

Type

[`Matrix`](/specs/vectorgraphics/matrix)

</div>

</div>

<div className="property">

<div className="property-heading">

## perpendicularMatrix

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

no description

</div>

</div>

<div className="property-item">

Type

<code className="type-object separate"><span>Array&lt;`{`</span><div className="type-object-types separate no-border"><span>flag: `integer`;</span><span>matrix: [`Matrix`](matrix);</span></div><span>`}`&gt;</span></code>

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
