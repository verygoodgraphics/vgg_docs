---
title: VectorNetwork
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

A vector network improves on the path model by allowing lines and curves between any two points, instead of requiring that they all join up to form a single chain.

<div className="property-preview">

<div className="property-table">

| Property              | Type                                                                              | Required                                            |
| :-------------------- | :-------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)       | `string`                                                                          | <span className="property-required">Required</span> |
| [vertices](#vertices) | <code>Array&lt;<Link to="/specs/vectorgraphics/vertex">Vertex</Link>&gt;</code>   | <span className="property-required">Required</span> |
| [segments](#segments) | <code>Array&lt;<Link to="/specs/vectorgraphics/segment">Segment</Link>&gt;</code> | <span className="property-required">Required</span> |
| [regions](#regions)   | <code>Array&lt;<Link to="/specs/vectorgraphics/region">Region</Link>&gt;</code>   | <span className="property-required">Required</span> |

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
"vectorNetwork"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## vertices

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A list of vertices used in the vector network.

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/vertex">Vertex</Link>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## segments

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A list of segments used in the vector network.

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/segment">Segment</Link>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## regions

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

A list of regions used in the vector network.
When `regions` are empty, all `segments` automatically form a region, and all closed areas composed of `segments` will be filled according to the filling rules of the path object.
When `regions` are not empty, for `segments` that are not used in `regions`, it is sufficient to draw them directly without considering the filling.

</div>

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/region">Region</Link>&gt;</code>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/sub-shape#subgeometry'>SubShape.subGeometry</Link>
      </li>

</ul>

</div>
