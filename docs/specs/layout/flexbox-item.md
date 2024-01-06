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

| Property                | Type                                 | Required                                            |
| :---------------------- | :----------------------------------- | :-------------------------------------------------- |
| [class](#class)         | `string`                             | <span className="property-required">Required</span> |
| [position](#position)   | [`Position`](/specs/layout/position) | <span className="property-required">Required</span> |
| [flexBasis](#flexbasis) | `number`                             | <span className="property-required">Required</span> |

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

no description

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

This property is used to control the growth or shrinkage ratio of child elements in the allocation of remaining space within a flex container. The values of flex-grow and flex-shrink for all Flex items are the same, and based on the size of the remaining space in the container, flex items will automatically adjust its size to grow or shrink base on this property value.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/layout/object#iteminlayout'>Object.itemInLayout</Link>
      </li>

</ul>

</div>
