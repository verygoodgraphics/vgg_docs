---
title: DynamicColumn
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

<div className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<div className="backlink">
      <Link to='/specs/layout/grid-layout#dynamiccolumn'>GridLayout.properties.dynamicColumn</Link>
      </div>

</div>

The algorithm is a strategy for dynamically determining the number of columns in a grid container based on content and container size.
When using the `auto-fill` property, the algorithm will attempt to place grid items within the current row and create new columns as needed.
It flexibly adjusts the number of columns based on the available space in the current row, prioritizing existing space.
Only when there is insufficient space in the current row to accommodate new grid items will it create new columns to achieve a more flexible layout.

<div className="property-preview">

<div className="property-table">

| Property                    | Type      | Required                                            |
| :-------------------------- | :-------- | :-------------------------------------------------- |
| [class](#class)             | `string`  | <span className="property-required">Required</span> |
| [strategy](#strategy)       | `integer` | <span className="property-required">Required</span> |
| [minRow](#minrow)           | `integer` | <span className="property-required">Required</span> |
| [columnCount](#columncount) | `integer` | <span className="property-required">Required</span> |

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
"dynamicColumn"
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

| Value | Explanation                                                                                                                                                                                                                                                                                                                                                                                      |
| :---- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1`   | <div className="enum-description">auto-fill (The number of columns and rows is calculated automatically by the algorithm and is not controlled by the user.)<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/layout/grid/dynamicColumn_auto.png" alt="" /></div></div>                                                                |
| `2`   | <div className="enum-description">fix-column (A fixed number of columns is specified by the user. The number of rows is automatically adjusted as needed and is always greater than or equal to the minimum number of rows.)<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/layout/grid/dynamicColumn_fix.png" alt="" /></div></div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## minRow

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Takes effect only in fix-column mode and indicates the minimum number of rows.

</div>

<div className="property-item">

Type

`integer`

</div>

</div>

<div className="property">

<div className="property-heading">

## columnCount

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Takes effect only in fix-column mode, indicating a fixed number of columns.

</div>

<div className="property-item">

Type

`integer`

</div>

</div>
