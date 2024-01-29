---
title: Ellipse
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

An elliptical or sector shape. The object's bounds determine the size of the ellipse.

<div className="property-preview">

<div className="property-table">

| Property                        | Type     | Required                                            |
| :------------------------------ | :------- | :-------------------------------------------------- |
| [class](#class)                 | `string` | <span className="property-required">Required</span> |
| [startingAngle](#startingangle) | `number` | <span className="property-required">Required</span> |
| [endingAngle](#endingangle)     | `number` | <span className="property-required">Required</span> |
| [innerRadius](#innerradius)     | `number` | <span className="property-required">Required</span> |

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
"ellipse"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## startingAngle

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The starting angle of the sector sweep.
The three o'clock direction is defined as `0`, increasing in the clockwise direction.
If `startingAngle` is less than `endingAngle`, the filled area spans from `startingAngle` to `endingAngle` clockwise; otherwise, counterclockwise.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Path/ellipse_angle.png" alt="" />

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## endingAngle

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The ending angle of the sector sweep.
The three o'clock direction is defined as `0`, increasing in the clockwise direction.
If `startingAngle` is less than `endingAngle`, the filled area spans from `startingAngle` to `endingAngle` clockwise; otherwise, counterclockwise.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## innerRadius

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

A ratio of inner radius to the outer radius.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

<p></p>

<div className="property-images">

<img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Path/ellispse_inner.png" alt="" />

</div>

</div>

<div className="property-item">

Value

<div className="value-description">

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

</div>

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
