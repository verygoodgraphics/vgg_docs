---
title: Vertex
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

A vertex in a vector network.

<div className="property-preview">

<div className="property-table">

| Property              | Type                                              | Required                                            |
| :-------------------- | :------------------------------------------------ | :-------------------------------------------------- |
| [class](#class)       | `string`                                          | <span className="property-required">Required</span> |
| [radius](#radius)     | `number`                                          | <span className="property-optional">Optional</span> |
| [point](#point)       | [`Point`](/specs/vectorgraphics/point)            | <span className="property-required">Required</span> |
| [markType](#marktype) | [`MarkerType`](/specs/vectorgraphics/marker-type) | <span className="property-optional">Optional</span> |

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
"vertex"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## radius

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Corner radius at the vertex.

</div>

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## point

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The coordinates of the point before the matrix transformation.

</div>

</div>

<div className="property-item">

Type

[`Point`](/specs/vectorgraphics/point)

</div>

</div>

<div className="property">

<div className="property-heading">

## markType

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The shape type of the vertex. This property only applies to endpoints.

</div>

</div>

<div className="property-item">

Type

[`MarkerType`](/specs/vectorgraphics/marker-type)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/vector-network#vertices'>VectorNetwork.vertices</Link>
      </li>

</ul>

</div>
