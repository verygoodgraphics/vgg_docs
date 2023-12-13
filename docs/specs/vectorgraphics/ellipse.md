---
title: Ellipse
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

An elliptical or sector shape. The object's bounds determine the size of the ellipse.

<div className="property-preview">

<div className="property-table">

| Property                        | Type     | Required                                            |
| :------------------------------ | :------- | :-------------------------------------------------- |
| [class](#class)                 | `string` | <span className="property-required">Required</span> |
| [startingAngle](#startingangle) | `number` | <span className="property-required">Required</span> |
| [endingAngle](#endingangle)     | `number` | <span className="property-required">Required</span> |
| [innerRadius](#innerradius)     | `number` | <span className="property-required">Required</span> |

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
"ellipse"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## startingAngle

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The starting angle of the sector sweep.
The three o'clock direction is defined as `0`, and increasing angles rotate clockwise.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## endingAngle

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The ending angle of the sector sweep.
The three o'clock direction is defined as `0`, and increasing angles rotate clockwise.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## innerRadius

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

A ratio of inner radius to the outer radius.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

Value

<div className="value-description">

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

</div>

</div>

</div>