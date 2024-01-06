---
title: VariableRef
sidebar_class_name: show
---

<div className="section-badges">

<div><img alt="object" src="https://img.shields.io/badge/object-object?label=Type" /></div>

<a href="#backlinks"><img alt="Backlinks" src="https://img.shields.io/badge/8-Backlinks?label=Backlinks&color=%230ea5e9" /></a>

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

The ID of the referenced variable which defined in `VariableDefine`.

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
When the `varType` of the variable is `2`, the field is fixed to `textData`.
When the `varType` is anything else, the field points to a property of the object (check `overrideName` in `OverrideValue`).

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/frame#variablerefs'>Frame.variableRefs</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/path#variablerefs'>Path.variableRefs</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/text#variablerefs'>Text.variableRefs</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/image#variablerefs'>Image.variableRefs</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/group#variablerefs'>Group.variableRefs</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/symbol-instance#variablerefs'>SymbolInstance.variableRefs</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/symbol-master#variablerefs'>SymbolMaster.variableRefs</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/pattern-layer-def#variablerefs'>PatternLayerDef.variableRefs</Link>
      </div>

</div>
