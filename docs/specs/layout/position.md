---
title: Position
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

<div className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<div className="backlink">
      <Link to='/specs/layout/flexbox-item#position'>FlexboxItem.properties.position</Link>
      </div>

<div className="backlink">
      <Link to='/specs/layout/grid-item#position'>GridItem.properties.position</Link>
      </div>

</div>

This property is used to control the positioning of an element within the document flow. The top, right, bottom, and left properties determine the final location of positioned elements.

<div className="property-preview">

<div className="property-table">

| Property        | Type      | Required                                            |
| :-------------- | :-------- | :-------------------------------------------------- |
| [class](#class) | `string`  | <span className="property-required">Required</span> |
| [value](#value) | `integer` | <span className="property-required">Required</span> |

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
"position"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## value

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

relative:  The element is positioned according to the normal flow of the document,  and then offset relative to itself based on the values of top, right, bottom, and left.  The offset does not affect the position of any other elements;  thus, the space given for the element in the page layout is the same as if position were static.
absolute: The element is removed from the normal document flow,  and no space is created for the element in the page layout.  It is positioned relative to its closest positioned ancestor, if any;  otherwise, it is placed relative to the initial containing block.  Its final position is determined by the values of top, right, bottom, and left.
fixed: The element is removed from the normal document flow,  and no space is created for the element in the page layout.  It is positioned relative to the initial containing block established by the viewport,  except when one of its ancestors has a transform, perspective,  or filter property set to something other than none (see the CSS Transforms Spec),  or the will-change property is set to transform, in which case that ancestor behaves as the containing block.  (Note that there are browser inconsistencies with perspective and filter contributing to containing block formation.)  Its final position is determined by the values of top, right, bottom, and left.
sticky: The element is positioned according to the normal flow of the document,  and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor),  including table-related elements, based on the values of top, right, bottom, and left.  The offset does not affect the position of any other elements.

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
| `1`   | <div className="enum-description">relative</div> |
| `2`   | <div className="enum-description">absolute</div> |
| `3`   | <div className="enum-description">fixed</div>    |
| `4`   | <div className="enum-description">sticky</div>   |

</div>

</div>

</div>
