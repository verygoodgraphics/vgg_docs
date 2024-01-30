---
title: SubShape
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

One subshape in a shape.

<div className="property-preview">

<div className="property-table">

| Property                              | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Required                                            |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                       | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | <span className="property-required">Required</span> |
| [subGeometry](#subgeometry)           | <code className="type-merged separate">oneOf&lt;<span className="type-merged-types separate"><Link to="contour"><code>Contour</code></Link><Link to="vector-network"><code>VectorNetwork</code></Link><Link to="ellipse"><code>Ellipse</code></Link><Link to="polygon"><code>Polygon</code></Link><Link to="rectangle"><code>Rectangle</code></Link><Link to="star"><code>Star</code></Link><Link to="text"><code>Text</code></Link><Link to="image"><code>Image</code></Link><Link to="path"><code>Path</code></Link><Link to="group"><code>Group</code></Link><Link to="symbol-master"><code>SymbolMaster</code></Link><Link to="symbol-instance"><code>SymbolInstance</code></Link><Link to="frame"><code>Frame</code></Link></span>&gt;</code> | <span className="property-required">Required</span> |
| [booleanOperation](#booleanoperation) | `integer`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <span className="property-required">Required</span> |

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

<Link to="contour"><code>Contour</code></Link>

<Link to="vector-network"><code>VectorNetwork</code></Link>

<Link to="ellipse"><code>Ellipse</code></Link>

<Link to="polygon"><code>Polygon</code></Link>

<Link to="rectangle"><code>Rectangle</code></Link>

<Link to="star"><code>Star</code></Link>

<Link to="text"><code>Text</code></Link>

<Link to="image"><code>Image</code></Link>

<Link to="path"><code>Path</code></Link>

<Link to="group"><code>Group</code></Link>

<Link to="symbol-master"><code>SymbolMaster</code></Link>

<Link to="symbol-instance"><code>SymbolInstance</code></Link>

<Link to="frame"><code>Frame</code></Link>

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

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/shape#subshapes'>Shape.subshapes</Link>
      </li>

</ul>

</div>
