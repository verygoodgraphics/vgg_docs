---
title: GridItemPos
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

In grid layout, the position of grid items is determined by the grid lines defined by the rows and columns of the grid container. Grid rows and grid columns are used to specify the properties for positioning grid items within the grid.

<div className="property-preview">

<div className="property-table">

| Property              | Type      | Required                                            |
| :-------------------- | :-------- | :-------------------------------------------------- |
| [class](#class)       | `string`  | <span className="property-required">Required</span> |
| [strategy](#strategy) | `integer` | <span className="property-required">Required</span> |
| [rowId](#rowid)       | `integer` | <span className="property-required">Required</span> |
| [columnId](#columnid) | `integer` | <span className="property-required">Required</span> |

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
"gridItemPos"
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

This property is used to define the position of grid items on the row and column axes in a grid.  By default, grid items will be automatically placed from left to right in the direction of rows.  However, you can also specify specific fixed positions for grid items on both rows and columns.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                                     |
| :---- | :---------------------------------------------------------------------------------------------- |
| `1`   | <div className="enum-description">auto (Automatically assign row and column coordinates.)</div> |
| `2`   | <div className="enum-description">fix (Coordinates are specified by the user.)</div>            |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## rowId

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Takes effect only in fix mode, specifies the element start row coordinates. Value start with 0.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**minimum**: the value of this number must greater than or equal to: `0`

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## columnId

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Takes effect only in fix mode, specifies the element start column coordinates. Value start with 0.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**minimum**: the value of this number must greater than or equal to: `0`

</div>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/layout/grid-item#itempos'>GridItem.itemPos</Link>
      </li>

</ul>

</div>
