---
title: ReferencedStyle
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



<div className="property-preview">

<div className="property-table">

| Property                            | Type                                                                         | Required                                            |
| :---------------------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                     | `string`                                                                     | <span className="property-required">Required</span> |
| [id](#id)                           | `string`                                                                     | <span className="property-required">Required</span> |
| [style](#style)                     | [`Style`](/specs/vectorgraphics/style)                                       | <span className="property-required">Required</span> |
| [contextSettings](#contextsettings) | [`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings) | <span className="property-optional">Optional</span> |
| [fontAttr](#fontattr)               | [`FontAttr`](/specs/vectorgraphics/font-attr)                                | <span className="property-optional">Optional</span> |

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
"referencedStyle"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## id

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

ID of the referenced style, globally unique.

</div>

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## style

<span className="property-required">Required</span>

</div>

<div className="property-item">

Description

<div>

The style attributes.

</div>

</div>

<div className="property-item">

Type

[`Style`](/specs/vectorgraphics/style)

</div>

</div>

<div className="property">

<div className="property-heading">

## contextSettings

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

The opacity and blending-related configurations.

</div>

</div>

<div className="property-item">

Type

[`GraphicsContextSettings`](/specs/vectorgraphics/graphics-context-settings)

</div>

</div>

<div className="property">

<div className="property-heading">

## fontAttr

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

<div>

Font attributes only affect for text objects.

</div>

</div>

<div className="property-item">

Type

[`FontAttr`](/specs/vectorgraphics/font-attr)

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/overview#references'>Overview.references</Link>
      </li>

</ul>

</div>
