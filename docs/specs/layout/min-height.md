---
title: MinHeight
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

This property is used to set the minimum height of an element and is only available when the size type is fixed or relative. By setting the min-height property of an element, you can specify the minimum height in the vertical direction, ensuring that the element will not be smaller than this height. This is useful for ensuring a minimum visible space for content.

<div className="property-preview">

<div className="property-table">

| Property        | Type                             | Required                                            |
| :-------------- | :------------------------------- | :-------------------------------------------------- |
| [class](#class) | `const`                          | <span className="property-required">Required</span> |
| [value](#value) | [`Length`](/specs/layout/length) | <span className="property-required">Required</span> |

</div>

</div>

<div className="property">

<div className="property-heading">

## class

<span className="property-required">Required</span>

</div>

<div className="property-item">

Type

`const`

</div>

<div className="property-item">

Value

<div className="value-description">

**constant**: the value of this property must be equal to:

```json
"min_height"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## value

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Available types include only fixed and relative.

</div>

<div className="property-item">

Type

[`Length`](/specs/layout/length)

</div>

</div>