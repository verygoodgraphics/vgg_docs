---
title: VariableRef
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

Referencing a variable.

<div className="property-preview">

<div className="property-table">

| Property                    | Type     | Required                                            |
| :-------------------------- | :------- | :-------------------------------------------------- |
| [class](#class)             | `string` | <span className="property-required">Required</span> |
| [id](#id)                   | `string` | <span className="property-required">Required</span> |
| [objectField](#objectfield) | `string` | <span className="property-required">Required</span> |

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
"variableRef"
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

The ID of the referenced variable which defined in `Variable Define`.

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## objectField

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Describes how a referenced variable acts on a specific property of an object.
When the `varType` of the variable is `2`, the field is fixed to 'text\_data'.
When the `varType` is anything else, the field points to a property of the object (see `overrideName` in `Override Value`).

</div>

<div className="property-item">

Type

`string`

</div>

</div>
