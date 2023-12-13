---
title: Polygon
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

A polygon shape.

<div className="property-preview">

<div className="property-table">

| Property                  | Type      | Required                                            |
| :------------------------ | :-------- | :-------------------------------------------------- |
| [class](#class)           | `string`  | <span className="property-required">Required</span> |
| [radius](#radius)         | `number`  | <span className="property-optional">Optional</span> |
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
"polygon"
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

The radius of all the corners of the polygon.
Default value is `0`.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## pointCount

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The number of polygon vertices, which can determine the positions of the vertices on the object's bounds.

</div>

<div className="property-item">

Type

`integer`

</div>

</div>
