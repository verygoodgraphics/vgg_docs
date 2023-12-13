---
title: FlexboxLayout
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

Flexbox is a layout model used to design flexible and efficient page layouts.
Flexbox provides a more efficient and predictable way to arrange, align, and distribute elements within containers, especially suitable for building responsive and dynamic layouts.

<div className="property-preview">

<div className="property-table">

| Property                             | Type                                      | Required                                            |
| :----------------------------------- | :---------------------------------------- | :-------------------------------------------------- |
| [class](#class)                      | `const`                                   | <span className="property-required">Required</span> |
| [direction](#direction)              | `integer`                                 | <span className="property-required">Required</span> |
| [justify\_content](#justify_content) | `integer`                                 | <span className="property-required">Required</span> |
| [align\_items](#align_items)         | [`AlignStyle`](/specs/layout/align-style) | <span className="property-required">Required</span> |
| [align\_content](#align_content)     | [`AlignStyle`](/specs/layout/align-style) | <span className="property-required">Required</span> |
| [wrap](#wrap)                        | `integer`                                 | <span className="property-required">Required</span> |
| [row\_gap](#row_gap)                 | `number`                                  | <span className="property-required">Required</span> |
| [column\_gap](#column_gap)           | `number`                                  | <span className="property-required">Required</span> |
| [padding](#padding)                  | `Array<number>`                           | <span className="property-required">Required</span> |
| [z\_order](#z_order)                 | `boolean`                                 | <span className="property-optional">Optional</span> |

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
"flexbox_layout"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## direction

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used to set the arrangement of child elements within a flex container.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                        |
| :---- | :------------------------------------------------- |
| `1`   | <div className="enum-description">horizontal</div> |
| `2`   | <div className="enum-description">vertical</div>   |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## justify\_content

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used to set the alignment of flex container's child elements along the main axis.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                           |
| :---- | :---------------------------------------------------- |
| `1`   | <div className="enum-description">start</div>         |
| `2`   | <div className="enum-description">center</div>        |
| `3`   | <div className="enum-description">end</div>           |
| `4`   | <div className="enum-description">space between</div> |
| `5`   | <div className="enum-description">space around</div>  |
| `6`   | <div className="enum-description">space evenly</div>  |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## align\_items

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used to set the alignment of flex container's children along the cross axis.

</div>

<div className="property-item">

Type

[`AlignStyle`](/specs/layout/align-style)

</div>

</div>

<div className="property">

<div className="property-heading">

## align\_content

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used to align the children of a flex container along the cross axis. It applies to multi-line flex containers and affects the alignment of multiple lines.

</div>

<div className="property-item">

Type

[`AlignStyle`](/specs/layout/align-style)

</div>

</div>

<div className="property">

<div className="property-heading">

## wrap

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property sets whether flex items are forced to be placed on a single line or can wrap onto multiple lines.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                                                                                                                                                                                                                                         |
| :---- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1`   | <div className="enum-description">no wrap: Indicates that the parent container is a single-line container. All child items in the parent container are arranged in order of layout,  even if the child items overflow the parent container.</div>                                                   |
| `2`   | <div className="enum-description">wrap: The parent container under the wrap definition is a multi-line container. When the parent container does not have enough space left to hold the minimum size of the child,  the child items are wrapped in rows or columns along the layout direction</div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## row\_gap

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used to set the size of the gap between rows in a grid layout. It defines the whitespace distance between adjacent rows within the grid container, allowing for a certain vertical spacing between grid items. This property accepts values in pixels (px) as units.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## column\_gap

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used to set the size of the gap between columns in a grid layout. It defines the whitespace distance between adjacent columns within the grid container, allowing for a certain amount of spacing horizontally for grid items. This property accepts values in pixels (px) as units.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## padding

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used to control the whitespace area between an element's content and its border. It is commonly used to increase the visual space of an element, preventing the content from being too close to the border. Padding can be set as one value (indicating that all four directions have the same padding), four values (representing top, right, bottom, left padding respectively), or two or three values for specific specifications. This property accepts values in pixels (px) as units.

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

## z\_order

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

This property is used in the layout to define the arrangement order of child elements within a flex container. By default, all child elements have an order value of false, and you can change their display order to reverse by setting the order value to true.

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>