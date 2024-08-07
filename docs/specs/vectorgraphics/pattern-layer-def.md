---
title: PatternLayerDef
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

Contains objects to define a global pattern.

<div className="property-preview">

<div className="property-table">

| Property                                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required                                            |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------- |
| [id](#id)                                     | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <span className="property-required">Required</span> |
| [name](#name)                                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <span className="property-optional">Optional</span> |
| [isLocked](#islocked)                         | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <span className="property-required">Required</span> |
| [visible](#visible)                           | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <span className="property-required">Required</span> |
| [contextSettings](#contextsettings)           | [`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | <span className="property-required">Required</span> |
| [style](#style)                               | [`Style`](/specs/vectorgraphics/style)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | <span className="property-required">Required</span> |
| [bounds](#bounds)                             | [`Rect`](/specs/vectorgraphics/rect)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <span className="property-required">Required</span> |
| [transformedBounds](#transformedbounds)       | [`Rect`](/specs/vectorgraphics/rect)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <span className="property-optional">Optional</span> |
| [matrix](#matrix)                             | [`Matrix`](/specs/vectorgraphics/matrix)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <span className="property-required">Required</span> |
| [alphaMaskBy](#alphamaskby)                   | <code>Array&lt;<Link to="/specs/vectorgraphics/alpha-mask">AlphaMask</Link>&gt;</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | <span className="property-required">Required</span> |
| [outlineMaskBy](#outlinemaskby)               | `Array<string>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | <span className="property-required">Required</span> |
| [maskType](#masktype)                         | `integer`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <span className="property-required">Required</span> |
| [styleEffectMaskArea](#styleeffectmaskarea)   | `integer`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <span className="property-required">Required</span> |
| [maskShowType](#maskshowtype)                 | `integer`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <span className="property-optional">Optional</span> |
| [overflow](#overflow)                         | `integer`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <span className="property-required">Required</span> |
| [cornerSmoothing](#cornersmoothing)           | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <span className="property-optional">Optional</span> |
| [overrideKey](#overridekey)                   | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <span className="property-optional">Optional</span> |
| [horizontalConstraint](#horizontalconstraint) | [`Constraint`](/specs/vectorgraphics/constraint)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | <span className="property-optional">Optional</span> |
| [verticalConstraint](#verticalconstraint)     | [`Constraint`](/specs/vectorgraphics/constraint)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | <span className="property-optional">Optional</span> |
| [resizesContent](#resizescontent)             | `integer`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <span className="property-optional">Optional</span> |
| [keepShapeWhenResize](#keepshapewhenresize)   | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <span className="property-optional">Optional</span> |
| [variableDefs](#variabledefs)                 | <code>Array&lt;<Link to="/specs/vectorgraphics/variable-def">VariableDef</Link>&gt;</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | <span className="property-optional">Optional</span> |
| [variableRefs](#variablerefs)                 | <code>Array&lt;<Link to="/specs/vectorgraphics/variable-ref">VariableRef</Link>&gt;</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | <span className="property-optional">Optional</span> |
| [styleEffectBoolean](#styleeffectboolean)     | `integer`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | <span className="property-optional">Optional</span> |
| [childObjects](#childobjects)                 | <code className="type-merged separate">Array&lt;<span className="type-merged-types separate"><Link to="/specs/vectorgraphics/path"><code>Path</code></Link><Link to="/specs/vectorgraphics/image"><code>Image</code></Link><Link to="/specs/vectorgraphics/text"><code>Text</code></Link><Link to="/specs/vectorgraphics/group"><code>Group</code></Link><Link to="/specs/vectorgraphics/frame"><code>Frame</code></Link><Link to="/specs/vectorgraphics/symbol-instance"><code>SymbolInstance</code></Link><Link to="/specs/vectorgraphics/symbol-master"><code>SymbolMaster</code></Link></span>&gt;</code> | <span className="property-required">Required</span> |
| [class](#class)                               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <span className="property-required">Required</span> |
| [patternBoundingBox](#patternboundingbox)     | `Array<number>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | <span className="property-required">Required</span> |

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

ID of the object, globally unique.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## name

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Name of the object, for user identification, encoded in UTF-8.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## isLocked

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

If `true`, the object will be unable to be edited.

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## visible

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

If `false`, the object will be invisible.

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## contextSettings

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The opacity and blending-related configurations of the object.

</div>

</div>

<div className="property-item">

Type

[`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings)

</div>

</div>

<div className="property">

<div className="property-heading">

## style

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The borders, fills, and other styles of the object.

</div>

</div>

<div className="property-item">

Type

[`Style`](/specs/vectorgraphics/style)

</div>

</div>

<div className="property">

<div className="property-heading">

## bounds

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The bounds of the object before undergoing matrix transformations.

</div>

</div>

<div className="property-item">

Type

[`Rect`](/specs/vectorgraphics/rect)

</div>

</div>

<div className="property">

<div className="property-heading">

## transformedBounds

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

An enclosing rectangle for the object. This property stores information about the object after the matrix transformation.

</div>

</div>

<div className="property-item">

Type

[`Rect`](/specs/vectorgraphics/rect)

</div>

</div>

<div className="property">

<div className="property-heading">

## matrix

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Matrix used for translating, rotating, and scaling the object.

</div>

</div>

<div className="property-item">

Type

[`Matrix`](/specs/vectorgraphics/matrix)

</div>

</div>

<div className="property">

<div className="property-heading">

## alphaMaskBy

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A list of alpha masks applied to the object.

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/alpha-mask">AlphaMask</Link>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## outlineMaskBy

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A list of outline masks applied to the object, clipped by the intersection of their outlines.
The items in the list are object IDs of the masks.

</div>

</div>

<div className="property-item">

Type

`Array<string>`

</div>

</div>

<div className="property">

<div className="property-heading">

## maskType

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The mask type of the object.

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

| Value | Explanation                                          |
| :---- | :--------------------------------------------------- |
| `0`   | <div className="enum-description">not a mask</div>   |
| `1`   | <div className="enum-description">outline mask</div> |
| `2`   | <div className="enum-description">alpha mask</div>   |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## styleEffectMaskArea

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

How the `style` and `visible` of the mask object affect the area of the mask.

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

| Value | Explanation                                                                                                                                                                                                                                             |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `0`   | <div className="enum-description">The `style` and `visible` of the mask object do not affect the area of the mask, which depends on its bounds.<div className="enum-images"><img src="/img/vector/Mask/styleEffectMaskArea_0.png" alt="" /></div></div> |
| `1`   | <div className="enum-description">The `style` of the mask object does not affect the area of the mask, while the `visible` does.<div className="enum-images"><img src="/img/vector/Mask/styleEffectMaskArea_1.png" alt="" /></div></div>                |
| `2`   | <div className="enum-description">The `style` and `visible` of the mask object do affect the area of the mask.<div className="enum-images"><img src="/img/vector/Mask/styleEffectMaskArea_2.png" alt="" /></div></div>                                  |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## maskShowType

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

How the mask object is displayed.

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

| Value | Explanation                                                                                                                        |
| :---- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">depend on its `style`. (Default value for `outline mask`.)</div>                                 |
| `1`   | <div className="enum-description">only display its bounds. (Default value for `alpha mask` when its `alphaType` equals `0`.)</div> |
| `2`   | <div className="enum-description">do not display. (Default value for other conditions.)</div>                                      |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## overflow

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

How to display the child element of the object when it overflows its container.

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

| Value | Explanation                                                                                                                                                                                             |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `1`   | <div className="enum-description">hidden. Anything outside the scope of the container will be cropped and invisible.</div>                                                                              |
| `2`   | <div className="enum-description">visible. Contents outside the scope of the container will not be cropped and will be visible.</div>                                                                   |
| `3`   | <div className="enum-description">scrolled. Content that is outside the container's scope is cropped, and a scrollbar is displayed to view the content that is beyond the container's boundaries.</div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## cornerSmoothing

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Smoothness of rounded corners. Range: `[0, 1]`.
`0` is the default value, indicating no smoothing for rounded corners.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## overrideKey

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Used to be associated with the object by symbol instances for overriding its attributes. Check the `objectId` in the `OverrideValue` for details.
If `overrideKey` exists, find a symbol master through upward traversal (which could be the object itself); `overrideKey` is unique within the symbol master.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## horizontalConstraint

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Horizontal constraints for the object.
Default value is `1`.

</div>

</div>

<div className="property-item">

Type

[`Constraint`](/specs/vectorgraphics/constraint)

</div>

</div>

<div className="property">

<div className="property-heading">

## verticalConstraint

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Vertical constraints for the object.
Default value is `1`.

</div>

</div>

<div className="property-item">

Type

[`Constraint`](/specs/vectorgraphics/constraint)

</div>

</div>

<div className="property">

<div className="property-heading">

## resizesContent

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

How child objects behave when the object is resized.

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

| Value | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :---- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">If the current object contains children (suitable for paths with boolean operations), the current object serves as the starting point. For each child, if the object chain includes a frame or symbol without a layout, the constraints on the child object are applied (ignoring constraints for groups and top-level paths with boolean operations). Otherwise, scaling is applied.</div> |
| `1`   | <div className="enum-description">Force child objects to have fixed positions and sizes.</div>                                                                                                                                                                                                                                                                                                                                |
| `2`   | <div className="enum-description">Apply child object constraints. (Default value.)</div>                                                                                                                                                                                                                                                                                                                                      |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## keepShapeWhenResize

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

`False`: When resizing occurs, the object scales according to the `horizontalConstraint` and `verticalConstraint`. (Default value.)
`True`: When resizing occurs, the object itself maintains its angle, and the center position is scaled. The scaling occurs along both the length and width directions.

</div>

</div>

<div className="property-item">

Type

`boolean`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="/img/vector/Constraint/keepShapeWhenResize_false.png" alt="" />

<img src="/img/vector/Constraint/keepShapeWhenResize_true.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## variableDefs

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

A list of variables that can be used by children.

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/variable-def">VariableDef</Link>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## variableRefs

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

A list of referenced variables.

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/variable-ref">VariableRef</Link>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## styleEffectBoolean

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

How the `style` of the object affects the region participating in a Boolean operation with another object.

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

| Value | Explanation                                                                                                                                                                                                                                                                                                                                                                                             |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `0`   | <div className="enum-description">ignore style(default value): The region in which an object participates in a Boolean operation is independent of its `style`.</div>                                                                                                                                                                                                                                   |
| `1`   | <div className="enum-description"> If the object is a path and the path has `borders` without `fills`, then the `borders` will be used as a region to participate in the Boolean operation calculation. If the object is a text and the text has `borders` without `fills`, then the object will be ignored during the Boolean operation. In other cases, it behaves the same as `ignore style`. </div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## childObjects

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A list of all child objects.
**Note:** The child object that appears later in the list will be displayed above the one that appears first.

</div>

</div>

<div className="property-item">

Type

<code className="type-merged separate">

Array&lt;

<span className="type-merged-types separate">

<Link to="/specs/vectorgraphics/path"><code>Path</code></Link>

<Link to="/specs/vectorgraphics/image"><code>Image</code></Link>

<Link to="/specs/vectorgraphics/text"><code>Text</code></Link>

<Link to="/specs/vectorgraphics/group"><code>Group</code></Link>

<Link to="/specs/vectorgraphics/frame"><code>Frame</code></Link>

<Link to="/specs/vectorgraphics/symbol-instance"><code>SymbolInstance</code></Link>

<Link to="/specs/vectorgraphics/symbol-master"><code>SymbolMaster</code></Link>

</span>

&gt;

</code>

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
"patternLayerDef"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## patternBoundingBox

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

no description

</div>

</div>

<div className="property-item">

Type

`Array<number>`

</div>

<div className="property-item">

Value

<div className="value-description">

**maximum number of items**: the maximum number of items for this array is: `4`

**minimum number of items**: the minimum number of items for this array is: `4`

</div>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/overview#patternlayerdef'>Overview.patternLayerDef</Link>
      </li>

</ul>

</div>
