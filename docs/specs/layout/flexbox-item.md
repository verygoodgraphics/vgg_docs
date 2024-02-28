---
title: FlexboxItem
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

This property refers to the child elements within a flex container, which will be controlled by the Flexbox layout model.
The style and layout of child elements can be adjusted by setting corresponding properties on the flex container.

<div className="property-preview">

<div className="property-table">

| Property                      | Type                                 | Required                                            |
| :---------------------------- | :----------------------------------- | :-------------------------------------------------- |
| [class](#class)               | `string`                             | <span className="property-required">Required</span> |
| [position](#position)         | [`Position`](/specs/layout/position) | <span className="property-required">Required</span> |
| [flexBasis](#flexbasis)       | `number`                             | <span className="property-required">Required</span> |
| [marginLeft](#marginleft)     | `string`                             | <span className="property-optional">Optional</span> |
| [marginTop](#margintop)       | `string`                             | <span className="property-optional">Optional</span> |
| [marginRight](#marginright)   | `string`                             | <span className="property-optional">Optional</span> |
| [marginBottom](#marginbottom) | `string`                             | <span className="property-optional">Optional</span> |

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
"flexboxItem"
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

<div>

no description

</div>

</div>

<div className="property-item">

Type

[`Position`](/specs/layout/position)

</div>

</div>

<div className="property">

<div className="property-heading">

## flexBasis

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

This property is used to control the growth or shrinkage ratio of child elements in the allocation of remaining space within a flex container. The values of flex-grow and flex-shrink for all Flex items are the same, and based on the size of the remaining space in the container, flex items will automatically adjust its size to grow or shrink base on this property value.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## marginLeft

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The units are auto and pixel.
Example values:
auto
5px
-10px
Default value is `0px`.
Note that when the container's `justifyContent` use `space between`, and the main axis does not wrap, and all the child items have no margin set on the container's main axis direction, then the following rules are automatically applied:

1. When the container has only one child, the margins on the main axis direction of that child are set to auto.
2. When the container has more than one child, the margins are set to auto along the main axis direction, except for the start margin of the first child and the end margin of the last child.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## marginTop

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Refer to the description of marginLeft.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## marginRight

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Refer to the description of marginLeft.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## marginBottom

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Refer to the description of marginLeft.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/layout/object#iteminlayout'>Object.itemInLayout</Link>
      </li>

</ul>

</div>
