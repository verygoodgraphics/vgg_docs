---
title: SubShape
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

One subshape in a shape.

<div className="property-preview">

<div className="property-table">

| Property                              | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Required                                            |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                       | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | <span className="property-required">Required</span> |
| [subGeometry](#subgeometry)           | <code className="type-merged separate">oneOf&lt;<span className="type-merged-types separate"><a href="contour"><code>Contour</code></a><a href="ellipse"><code>Ellipse</code></a><a href="polygon"><code>Polygon</code></a><a href="rectangle"><code>Rectangle</code></a><a href="star"><code>Star</code></a><a href="text"><code>Text</code></a><a href="image"><code>Image</code></a><a href="path"><code>Path</code></a><a href="group"><code>Group</code></a><a href="symbol-master"><code>SymbolMaster</code></a><a href="symbol-instance"><code>SymbolInstance</code></a><a href="frame"><code>Frame</code></a></span>&gt;</code> | <span className="property-required">Required</span> |
| [booleanOperation](#booleanoperation) | `integer`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | <span className="property-required">Required</span> |

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
"subshape"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## subGeometry

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Describes the detailed shape of the subshape through a contour with a list of points, a specified geometry, or another object.
When the `frame`, `symbol-instance`, and `symbol-master` are in `subGeometry`, only the `childObjects` will be used, and the bounding box will be ignored.
Any mask nested within this object will be invalidated.

</div>

<div className="property-item">

Type

<code className="type-merged separate">

oneOf&lt;

<span className="type-merged-types separate">

<a href="contour"><code>Contour</code></a>

<a href="ellipse"><code>Ellipse</code></a>

<a href="polygon"><code>Polygon</code></a>

<a href="rectangle"><code>Rectangle</code></a>

<a href="star"><code>Star</code></a>

<a href="text"><code>Text</code></a>

<a href="image"><code>Image</code></a>

<a href="path"><code>Path</code></a>

<a href="group"><code>Group</code></a>

<a href="symbol-master"><code>SymbolMaster</code></a>

<a href="symbol-instance"><code>SymbolInstance</code></a>

<a href="frame"><code>Frame</code></a>

</span>

&gt;

</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## booleanOperation

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Boolean operations that combine the current subshape with the previous subshape in the array.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                         |
| :---- | :-------------------------------------------------- |
| `0`   | <div className="enum-description">union</div>       |
| `1`   | <div className="enum-description">subtraction</div> |
| `2`   | <div className="enum-description">intersecion</div> |
| `3`   | <div className="enum-description">exclusion</div>   |
| `4`   | <div className="enum-description">none</div>        |

</div>

</div>

</div>
