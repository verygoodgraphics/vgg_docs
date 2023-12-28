---
title: Length
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>



<div className="property-preview">

<div className="property-table">

| Property        | Type      | Required                                            |
| :-------------- | :-------- | :-------------------------------------------------- |
| [class](#class) | `string`  | <span className="property-required">Required</span> |
| [value](#value) | `number`  | <span className="property-required">Required</span> |
| [types](#types) | `integer` | <span className="property-required">Required</span> |

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
"length"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## value

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

This property is used to describe the type of behavior for distance or size values in various properties. Length properties can be applied with different units to set the width, height, etc. of elements. The units and meaning of values depend on their types.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## types

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/elff1/testOpen/main/docs/docs/tx1.jpg" alt="" />

<img src="https://raw.githubusercontent.com/elff1/testOpen/main/docs/docs/tx1.jpg" alt="" />

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

| Value | Explanation                                                                                                                                                                                                                                                                                                                                                 |
| :---- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1`   | <div className="enum-description">fixed (px): Width or height is a fixed value.<div className="enum-images"><img src="https://raw.githubusercontent.com/elff1/testOpen/main/docs/docs/tx1.jpg" alt="" /></div></div>                                                                                                                                        |
| `2`   | <div className="enum-description">relative (percent): The width or height of the child is the percentage relative to the width or height of the parent. Only children whose parents apply layout are available.<div className="enum-images"><img src="https://raw.githubusercontent.com/elff1/testOpen/main/docs/docs/tx1.jpg" alt="" /></div></div>        |
| `4`   | <div className="enum-description">fit content (auto): The size of the parent is calculated from the sum of the size of the child nodes. In this case, the value of value is meaningless. Only the parent is available.<div className="enum-images"><img src="https://raw.githubusercontent.com/elff1/testOpen/main/docs/docs/tx1.jpg" alt="" /></div></div> |

</div>

</div>

</div>
