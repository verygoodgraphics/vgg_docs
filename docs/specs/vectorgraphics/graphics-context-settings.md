---
title: GraphicsContextSettings
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

Define the opacity, blend mode, isolation blending, and transparency knockout group of the object.

<div className="property-preview">

<div className="property-table">

| Property                                                | Type                                                  | Required                                            |
| :------------------------------------------------------ | :---------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                                         | `string`                                              | <span className="property-required">Required</span> |
| [blendMode](#blendmode)                                 | [`BlendMode`](/specs/vectorgraphics/blend-mode)       | <span className="property-required">Required</span> |
| [opacity](#opacity)                                     | [`UnitInterval`](/specs/vectorgraphics/unit-interval) | <span className="property-required">Required</span> |
| [isolateBlending](#isolateblending)                     | `boolean`                                             | <span className="property-required">Required</span> |
| [transparencyKnockoutGroup](#transparencyknockoutgroup) | `integer`                                             | <span className="property-required">Required</span> |

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
"graphicsContextSettings"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## blendMode

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The blend mode of the object.

</div>

<div className="property-item">

Type

[`BlendMode`](/specs/vectorgraphics/blend-mode)

</div>

</div>

<div className="property">

<div className="property-heading">

## opacity

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The opacity of the object. `0` represents transparent, and `1` represents opaque.

</div>

<div className="property-item">

Type

[`UnitInterval`](/specs/vectorgraphics/unit-interval)

</div>

</div>

<div className="property">

<div className="property-heading">

## isolateBlending

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

To leave objects beneath unaffected, you can isolate the blending mode to a targeted layer or group.

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## transparencyKnockoutGroup

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

In a transparency knockout group, the elements of a group don't show through each other.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                     |
| :---- | :---------------------------------------------- |
| `0`   | <div className="enum-description">OFF</div>     |
| `1`   | <div className="enum-description">ON</div>      |
| `2`   | <div className="enum-description">Neutral</div> |

</div>

</div>

</div>
