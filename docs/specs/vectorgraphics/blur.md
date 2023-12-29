---
title: Blur
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

Define a blur style of an object.

<div className="property-preview">

<div className="property-table">

| Property                    | Type                                          | Required                                            |
| :-------------------------- | :-------------------------------------------- | :-------------------------------------------------- |
| [class](#class)             | `string`                                      | <span className="property-required">Required</span> |
| [type](#type)               | [`BlurType`](/specs/vectorgraphics/blur-type) | <span className="property-required">Required</span> |
| [isEnabled](#isenabled)     | `boolean`                                     | <span className="property-required">Required</span> |
| [radius](#radius)           | `number`                                      | <span className="property-optional">Optional</span> |
| [motionAngle](#motionangle) | `number`                                      | <span className="property-optional">Optional</span> |
| [center](#center)           | [`Point`](/specs/vectorgraphics/point)        | <span className="property-required">Required</span> |
| [saturation](#saturation)   | `number`                                      | <span className="property-required">Required</span> |

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
"blur"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## type

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The type of blur.

</div>

<div className="property-item">

Type

[`BlurType`](/specs/vectorgraphics/blur-type)

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

## radius

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The range of the area where the blur takes effect.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Blur/radius.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## motionAngle

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The angle of the blur direction applies only to the `motion` blur.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Blur/motionAngle.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## center

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The center of the blur applies only to the `zoom` blur.

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Blur/center.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## saturation

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The saturation level of the blur applies only to the `background` blur.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Blur/saturation.png" alt="" />

</div>

</div>

</div>
