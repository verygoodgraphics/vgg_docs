---
title: GradientBasicGeometry
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

> ***Unstable.*** It is only used to represent the gradient effect converted from AI and is not the final format. It is likely to be modified in the future.

Gradient geometry defines much of the appearance of the gradient within the path.

<div className="property-preview">

<div className="property-table">

| Property                  | Type                                     | Required                                            |
| :------------------------ | :--------------------------------------- | :-------------------------------------------------- |
| [class](#class)           | `string`                                 | <span className="property-required">Required</span> |
| [flag](#flag)             | `integer`                                | <span className="property-required">Required</span> |
| [xOrigin](#xorigin)       | `number`                                 | <span className="property-required">Required</span> |
| [yOrigin](#yorigin)       | `number`                                 | <span className="property-required">Required</span> |
| [angle](#angle)           | `number`                                 | <span className="property-required">Required</span> |
| [length](#length)         | `number`                                 | <span className="property-required">Required</span> |
| [matrix](#matrix)         | [`Matrix`](/specs/vectorgraphics/matrix) | <span className="property-required">Required</span> |
| [widthRatio](#widthratio) | `number`                                 | <span className="property-required">Required</span> |

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
"gradientBasicGeometry"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## flag

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This argument defines how the gradient will be rendered.For simple filled paths, flag takes the value 1.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                  |
| :---- | :----------------------------------------------------------- |
| `0`   | <div className="enum-description">Do not issue a clip.</div> |
| `1`   | <div className="enum-description">Issue a clip.</div>        |
| `2`   | <div className="enum-description">Disable rendering.</div>   |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## xOrigin

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

`xOrigin` and `yOrigin` give the origin of the gradient in page coordinates. The origin can be located anywhere on the artwork, and corresponds to 0 on the gradient ramp.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## yOrigin

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Refer to xOriginal for details.

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

This argument specifies the direction of the gradient vector, in degrees. The gradient ramp extends from the origin at the value of angle, which is measured counterclockwise from the X axis.

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

This argument specifies the distance over which the gradient ramp is applied. The ramp will be scaled so that its 100% value is the end of the length. This parameter may be greater than 1.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## matrix

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The six values make up a transformation matrix.
When a gradient is first applied to an object, these values are the identity matrix.
If the user transforms the object, the user transformation matrix is concatenated to the gradient instance's matrix.

</div>

<div className="property-item">

Type

[`Matrix`](/specs/vectorgraphics/matrix)

</div>

</div>

<div className="property">

<div className="property-heading">

## widthRatio

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

0.5 indicates that the width is half the length.
2 indicates that the width is twice the length.
And so on.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/gradient-basic#geometry'>GradientBasic.geometry</Link>
      </li>

</ul>

</div>
