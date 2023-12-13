---
title: RowHeight
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

This property is used to define the size of rows in a grid layout.
By setting this property of an element, you can specify the size of rows in a grid container.

<div className="property-preview">

<div className="property-table">

| Property                     | Type      | Required                                            |
| :--------------------------- | :-------- | :-------------------------------------------------- |
| [class](#class)              | `const`   | <span className="property-required">Required</span> |
| [strategy](#strategy)        | `integer` | <span className="property-required">Required</span> |
| [fixed\_value](#fixed_value) | `number`  | <span className="property-required">Required</span> |

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
"row_height"
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

| Value | Explanation                                                                                  |
| :---- | :------------------------------------------------------------------------------------------- |
| `1`   | <div className="enum-description">fill container (Fills the row height of the parent.)</div> |
| `2`   | <div className="enum-description">fit content (Adapts the height of the subitem.)</div>      |
| `3`   | <div className="enum-description">fixed (decided by row height)</div>                        |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## fixed\_value

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Only applies when strategy is fixed, indicating a fixed row height value.

</div>

<div className="property-item">

Type

`number`

</div>

</div>