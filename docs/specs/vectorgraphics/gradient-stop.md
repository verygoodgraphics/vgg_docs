---
title: GradientStop
sidebar_class_name: show
---

<div className="section-badges">

<div className="badge type">
        <span className="label">Type</span>
        <span className="value">object</span>
      </div>

<a href="#backlinks" className="badge backlinks">
          <span className="label">Backlinks</span>
          <span className="value">5</span>
        </a>

</div>

A color stop defines a position on the gradient ramp that marks the start or stop of a color transition.

<div className="property-preview">

<div className="property-table">

| Property              | Type                                                  | Required                                            |
| :-------------------- | :---------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)       | `string`                                              | <span className="property-required">Required</span> |
| [color](#color)       | [`Color`](/specs/vectorgraphics/color)                | <span className="property-required">Required</span> |
| [position](#position) | [`UnitInterval`](/specs/vectorgraphics/unit-interval) | <span className="property-required">Required</span> |
| [midPoint](#midpoint) | [`UnitInterval`](/specs/vectorgraphics/unit-interval) | <span className="property-required">Required</span> |

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
"gradientStop"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## color

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`Color`](/specs/vectorgraphics/color)

</div>

</div>

<div className="property">

<div className="property-heading">

## position

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

A number giving the position of the color stop on the gradient ramp.

</div>

<div className="property-item">

Type

[`UnitInterval`](/specs/vectorgraphics/unit-interval)

</div>

</div>

<div className="property">

<div className="property-heading">

## midPoint

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

A position between the current color stop and the next one, where there is an equal mix of the two colors.
`midPoint` is a percentage of the distance between the two color stops. ***Default value is `0.5`.***
The `midPoint` is ignored for the last color stop, except in the case of angular gradients.

</div>

<div className="property-item">

Type

[`UnitInterval`](/specs/vectorgraphics/unit-interval)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/gradient-angular#stops'>GradientAngular.stops</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/gradient-linear#stops'>GradientLinear.stops</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/gradient-radial#stops'>GradientRadial.stops</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/gradient-diamond#stops'>GradientDiamond.stops</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/gradient-basic#stops'>GradientBasic.stops</Link>
      </li>

</ul>

</div>
