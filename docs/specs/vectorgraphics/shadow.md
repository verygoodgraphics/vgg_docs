---
title: Shadow
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

Define a shadow style of an object.

<div className="property-preview">

<div className="property-table">

| Property                                                  | Type                                                                         | Required                                            |
| :-------------------------------------------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                                           | `string`                                                                     | <span className="property-required">Required</span> |
| [isEnabled](#isenabled)                                   | `boolean`                                                                    | <span className="property-required">Required</span> |
| [color](#color)                                           | [`Color`](/specs/vectorgraphics/color)                                       | <span className="property-required">Required</span> |
| [offsetX](#offsetx)                                       | `number`                                                                     | <span className="property-required">Required</span> |
| [offsetY](#offsety)                                       | `number`                                                                     | <span className="property-required">Required</span> |
| [blur](#blur)                                             | `number`                                                                     | <span className="property-required">Required</span> |
| [spread](#spread)                                         | `number`                                                                     | <span className="property-required">Required</span> |
| [contextSettings](#contextsettings)                       | [`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings) | <span className="property-required">Required</span> |
| [inner](#inner)                                           | `boolean`                                                                    | <span className="property-required">Required</span> |
| [showBehindTransparentAreas](#showbehindtransparentareas) | `boolean`                                                                    | <span className="property-optional">Optional</span> |

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
"shadow"
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

## color

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The color of the shadow.

</div>

</div>

<div className="property-item">

Type

[`Color`](/specs/vectorgraphics/color)

</div>

</div>

<div className="property">

<div className="property-heading">

## offsetX

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The horizontal offset of the shadow in relation to the object. Direction to the right.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Shadow/offset.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## offsetY

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The vertical upward offset of the shadow in relation to the object.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## blur

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The degree of shadow blur.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Shadow/blur.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## spread

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The distance that the shadow spreads from the object, the farther it is, the larger the shadow.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Shadow/spread.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## contextSettings

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The opacity and blending-related configurations of the shadow.

</div>

</div>

<div className="property-item">

Type

[`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings)

</div>

</div>

<div className="property">

<div className="property-heading">

## inner

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

If `true`, it's an inner shadow.

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Shadow/inner.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## showBehindTransparentAreas

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

When the object has a transparent fill and a non-inner shadow, whether the shadow is visible through the transparent area.
Default value is `false`.

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Shadow/showBehindTransparentAreas.png" alt="" />

</div>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/style#shadows'>Style.shadows</Link>
      </li>

</ul>

</div>
