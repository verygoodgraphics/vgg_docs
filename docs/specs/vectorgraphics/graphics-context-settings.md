---
title: GraphicsContextSettings
sidebar_class_name: show
---

<div className="section-badges">

<div className="badge type">
        <span className="label">Type</span>
        <span className="value">object</span>
      </div>

<a href="#backlinks" className="badge backlinks">
          <span className="label">Backlinks</span>
          <span className="value">12</span>
        </a>

</div>

Define the opacity, blend mode, isolation blending, and transparency knockout group of the object.

<div className="property-preview">

<div className="property-table">

| Property                                                | Type                                                  | Required                                            |
| :------------------------------------------------------ | :---------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                                         | `string`                                              | <span className="property-required">Required</span> |
| [blendMode](#blendmode)                                 | [`BlendMode`](/specs/vectorgraphics/blend-mode)       | <span className="property-required">Required</span> |
| [opacity](#opacity)                                     | [`UnitInterval`](/specs/vectorgraphics/unit-interval) | <span className="property-required">Required</span> |
| [isolateBlending](#isolateblending)                     | `boolean`                                             | <span className="property-required">Required</span> |
| [transparencyKnockoutGroup](#transparencyknockoutgroup) | `integer`                                             | <span className="property-required">Required</span> |

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
"graphicsContextSettings"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## blendMode

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The blend mode of the object.

</div>

</div>

<div className="property-item">

Type

[`BlendMode`](/specs/vectorgraphics/blend-mode)

</div>

</div>

<div className="property">

<div className="property-heading">

## opacity

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The opacity of the object. `0` represents transparent, and `1` represents opaque.

</div>

</div>

<div className="property-item">

Type

[`UnitInterval`](/specs/vectorgraphics/unit-interval)

</div>

</div>

<div className="property">

<div className="property-heading">

## isolateBlending

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

To leave objects beneath unaffected, you can isolate the blending mode to a targeted layer or group.

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## transparencyKnockoutGroup

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

In a transparency knockout group, the elements of a group don't show through each other.

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

| Value | Explanation                                     |
| :---- | :---------------------------------------------- |
| `0`   | <div className="enum-description">OFF</div>     |
| `1`   | <div className="enum-description">ON</div>      |
| `2`   | <div className="enum-description">Neutral</div> |

</div>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/frame#contextsettings'>Frame.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/border#contextsettings'>Border.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/fill#contextsettings'>Fill.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/shadow#contextsettings'>Shadow.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/path#contextsettings'>Path.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/text#contextsettings'>Text.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/image#contextsettings'>Image.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/group#contextsettings'>Group.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-instance#contextsettings'>SymbolInstance.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-master#contextsettings'>SymbolMaster.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/referenced-style#contextsettings'>ReferencedStyle.contextSettings</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/pattern-layer-def#contextsettings'>PatternLayerDef.contextSettings</Link>
      </li>

</ul>

</div>
