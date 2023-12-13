---
title: GridItem
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

This property refers to the individual grid item or cell in a grid layout and its configurable properties.

<div className="property-preview">

<div className="property-table">

| Property                       | Type                                         | Required                                            |
| :----------------------------- | :------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                | `const`                                      | <span className="property-required">Required</span> |
| [item\_pos](#item_pos)         | [`GridItemPos`](/specs/layout/grid-item-pos) | <span className="property-required">Required</span> |
| [row\_span](#row_span)         | `integer`                                    | <span className="property-required">Required</span> |
| [column\_span](#column_span)   | `integer`                                    | <span className="property-required">Required</span> |
| [position](#position)          | [`Position`](/specs/layout/position)         | <span className="property-required">Required</span> |
| [row\_align](#row_align)       | [`AlignStyle`](/specs/layout/align-style)    | <span className="property-required">Required</span> |
| [column\_align](#column_align) | [`AlignStyle`](/specs/layout/align-style)    | <span className="property-required">Required</span> |

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
"grid_item"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## item\_pos

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`GridItemPos`](/specs/layout/grid-item-pos)

</div>

</div>

<div className="property">

<div className="property-heading">

## row\_span

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The number of rows occupied by the element.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**minimum**: the value of this number must greater than or equal to: `1`

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## column\_span

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The number of columns occupied by the element.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**minimum**: the value of this number must greater than or equal to: `1`

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## position

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`Position`](/specs/layout/position)

</div>

</div>

<div className="property">

<div className="property-heading">

## row\_align

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Valid when the position type is relative or sticky, specifies how the element's row direction is aligned to it.

</div>

<div className="property-item">

Type

[`AlignStyle`](/specs/layout/align-style)

</div>

</div>

<div className="property">

<div className="property-heading">

## column\_align

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Valid when the position type is relative or sticky, specifies how the element's column direction is aligned to it.

</div>

<div className="property-item">

Type

[`AlignStyle`](/specs/layout/align-style)

</div>

</div>
