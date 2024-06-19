---
title: Blur
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

Define a blur style of an object.

<div className="property-preview">

<div className="property-table">

| Property                    | Type                                          | Required                                            |
| :-------------------------- | :-------------------------------------------- | :-------------------------------------------------- |
| [class](#class)             | `string`                                      | <span className="property-required">Required</span> |
| [type](#type)               | [`BlurType`](/specs/vectorgraphics/blur-type) | <span className="property-required">Required</span> |
| [isEnabled](#isenabled)     | `boolean`                                     | <span className="property-required">Required</span> |
| [radius](#radius)           | `number`                                      | <span className="property-required">Required</span> |
| [motionAngle](#motionangle) | `number`                                      | <span className="property-optional">Optional</span> |
| [center](#center)           | [`Point`](/specs/vectorgraphics/point)        | <span className="property-optional">Optional</span> |
| [saturation](#saturation)   | `number`                                      | <span className="property-optional">Optional</span> |

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

<div>

The type of blur.

</div>

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

<div>

no description

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## radius

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The range of the area where the blur takes effect.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Blur/radius.png" alt="" />

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

<div>

The angle of the blur direction applies only to the `motion` blur.
Default value is `0`.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Blur/motionAngle.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## center

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The center of the blur applies only to the `zoom` blur.
A relative coordinate according to the `bounds`, where `(0, 0)` represents the top-left corner of the `bounds`, and `(1, -1)` represents the bottom-right corner of the `bounds`.
Default value is `(0.5, -0.5)`.

</div>

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Blur/center.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## saturation

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The saturation level of the blur applies only to the `background` blur.
Default value is `1`.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Blur/saturation.png" alt="" />

</div>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/style#blurs'>Style.blurs</Link>
      </li>

</ul>

</div>
