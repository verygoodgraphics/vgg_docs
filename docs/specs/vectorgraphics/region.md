---
title: Region
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

A region in a vector network.

<div className="property-preview">

<div className="property-table">

| Property                    | Type                                                                        | Required                                            |
| :-------------------------- | :-------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)             | `string`                                                                    | <span className="property-required">Required</span> |
| [loops](#loops)             | `Array<array>`                                                              | <span className="property-required">Required</span> |
| [fills](#fills)             | <code>Array&lt;<Link to="/specs/vectorgraphics/fill">Fill</Link>&gt;</code> | <span className="property-optional">Optional</span> |
| [windingRule](#windingrule) | `integer`                                                                   | <span className="property-required">Required</span> |

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
"region"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## loops

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

A list of loops of the region.
Note: A loop is a part of the region, which is not necessarily closed.

</div>

<div className="property-item">

Type

`Array<array>`

</div>

</div>

<div className="property">

<div className="property-heading">

## fills

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

A list of the fill styles of the region. If it's missing, the `style.fills` of the top-level object is uesd.

</div>

<div className="property-item">

Type

<code>Array&lt;<Link to="/specs/vectorgraphics/fill">Fill</Link>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## windingRule

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The rule determining whether an area is inside or outside a region.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                      |
| :---- | :----------------------------------------------- |
| `0`   | <div className="enum-description">non-zero</div> |
| `1`   | <div className="enum-description">even-odd</div> |

</div>

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/vector-network#regions'>VectorNetwork.regions</Link>
      </li>

</ul>

</div>
