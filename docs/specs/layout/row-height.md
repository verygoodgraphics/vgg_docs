---
title: RowHeight
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

This property is used to define the size of rows in a grid layout.
By setting this property of an element, you can specify the size of rows in a grid container.

<div className="property-preview">

<div className="property-table">

| Property                  | Type      | Required                                            |
| :------------------------ | :-------- | :-------------------------------------------------- |
| [class](#class)           | `string`  | <span className="property-required">Required</span> |
| [strategy](#strategy)     | `integer` | <span className="property-required">Required</span> |
| [fixedValue](#fixedvalue) | `number`  | <span className="property-required">Required</span> |

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
"rowHeight"
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

<div>

no description

</div>

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

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/layout/grid/rowHeight.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## fixedValue

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Only applies when strategy is fixed, indicating a fixed row height value.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/layout/grid-layout#rowheight'>GridLayout.rowHeight</Link>
      </li>

</ul>

</div>
