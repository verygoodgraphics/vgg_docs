---
title: GridItem
sidebar_class_name: show
---

<div className="section-badges">

<div class="badge type">
        <span class="label">Type</span>
        <span class="value">object</span>
      </div>

<a href="#backlinks" class="badge backlinks">
          <span class="label">Backlinks</span>
          <span class="value">1</span>
        </a>

</div>

This property refers to the individual grid item or cell in a grid layout and its configurable properties.

<div className="property-preview">

<div className="property-table">

| Property                    | Type                                         | Required                                            |
| :-------------------------- | :------------------------------------------- | :-------------------------------------------------- |
| [class](#class)             | `string`                                     | <span className="property-required">Required</span> |
| [itemPos](#itempos)         | [`GridItemPos`](/specs/layout/grid-item-pos) | <span className="property-required">Required</span> |
| [rowSpan](#rowspan)         | `integer`                                    | <span className="property-required">Required</span> |
| [columnSpan](#columnspan)   | `integer`                                    | <span className="property-required">Required</span> |
| [position](#position)       | [`Position`](/specs/layout/position)         | <span className="property-required">Required</span> |
| [rowAlign](#rowalign)       | [`Alignment`](/specs/layout/alignment)       | <span className="property-required">Required</span> |
| [columnAlign](#columnalign) | [`Alignment`](/specs/layout/alignment)       | <span className="property-required">Required</span> |

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
"gridItem"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## itemPos

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`GridItemPos`](/specs/layout/grid-item-pos)

</div>

</div>

<div className="property">

<div className="property-heading">

## rowSpan

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The number of rows occupied by the element.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**minimum**: the value of this number must greater than or equal to: `1`

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## columnSpan

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

The number of columns occupied by the element.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**minimum**: the value of this number must greater than or equal to: `1`

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## position

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

no description

</div>

<div className="property-item">

Type

[`Position`](/specs/layout/position)

</div>

</div>

<div className="property">

<div className="property-heading">

## rowAlign

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Valid when the position type is relative or sticky, specifies how the element's row direction is aligned to it.

</div>

<div className="property-item">

Type

[`Alignment`](/specs/layout/alignment)

</div>

</div>

<div className="property">

<div className="property-heading">

## columnAlign

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

Valid when the position type is relative or sticky, specifies how the element's column direction is aligned to it.

</div>

<div className="property-item">

Type

[`Alignment`](/specs/layout/alignment)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/layout/object#iteminlayout'>Object.itemInLayout</Link>
      </li>

</ul>

</div>
