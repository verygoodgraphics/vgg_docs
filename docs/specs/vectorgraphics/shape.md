---
title: Shape
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

The shape of a path. Shape represents a vector geometry which is formed by individual subshapes combined together via boolean operations.

<div className="property-preview">

<div className="property-table">

| Property                    | Type                                                                             | Required                                            |
| :-------------------------- | :------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)             | `string`                                                                         | <span className="property-required">Required</span> |
| [subshapes](#subshapes)     | <code>Array&lt;<a href="/specs/vectorgraphics/sub-shape">SubShape</a>&gt;</code> | <span className="property-required">Required</span> |
| [windingRule](#windingrule) | `integer`                                                                        | <span className="property-required">Required</span> |
| [radius](#radius)           | `number`                                                                         | <span className="property-optional">Optional</span> |

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
"shape"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## subshapes

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

A list of subshapes in the shape.

</div>

<div className="property-item">

Type

<code>Array&lt;<a href="/specs/vectorgraphics/sub-shape">SubShape</a>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## windingRule

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The rule determining whether an area is inside or outside a path.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                      |
| :---- | :----------------------------------------------- |
| `0`   | <div className="enum-description">non-zero</div> |
| `1`   | <div className="enum-description">even-odd</div> |

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

The radius of the shape, when the `subshapes` have boolean operations.
Affects the corners of all `subshapes` under the shape, as well as the corners of the overlapping region of the `subshapes`.
The `radius` of the subshapes override this radius.

</div>

<div className="property-item">

Type

`number`

</div>

</div>