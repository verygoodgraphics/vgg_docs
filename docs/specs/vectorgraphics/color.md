---
title: Color
sidebar_class_name: show
---

<div className="section-badges">

<div className="badge type">
        <span className="label">Type</span>
        <span className="value">object</span>
      </div>

<a href="#backlinks" className="badge backlinks">
          <span className="label">Backlinks</span>
          <span className="value">5</span>
        </a>

</div>

A RGBA color value.

<div className="property-preview">

<div className="property-table">

| Property        | Type                                                  | Required                                            |
| :-------------- | :---------------------------------------------------- | :-------------------------------------------------- |
| [class](#class) | `string`                                              | <span className="property-required">Required</span> |
| [alpha](#alpha) | [`UnitInterval`](/specs/vectorgraphics/unit-interval) | <span className="property-required">Required</span> |
| [red](#red)     | [`UnitInterval`](/specs/vectorgraphics/unit-interval) | <span className="property-required">Required</span> |
| [green](#green) | [`UnitInterval`](/specs/vectorgraphics/unit-interval) | <span className="property-required">Required</span> |
| [blue](#blue)   | [`UnitInterval`](/specs/vectorgraphics/unit-interval) | <span className="property-required">Required</span> |

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
"color"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## alpha

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The opacity of the object. `0` represents transparent, and `1` represents opaque.

</div>

<div className="property-item">

Type

[`UnitInterval`](/specs/vectorgraphics/unit-interval)

</div>

</div>

<div className="property">

<div className="property-heading">

## red

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`UnitInterval`](/specs/vectorgraphics/unit-interval)

</div>

</div>

<div className="property">

<div className="property-heading">

## green

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`UnitInterval`](/specs/vectorgraphics/unit-interval)

</div>

</div>

<div className="property">

<div className="property-heading">

## blue

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`UnitInterval`](/specs/vectorgraphics/unit-interval)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/frame#backgroundcolor'>Frame.backgroundColor</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/border#color'>Border.color</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/gradient-stop#color'>GradientStop.color</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/fill#color'>Fill.color</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/shadow#color'>Shadow.color</Link>
      </li>

</ul>

</div>
