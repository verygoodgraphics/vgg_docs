---
title: VectorGraphics
sidebar_class_name: hidden
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

VGG Design Format is a JSON-based format for describing the content of various design pieces.

<div className="property-preview">

<div className="property-table">

| Property                            | Type                                                                                                                                                                                                                                                      | Required                                            |
| :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [version](#version)                 | `string`                                                                                                                                                                                                                                                  | <span className="property-required">Required</span> |
| [fileType](#filetype)               | `integer`                                                                                                                                                                                                                                                 | <span className="property-required">Required</span> |
| [fileName](#filename)               | `string`                                                                                                                                                                                                                                                  | <span className="property-optional">Optional</span> |
| [frames](#frames)                   | <code>Array&lt;<a href="/specs/vectorgraphics/frame">Frame</a>&gt;</code>                                                                                                                                                                                 | <span className="property-required">Required</span> |
| [references](#references)           | <code className="type-merged">Array&lt;<span className="type-merged-types"><a href="/specs/vectorgraphics/referenced-style"><code>ReferencedStyle</code></a><a href="/specs/vectorgraphics/symbol-master"><code>SymbolMaster</code></a></span>&gt;</code> | <span className="property-optional">Optional</span> |
| [patternLayerDef](#patternlayerdef) | <code>Array&lt;<a href="/specs/vectorgraphics/pattern-layer-def">PatternLayerDef</a>&gt;</code>                                                                                                                                                           | <span className="property-optional">Optional</span> |

</div>

</div>

<div className="property">

<div className="property-heading">

## version

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Version number information in the format: `major.minor.patch`.

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
"1.0.8"
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

The file type of current file.

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
| `1`   | <div className="enum-description">sketch</div>            |
| `3`   | <div className="enum-description">figma</div>             |
| `4`   | <div className="enum-description">adobe illustrator</div> |

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

The file name of the input design file, encoding in UTF-8.

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

A list of the frames.

</div>

<div className="property-item">

Type

<code>Array&lt;<a href="/specs/vectorgraphics/frame">Frame</a>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## references

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

A list of the referenced resources.

</div>

<div className="property-item">

Type

<code className="type-merged">

Array&lt;

<span className="type-merged-types">

<a href="/specs/vectorgraphics/referenced-style"><code>ReferencedStyle</code></a>

<a href="/specs/vectorgraphics/symbol-master"><code>SymbolMaster</code></a>

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

no description

</div>

<div className="property-item">

Type

<code>Array&lt;<a href="/specs/vectorgraphics/pattern-layer-def">PatternLayerDef</a>&gt;</code>

</div>

</div>
