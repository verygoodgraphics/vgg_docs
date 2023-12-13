---
title: GradientHilight
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

> ***Unstable.*** It is only used to represent the gradient effect converted from AI and is not the final format. It is likely to be modified in the future.

Radial gradients have an additional attribute called a hilight. The hilight serves at the starting point for the gradient ramp as it expands outward. It is still contained within the gradient vector circle.

<div className="property-preview">

<div className="property-table">

| Property              | Type                                                  | Required                                            |
| :-------------------- | :---------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)       | `string`                                              | <span className="property-required">Required</span> |
| [xHilight](#xhilight) | `number`                                              | <span className="property-required">Required</span> |
| [yHilight](#yhilight) | `number`                                              | <span className="property-required">Required</span> |
| [angle](#angle)       | `number`                                              | <span className="property-required">Required</span> |
| [length](#length)     | [`UnitInterval`](/specs/vectorgraphics/unit-interval) | <span className="property-required">Required</span> |

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
"gradientHilight"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## xHilight

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

`xHilight` and `yHilight` specify the hilight placement, in x and y offsets from the gradient vector origin.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## yHilight

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Refer to `xHilight` for details.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## angle

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This argument is the angle (in degrees) to the hilight point, measured counterclockwise from the X axis.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## length

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This argument is the distance of the hilight from the origin, expressed as a fraction of the radius—a value between 0 and 1.

</div>

<div className="property-item">

Type

[`UnitInterval`](/specs/vectorgraphics/unit-interval)

</div>

</div>
