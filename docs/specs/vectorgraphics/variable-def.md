---
title: VariableDef
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

Define a variable.

<div className="property-preview">

<div className="property-table">

| Property            | Type          | Required                                            |
| :------------------ | :------------ | :-------------------------------------------------- |
| [class](#class)     | `string`      | <span className="property-required">Required</span> |
| [id](#id)           | `string`      | <span className="property-required">Required</span> |
| [varType](#vartype) | `integer`     | <span className="property-required">Required</span> |
| [value](#value)     | Not specified | <span className="property-required">Required</span> |

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
"variableDef"
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

The ID of the variable is not globally unique but unique under the object tree.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## varType

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The value type of the variable.

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

| Value | Explanation                                                                                                                                                                    |
| :---- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1`   | <div className="enum-description">boolean</div>                                                                                                                                |
| `2`   | <div className="enum-description">textProperty: contains some attributes of the text.</div>                                                                                    |
| `3`   | <div className="enum-description">string</div>                                                                                                                                 |
| `4`   | <div className="enum-description">reference: references the definition of another variable, where `value` is a string and pointing to the ID of the referenced variable.</div> |

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

<div>

The value of the variable, whose type is determined by `varType`.
In the master, the object refers to a variable, and you don't need to care about the value of the variable; you just use its own value.
In an instance, if the variable is not reassigned, the value of the corresponding variable in the master is used.
In an instance, reassigning a variable affects all objects in that instance that reference the variable.
In an instance, the direct override of a property takes precedence over the value of the corresponding variable.

</div>

</div>

<div className="property-item">

Type

Not specified

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/frame#variabledefs'>Frame.variableDefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/path#variabledefs'>Path.variableDefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/text#variabledefs'>Text.variableDefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/image#variabledefs'>Image.variableDefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/group#variabledefs'>Group.variableDefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-instance#variabledefs'>SymbolInstance.variableDefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-master#variabledefs'>SymbolMaster.variableDefs</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/pattern-layer-def#variabledefs'>PatternLayerDef.variableDefs</Link>
      </li>

</ul>

</div>
