---
title: OverrideValue
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

Define an individual symbol override.

<div className="property-preview">

<div className="property-table">

| Property                          | Type            | Required                                            |
| :-------------------------------- | :-------------- | :-------------------------------------------------- |
| [class](#class)                   | `string`        | <span className="property-required">Required</span> |
| [objectId](#objectid)             | `Array<string>` | <span className="property-required">Required</span> |
| [overrideName](#overridename)     | `string`        | <span className="property-required">Required</span> |
| [overrideValue](#overridevalue)   | Not specified   | <span className="property-required">Required</span> |
| [effectOnLayout](#effectonlayout) | `boolean`       | <span className="property-optional">Optional</span> |

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
"overrideValue"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## objectId

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

A list of IDs or keys that refer to objects, describing an overridden chain. The value of the last object will be overridden. The other objects on the chain are instances.
**For example**:
Suppose this array is `[D456, 6516, FB09]`.
Suppose the current instance (of ID `XXXX`) points to a symbol-master (of ID `C1CF`), which contains a symbol-instance (of ID `D456`).
And this instance (of ID `D456`) points to another symbol-master (of ID `0739`), which contains another symbol-instance (of ID `6516`).
Recursively, this instance (of ID `6516`) points to yet another symbol-master (of ID `59B5`), which contains the final object (of ID `FB09`).
So the current instance (of ID `XXXX`) will override the value of the final object (of ID `FB09`) according to `overrideName` and `overrideValue`.
**Note**: Each item in the array is associated with the object's `overrideKey` first. If `overrideKey` does not exist, the object's ID is associated.

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Symbol/overrideValue_objectId.png" alt="" />

</div>

</div>

<div className="property-item">

Type

`Array<string>`

</div>

</div>

<div className="property">

<div className="property-heading">

## overrideName

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Starting with the top-level property of the object, use `.` as a separator.
If the property is an array, it contains the index of the array, starting at `0`, and `*` is valid for all items.
For example:
`style`: override whole style.
`style.fills`: override the `style.fills`.
`style.fills.0`: override the first item of `style.fills`.
`style.fills.0.color`: override the color of the first `style.fills`.
`style.fills.*.color`: override the color of all items in `style.fills`.

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## overrideValue

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The value of the overridden attribute, whose type depends on the concrete property. There are two special cases:
When `overrideName` ends with `style` and `overrideValue` conforms to `referenced_style_<id>`, then it uses the corresponding value in references (top-level attribute).
When the value is `null`, it indicates deletion.

</div>

<div className="property-item">

Type

Not specified

</div>

</div>

<div className="property">

<div className="property-heading">

## effectOnLayout

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

If the value of this property is `true`, the current override applies to the layout.
Default value is `false`.
**Note**: Layout information is defined in `layout.json`, not `design.json`.

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>
