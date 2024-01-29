---
title: TextLineType
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

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/text#textlinetype'>Text.textLineType</Link>
      </li>

</ul>

</div>
