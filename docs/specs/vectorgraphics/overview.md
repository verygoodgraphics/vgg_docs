---
title: Vector Graphics Spec
sidebar_class_name: hidden
---

<div className="section-badges">

<div className="badge type">
        <span className="label">Type</span>
        <span className="value">object</span>
      </div>

</div>

VGG Vector Graphics Specification is a JSON-based spec for describing vector graphics.

In the coordinate system defined by VGG, the X-axis increases to the right, and the Y-axis increases upwards. For a given coordinate point:

* If it is specified as normalized coordinates, it is normalized relative to the width and height in the `bounds`.
* Otherwise, the point is non-normalized and in the same coordinate system as the object `bounds`.

<div className="property-preview">

<div className="property-table">

| Property                            | Type                                                                                                                                                                                                                                                                  | Required                                            |
| :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [version](#version)                 | `string`                                                                                                                                                                                                                                                              | <span className="property-required">Required</span> |
| [fileType](#filetype)               | `integer`                                                                                                                                                                                                                                                             | <span className="property-required">Required</span> |
| [fileName](#filename)               | `string`                                                                                                                                                                                                                                                              | <span className="property-optional">Optional</span> |
| [frames](#frames)                   | <code>Array&lt;<Link to="/specs/vectorgraphics/frame">Frame</Link>&gt;</code>                                                                                                                                                                                         | <span className="property-required">Required</span> |
| [references](#references)           | <code className="type-merged">Array&lt;<span className="type-merged-types"><Link href="/specs/vectorgraphics/referenced-style"><code>ReferencedStyle</code></Link><Link href="/specs/vectorgraphics/symbol-master"><code>SymbolMaster</code></Link></span>&gt;</code> | <span className="property-optional">Optional</span> |
| [patternLayerDef](#patternlayerdef) | <code>Array&lt;<Link to="/specs/vectorgraphics/pattern-layer-def">PatternLayerDef</Link>&gt;</code>                                                                                                                                                                   | <span className="property-optional">Optional</span> |

</div>

</div>

<div className="property">

<div className="property-heading">

## version

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

Current VGG specs version, conforming to semantic version format like `major.minor.patch`.

</div>

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
"1.0.19"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## fileType

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The file type of current file.

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

| Value | Explanation                                               |
| :---- | :-------------------------------------------------------- |
| `0`   | <div className="enum-description">Unknown</div>           |
| `1`   | <div className="enum-description">Sketch</div>            |
| `3`   | <div className="enum-description">Figma</div>             |
| `4`   | <div className="enum-description">Adobe Illustrator</div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## fileName

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The file name of the input design file, encoding in UTF-8.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## frames

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A list of the frames.

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/frame">Frame</Link>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## references

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

A list of the referenced resources.

</div>

</div>

<div className="property-item">

Type

<code className="type-merged">

Array&lt;

<span className="type-merged-types">

<Link href="/specs/vectorgraphics/referenced-style"><code>ReferencedStyle</code></Link>

<Link href="/specs/vectorgraphics/symbol-master"><code>SymbolMaster</code></Link>

</span>

&gt;

</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## patternLayerDef

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Illustrator-specific pattern definitions.

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/pattern-layer-def">PatternLayerDef</Link>&gt;</code>

</div>

</div>
