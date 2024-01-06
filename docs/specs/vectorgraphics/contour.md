---
title: Contour
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

The contour of a shape.

<div className="property-preview">

<div className="property-table">

| Property          | Type                                                                                   | Required                                            |
| :---------------- | :------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)   | `string`                                                                               | <span className="property-required">Required</span> |
| [closed](#closed) | `boolean`                                                                              | <span className="property-required">Required</span> |
| [points](#points) | <code>Array&lt;<Link to="/specs/vectorgraphics/point-attr">PointAttr</Link>&gt;</code> | <span className="property-required">Required</span> |

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
"contour"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## closed

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Whether the path is open or closed.

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## points

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

An array of points representing the contour of the shape.

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/point-attr">PointAttr</Link>&gt;</code>

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
