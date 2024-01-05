---
title: TextLineType
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

The properties of a text line within a text list.

<div className="property-preview">

<div className="property-table">

| Property                | Type      | Required                                            |
| :---------------------- | :-------- | :-------------------------------------------------- |
| [class](#class)         | `string`  | <span className="property-required">Required</span> |
| [styleType](#styletype) | `integer` | <span className="property-required">Required</span> |
| [level](#level)         | `integer` | <span className="property-required">Required</span> |
| [isFirst](#isfirst)     | `boolean` | <span className="property-required">Required</span> |

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
"textLineType"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## styleType

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

| Value | Explanation                                               |
| :---- | :-------------------------------------------------------- |
| `0`   | <div className="enum-description">plain, not a list</div> |
| `1`   | <div className="enum-description">ordered list</div>      |
| `2`   | <div className="enum-description">unordered list</div>    |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## level

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The hierarchy level of the text line, starting with `0`(default value).

</div>

<div className="property-item">

Type

`integer`

</div>

</div>

<div className="property">

<div className="property-heading">

## isFirst

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Whether the text line is the first line in the text list of the same hierarchy level.
Only has meaning for an ordered list.

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>
