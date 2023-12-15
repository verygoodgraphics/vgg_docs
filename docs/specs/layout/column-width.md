---
title: ColumnWidth
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

This property is used to set the width of columns in a multi-column layout.
By setting this property of an element, you can specify either a fixed width or minimum width for each column, thus affecting the appearance of the multi-column layout.

<div className="property-preview">

<div className="property-table">

| Property                  | Type      | Required                                            |
| :------------------------ | :-------- | :-------------------------------------------------- |
| [class](#class)           | `string`  | <span className="property-required">Required</span> |
| [strategy](#strategy)     | `integer` | <span className="property-required">Required</span> |
| [widthValue](#widthvalue) | `number`  | <span className="property-required">Required</span> |

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
"columnWidth"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## strategy

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                              |
| :---- | :--------------------------------------------------------------------------------------- |
| `1`   | <div className="enum-description">min (Specifies the minimum width of the column.)</div> |
| `2`   | <div className="enum-description">fix (Specifies the fixed width of the column.)</div>   |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## widthValue

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

You can set this value to a uniform fixed width value or minimum width value for all columns in the grid, with a minimum column width of 1. This property accepts values in pixels (px) as units.

</div>

<div className="property-item">

Type

`number`

</div>

</div>
