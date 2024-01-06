---
title: Star
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

A star shape.

<div className="property-preview">

<div className="property-table">

| Property                  | Type      | Required                                            |
| :------------------------ | :-------- | :-------------------------------------------------- |
| [class](#class)           | `string`  | <span className="property-required">Required</span> |
| [radius](#radius)         | `number`  | <span className="property-optional">Optional</span> |
| [ratio](#ratio)           | `number`  | <span className="property-required">Required</span> |
| [pointCount](#pointcount) | `integer` | <span className="property-required">Required</span> |

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
"star"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## radius

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The radius of all the corners of the star.
Default value is `0`.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Path/radius_star.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## ratio

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Ratio refers to the size of the star within the polygon shape.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Path/star_ratio.png" alt="" />

</div>

</div>

<div className="property-item">

Value

<div className="value-description">

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## pointCount

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The number of star vertices, which can determine the positions of the vertices on the object's bounds.

</div>

<div className="property-item">

Type

`integer`

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/sub-shape#subgeometry'>SubShape.subGeometry</Link>
      </li>

</ul>

</div>
