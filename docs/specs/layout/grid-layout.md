---
title: GridLayout
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

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

no description

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

no description

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

no description

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

When there are empty rows or row height cyclic dependencies within the grid container, this value is used as a reference value. To avoid this issue, it is generally recommended that you explicitly set the height of subgrids or elements in the grid layout, either by using fixed heights or automatic heights to avoid height cyclic dependencies.

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

This property sets the size of the gap (gutter) between an element's columns. This property accepts values in pixels (px) as units.

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

This property sets the size of the gap (gutter) between an element's rows. This property accepts values in pixels (px) as units.

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

This property used to set the automatic placement behavior of items in a grid layout.
This property defines how items are automatically placed within the grid container when their position is not explicitly specified.

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

This property is used to set the inner spacing for grid containers and grid items, increasing the space between them and around their content. You can adjust the value of padding as needed. This property accepts values in pixels (px) as units.

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

This property is used to control the alignment of content within cells in the horizontal direction.
It is effective when the sum of column widths is less than the container width. Columns are fixed at "start" by default.
This property applies to all grid items, allowing you to uniformly adjust the position of all content within cells in the horizontal direction.

</div>

<div className="property-item">

Type

[`Alignment`](/specs/layout/alignment)

</div>

</div>
