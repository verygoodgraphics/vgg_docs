---
title: Object
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

This property provides control over the layout-related properties of design elements, including controlling the size, position, and layout behavior of elements to ensure their correct display and layout on the page.

<div className="property-preview">

<div className="property-table">

| Property                            | Type                                                                                                                                                                                                  | Required                                            |
| :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                     | `const`                                                                                                                                                                                               | <span className="property-required">Required</span> |
| [id](#id)                           | `string`                                                                                                                                                                                              | <span className="property-required">Required</span> |
| [layout](#layout)                   | <code className="type-merged">oneOf&lt;<span className="type-merged-types"><a href="flexbox-layout"><code>FlexboxLayout</code></a><a href="grid-layout"><code>GridLayout</code></a></span>&gt;</code> | <span className="property-optional">Optional</span> |
| [item\_in\_layout](#item_in_layout) | <code className="type-merged">oneOf&lt;<span className="type-merged-types"><a href="flexbox-item"><code>FlexboxItem</code></a><a href="grid-item"><code>GridItem</code></a></span>&gt;</code>         | <span className="property-optional">Optional</span> |
| [width](#width)                     | [`Width`](/specs/layout/width)                                                                                                                                                                        | <span className="property-required">Required</span> |
| [max\_width](#max_width)            | [`MaxWidth`](/specs/layout/max-width)                                                                                                                                                                 | <span className="property-optional">Optional</span> |
| [min\_width](#min_width)            | [`MinWidth`](/specs/layout/min-width)                                                                                                                                                                 | <span className="property-optional">Optional</span> |
| [height](#height)                   | [`Height`](/specs/layout/height)                                                                                                                                                                      | <span className="property-required">Required</span> |
| [max\_height](#max_height)          | [`MaxHeight`](/specs/layout/max-height)                                                                                                                                                               | <span className="property-optional">Optional</span> |
| [min\_height](#min_height)          | [`MinHeight`](/specs/layout/min-height)                                                                                                                                                               | <span className="property-optional">Optional</span> |
| [aspect\_ratio](#aspect_ratio)      | `number`                                                                                                                                                                                              | <span className="property-optional">Optional</span> |

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
"object"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## id

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used in the layout to uniquely identify a specific object. Use this value to associate objects in VGG format.

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## layout

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

This property describes the layout characteristics of the current object and can be used to determine its layout type.

</div>

<div className="property-item">

Type

<code className="type-merged">

oneOf&lt;

<span className="type-merged-types">

<a href="flexbox-layout"><code>FlexboxLayout</code></a>

<a href="grid-layout"><code>GridLayout</code></a>

</span>

&gt;

</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## item\_in\_layout

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

This property refers to the layout information of the current object in the layout, which can be adjusted in terms of its position and style through corresponding layout properties. In Flex layout, it refers to the flex items within a flex container. In grid layout, it refers to individual grid items within a grid container.

</div>

<div className="property-item">

Type

<code className="type-merged">

oneOf&lt;

<span className="type-merged-types">

<a href="flexbox-item"><code>FlexboxItem</code></a>

<a href="grid-item"><code>GridItem</code></a>

</span>

&gt;

</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## width

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`Width`](/specs/layout/width)

</div>

</div>

<div className="property">

<div className="property-heading">

## max\_width

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`MaxWidth`](/specs/layout/max-width)

</div>

</div>

<div className="property">

<div className="property-heading">

## min\_width

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`MinWidth`](/specs/layout/min-width)

</div>

</div>

<div className="property">

<div className="property-heading">

## height

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`Height`](/specs/layout/height)

</div>

</div>

<div className="property">

<div className="property-heading">

## max\_height

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`MaxHeight`](/specs/layout/max-height)

</div>

</div>

<div className="property">

<div className="property-heading">

## min\_height

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`MinHeight`](/specs/layout/min-height)

</div>

</div>

<div className="property">

<div className="property-heading">

## aspect\_ratio

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

This property refers to the proportional relationship between the width and height of an element. This property can be used to define the aspect ratio of an element, allowing you to set the desired width-to-height ratio. It ensures that the element maintains the same aspect ratio in containers of different sizes.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

Value

<div className="value-description">

**minimum (exclusive)**: the value of this number must be greater than: `0`

</div>

</div>

</div>
