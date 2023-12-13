---
title: Fill
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

Define a fill style of an object.

<div className="property-preview">

<div className="property-table">

| Property                            | Type                                                                         | Required                                            |
| :---------------------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                     | `string`                                                                     | <span className="property-required">Required</span> |
| [isEnabled](#isenabled)             | `boolean`                                                                    | <span className="property-required">Required</span> |
| [color](#color)                     | [`Color`](/specs/vectorgraphics/color)                                       | <span className="property-optional">Optional</span> |
| [fillType](#filltype)               | [`FillType`](/specs/vectorgraphics/fill-type)                                | <span className="property-required">Required</span> |
| [contextSettings](#contextsettings) | [`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings) | <span className="property-required">Required</span> |
| [gradient](#gradient)               | [`Gradient`](/specs/vectorgraphics/gradient)                                 | <span className="property-optional">Optional</span> |
| [pattern](#pattern)                 | [`Pattern`](/specs/vectorgraphics/pattern)                                   | <span className="property-optional">Optional</span> |

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
"fill"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## isEnabled

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## color

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The color of the fill.

</div>

<div className="property-item">

Type

[`Color`](/specs/vectorgraphics/color)

</div>

</div>

<div className="property">

<div className="property-heading">

## fillType

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The content type of the fill.

</div>

<div className="property-item">

Type

[`FillType`](/specs/vectorgraphics/fill-type)

</div>

</div>

<div className="property">

<div className="property-heading">

## contextSettings

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The opacity and blending-related configurations of the fill.

</div>

<div className="property-item">

Type

[`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings)

</div>

</div>

<div className="property">

<div className="property-heading">

## gradient

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The gradient of the fill.

</div>

<div className="property-item">

Type

[`Gradient`](/specs/vectorgraphics/gradient)

</div>

</div>

<div className="property">

<div className="property-heading">

## pattern

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The pattern of the fill.

</div>

<div className="property-item">

Type

[`Pattern`](/specs/vectorgraphics/pattern)

</div>

</div>