---
title: PatternImageFit
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

Use an image as the content of the pattern. The pattern type is fit.

<div className="property-preview">

<div className="property-table">

| Property                        | Type                                                | Required                                            |
| :------------------------------ | :-------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                 | `string`                                            | <span className="property-required">Required</span> |
| [imageFileName](#imagefilename) | `string`                                            | <span className="property-required">Required</span> |
| [rotation](#rotation)           | `number`                                            | <span className="property-required">Required</span> |
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
"patternImageFit"
```

</div>

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

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/pattern#instance'>Pattern.instance</Link>
      </li>

</ul>

</div>
