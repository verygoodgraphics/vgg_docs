---
title: PatternImageStretch
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

Use an image as the content of the pattern. The pattern type is stretch.

<div className="property-preview">

<div className="property-table">

| Property                        | Type                                                | Required                                            |
| :------------------------------ | :-------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                 | `string`                                            | <span className="property-required">Required</span> |
| [imageFileName](#imagefilename) | `string`                                            | <span className="property-required">Required</span> |
| [matrix](#matrix)               | [`Matrix`](/specs/vectorgraphics/matrix)            | <span className="property-required">Required</span> |
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
"patternImageStretch"
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

## matrix

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Image matrix.
Let the width and height of the widget be `w` and `h`, the width and height of the image be `iw` and `ih`.
Define `Mw = [[w, 0, 0], [0, h, 0], [0, 0, 1]]`, and `Mi = [[1 / iw, 0, 0], [0, 1 / ih, 0], [0, 0, 1]]`.
Finally, apply the `Mw * matrix * Mi * P` transformation to each of the four vertices of the image `(0, 0), (0, iw), (iw, -ih), (0, -ih)`, where `P` represents a vertex of the image, to obtain the position of the image in the widget coordinate system.

</div>

<div className="property-item">

Type

[`Matrix`](/specs/vectorgraphics/matrix)

</div>

</div>

<div className="property">

<div className="property-heading">

## imageAdjust

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

no description

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
