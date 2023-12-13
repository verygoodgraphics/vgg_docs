---
title: Rectangle
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

A rectangular shape, determined by the object's bounds.

<div className="property-preview">

<div className="property-table">

| Property          | Type            | Required                                            |
| :---------------- | :-------------- | :-------------------------------------------------- |
| [class](#class)   | `string`        | <span className="property-required">Required</span> |
| [radius](#radius) | `Array<number>` | <span className="property-optional">Optional</span> |

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
"rectangle"
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

The radius values correspond to the corners in the following order: left-top, right-top, right-bottom, left-bottom.
Default value is `[0, 0, 0, 0]`.

</div>

<div className="property-item">

Type

`Array<number>`

</div>

<div className="property-item">

Value

<div className="value-description">

**maximum number of items**: the maximum number of items for this array is: `4`

**minimum number of items**: the minimum number of items for this array is: `4`

</div>

</div>

</div>
