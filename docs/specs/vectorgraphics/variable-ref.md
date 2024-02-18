---
title: VariableRef
sidebar_class_name: show
---

<div className="section-badges">

<div className="badge type">
        <span className="label">Type</span>
        <span className="value">object</span>
      </div>

<a href="#backlinks" className="badge backlinks">
          <span className="label">Backlinks</span>
          <span className="value">8</span>
        </a>

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

<div>

The ID of the referenced variable which defined in `VariableDefine`.

</div>

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

<div>

Describes how a referenced variable acts on a specific property of an object.
When the `varType` of the variable is `2`, the field is fixed to `textData`.
When the `varType` is anything else, the field points to a property of the object (check `overrideName` in `OverrideValue`).

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
      <Link to='/specs/vectorgraphics/frame#variablerefs'>Frame.variableRefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/path#variablerefs'>Path.variableRefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/text#variablerefs'>Text.variableRefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/image#variablerefs'>Image.variableRefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/group#variablerefs'>Group.variableRefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-instance#variablerefs'>SymbolInstance.variableRefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-master#variablerefs'>SymbolMaster.variableRefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/pattern-layer-def#variablerefs'>PatternLayerDef.variableRefs</Link>
      </li>

</ul>

</div>
