---
title: PatternImageTile
sidebar_class_name: show
---

<div className="section-badges">

<div class="badge type">
        <span class="label">Type</span>
        <span class="value">object</span>
      </div>

<a href="#backlinks" class="badge backlinks">
          <span class="label">Backlinks</span>
          <span class="value">1</span>
        </a>

</div>

Use an image as the content of the pattern. The pattern type is tile.

<div className="property-preview">

<div className="property-table">

| Property                        | Type                                                | Required                                            |
| :------------------------------ | :-------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                 | `string`                                            | <span className="property-required">Required</span> |
| [mirror](#mirror)               | `boolean`                                           | <span className="property-optional">Optional</span> |
| [scale](#scale)                 | `number`                                            | <span className="property-required">Required</span> |
| [mode](#mode)                   | `integer`                                           | <span className="property-optional">Optional</span> |
| [rotation](#rotation)           | `number`                                            | <span className="property-required">Required</span> |
| [imageFileName](#imagefilename) | `string`                                            | <span className="property-required">Required</span> |
| [imageAdjust](#imageadjust)     | [`ImageAdjust`](/specs/vectorgraphics/image-adjust) | <span className="property-optional">Optional</span> |

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
"patternImageTile"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## mirror

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Whether to mirror the image repetitively.
Default value is `false`.

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## scale

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Image scaling ratio.
`0.5` means `50%`, `2` means `200%`, and so on.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## mode

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Tile the image in which direction.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                    |
| :---- | :----------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">horizontal and vertical(default value)</div> |
| `1`   | <div className="enum-description">only horizontal</div>                        |
| `2`   | <div className="enum-description">only vertical</div>                          |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## rotation

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Rotation of the image in degrees. Positive values represent counterclockwise rotation. Rotate around the center of the image.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## imageFileName

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

File name of the image.

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## imageAdjust

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Adjust the colors of the image.

</div>

<div className="property-item">

Type

[`ImageAdjust`](/specs/vectorgraphics/image-adjust)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/pattern#instance'>Pattern.instance</Link>
      </li>

</ul>

</div>
