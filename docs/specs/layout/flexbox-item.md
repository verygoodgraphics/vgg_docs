---
title: FlexboxItem
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

This property refers to the child elements within a flex container, which will be controlled by the Flexbox layout model.
The style and layout of child elements can be adjusted by setting corresponding properties on the flex container.

<div className="property-preview">

<div className="property-table">

| Property                                | Type                                 | Required                                            |
| :-------------------------------------- | :----------------------------------- | :-------------------------------------------------- |
| [class](#class)                         | `const`                              | <span className="property-required">Required</span> |
| [position](#position)                   | [`Position`](/specs/layout/position) | <span className="property-required">Required</span> |
| [flex\_grow\_shrink](#flex_grow_shrink) | `number`                             | <span className="property-required">Required</span> |

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
"flexbox_item"
```

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

## flex\_grow\_shrink

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used to control the growth or shrinkage ratio of child elements in the allocation of remaining space within a flex container. The values of flex-grow and flex-shrink for all Flex items are the same, and based on the size of the remaining space in the container, flex items will automatically adjust its size to grow or shrink base on this property value.

</div>

<div className="property-item">

Type

`number`

</div>

</div>
