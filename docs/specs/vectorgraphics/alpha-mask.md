---
title: AlphaMask
sidebar_class_name: show
---

<div className="section-badges">

<div><img alt="object" src="https://img.shields.io/badge/object-object?label=Type" /></div>

<a href="#backlinks"><img alt="Backlinks" src="https://img.shields.io/badge/8-Backlinks?label=Backlinks&color=%230ea5e9" /></a>

</div>

Define the alpha mask effect for the object, using some values of the mask to control the transparency of the object.

<div className="property-preview">

<div className="property-table">

| Property                | Type      | Required                                            |
| :---------------------- | :-------- | :-------------------------------------------------- |
| [class](#class)         | `string`  | <span className="property-required">Required</span> |
| [id](#id)               | `string`  | <span className="property-required">Required</span> |
| [alphaType](#alphatype) | `integer` | <span className="property-required">Required</span> |
| [crop](#crop)           | `boolean` | <span className="property-required">Required</span> |

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
"alphaMask"
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

Object ID of the mask.

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## alphaType

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The data type whose values are used to control the transparency of the object.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                                                                             |
| :---- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">alpha. Directly control the object's transparency using the values of the mask's Alpha channel.</div> |
| `1`   | <div className="enum-description">luminosity. Control the object's transparency using the values of the mask's luminosity.</div>        |
| `2`   | <div className="enum-description">inverse-luminosity. Similar to `luminosity`, but with the opposite effect.</div>                      |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## crop

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Whether to use the mask's boundary to crop the masked object.

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/frame#alphamaskby'>Frame.alphaMaskBy</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/path#alphamaskby'>Path.alphaMaskBy</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/text#alphamaskby'>Text.alphaMaskBy</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/image#alphamaskby'>Image.alphaMaskBy</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/group#alphamaskby'>Group.alphaMaskBy</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/symbol-instance#alphamaskby'>SymbolInstance.alphaMaskBy</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/symbol-master#alphamaskby'>SymbolMaster.alphaMaskBy</Link>
      </div>

<div className="backlink">
      <Link to='/specs/vectorgraphics/pattern-layer-def#alphamaskby'>PatternLayerDef.alphaMaskBy</Link>
      </div>

</div>
