---
title: GridLayout
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

Grid Layout is a module designed for webpage layout. It allows you to create a two-dimensional grid system, providing flexibility for arranging page elements both horizontally and vertically. By placing elements in the grid's rows and columns, you can easily achieve complex layout structures.

<div className="property-preview">

<div className="property-table">

| Property                        | Type                                            | Required                                            |
| :------------------------------ | :---------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                 | `string`                                        | <span className="property-required">Required</span> |
| [dynamicColumn](#dynamiccolumn) | [`DynamicColumn`](/specs/layout/dynamic-column) | <span className="property-required">Required</span> |
| [columnWidth](#columnwidth)     | [`ColumnWidth`](/specs/layout/column-width)     | <span className="property-required">Required</span> |
| [rowHeight](#rowheight)         | [`RowHeight`](/specs/layout/row-height)         | <span className="property-required">Required</span> |
| [baseHeight](#baseheight)       | `number`                                        | <span className="property-required">Required</span> |
| [columnGap](#columngap)         | `number`                                        | <span className="property-required">Required</span> |
| [rowGap](#rowgap)               | `number`                                        | <span className="property-required">Required</span> |
| [gridAutoFlow](#gridautoflow)   | `integer`                                       | <span className="property-required">Required</span> |
| [padding](#padding)             | `Array<number>`                                 | <span className="property-required">Required</span> |
| [cellAlign](#cellalign)         | [`Alignment`](/specs/layout/alignment)          | <span className="property-required">Required</span> |

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
"gridLayout"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## dynamicColumn

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

[`DynamicColumn`](/specs/layout/dynamic-column)

</div>

</div>

<div className="property">

<div className="property-heading">

## columnWidth

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

[`ColumnWidth`](/specs/layout/column-width)

</div>

</div>

<div className="property">

<div className="property-heading">

## rowHeight

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

[`RowHeight`](/specs/layout/row-height)

</div>

</div>

<div className="property">

<div className="property-heading">

## baseHeight

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

When there are empty rows or row height cyclic dependencies within the grid container, this value is used as a reference value. To avoid this issue, it is generally recommended that you explicitly set the height of subgrids or elements in the grid layout, either by using fixed heights or automatic heights to avoid height cyclic dependencies.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## columnGap

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

This property sets the size of the gap (gutter) between an element's columns. This property accepts values in pixels (px) as units.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## rowGap

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

This property sets the size of the gap (gutter) between an element's rows. This property accepts values in pixels (px) as units.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## gridAutoFlow

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

This property used to set the automatic placement behavior of items in a grid layout.
This property defines how items are automatically placed within the grid container when their position is not explicitly specified.

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

| Value | Explanation                                                                                                                                                                                                   |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `1`   | <div className="enum-description">row: Items are placed in order from left to right and top to bottom.</div>                                                                                                  |
| `2`   | <div className="enum-description">row dense: The purpose of this value is to fill the empty spaces in the grid container as much as possible, even if it means that the order of grid items may change.</div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## padding

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

This property is used to set the inner spacing for grid containers and grid items, increasing the space between them and around their content. You can adjust the value of padding as needed. This property accepts values in pixels (px) as units.

</div>

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

<div className="property">

<div className="property-heading">

## cellAlign

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

This property uniformly controls the horizontal alignment of all subgrids within the grid container.
It takes effect when the sum of the column widths of the subgrids is less than the width of the grid container.
By default, the subgrids align at the start position, but you can adjust their horizontal position within the grid container.

</div>

</div>

<div className="property-item">

Type

[`Alignment`](/specs/layout/alignment)

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/layout/grid/cellAlign.png" alt="" />

</div>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/layout/object#layout'>Object.layout</Link>
      </li>

</ul>

</div>
