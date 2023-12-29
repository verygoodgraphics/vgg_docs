---
title: FontAttr
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">object</div>

</div>

The font attributes of a text fragment.

<div className="property-preview">

<div className="property-table">

| Property                                    | Type                                                                                       | Required                                            |
| :------------------------------------------ | :----------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [class](#class)                             | `string`                                                                                   | <span className="property-required">Required</span> |
| [length](#length)                           | `integer`                                                                                  | <span className="property-optional">Optional</span> |
| [borders](#borders)                         | <code>Array&lt;<a href="/specs/vectorgraphics/border">Border</a>&gt;</code>                | <span className="property-optional">Optional</span> |
| [fills](#fills)                             | <code>Array&lt;<a href="/specs/vectorgraphics/fill">Fill</a>&gt;</code>                    | <span className="property-optional">Optional</span> |
| [fillUseType](#fillusetype)                 | `integer`                                                                                  | <span className="property-optional">Optional</span> |
| [name](#name)                               | `string`                                                                                   | <span className="property-optional">Optional</span> |
| [subFamilyName](#subfamilyname)             | `string`                                                                                   | <span className="property-optional">Optional</span> |
| [postScript](#postscript)                   | `string`                                                                                   | <span className="property-optional">Optional</span> |
| [fontVariations](#fontvariations)           | <code>Array&lt;<a href="/specs/vectorgraphics/font-variation">FontVariation</a>&gt;</code> | <span className="property-optional">Optional</span> |
| [size](#size)                               | `number`                                                                                   | <span className="property-optional">Optional</span> |
| [letterSpacingValue](#letterspacingvalue)   | `number`                                                                                   | <span className="property-optional">Optional</span> |
| [letterSpacingUnit](#letterspacingunit)     | `integer`                                                                                  | <span className="property-optional">Optional</span> |
| [lineSpacingValue](#linespacingvalue)       | `number`                                                                                   | <span className="property-optional">Optional</span> |
| [lineSpacingUnit](#linespacingunit)         | `integer`                                                                                  | <span className="property-optional">Optional</span> |
| [underline](#underline)                     | `integer`                                                                                  | <span className="property-optional">Optional</span> |
| [linethrough](#linethrough)                 | `boolean`                                                                                  | <span className="property-optional">Optional</span> |
| [textCase](#textcase)                       | `integer`                                                                                  | <span className="property-optional">Optional</span> |
| [fontVariantCaps](#fontvariantcaps)         | `integer`                                                                                  | <span className="property-optional">Optional</span> |
| [baselineShift](#baselineshift)             | `number`                                                                                   | <span className="property-optional">Optional</span> |
| [fontVariantPosition](#fontvariantposition) | `integer`                                                                                  | <span className="property-optional">Optional</span> |
| [horizontalScale](#horizontalscale)         | `number`                                                                                   | <span className="property-optional">Optional</span> |
| [verticalScale](#verticalscale)             | `number`                                                                                   | <span className="property-optional">Optional</span> |
| [rotate](#rotate)                           | `number`                                                                                   | <span className="property-optional">Optional</span> |
| [textParagraph](#textparagraph)             | [`TextParagraph`](/specs/vectorgraphics/text-paragraph)                                    | <span className="property-optional">Optional</span> |

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
"fontAttr"
```

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## length

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The number of characters(UTF-8) that these attributes apply to.
If this property is missing, it means these attributes apply to all remaining characters in the text.
**Note**:
If a UTF-8 character is `4` bytes, its length counts as `2`.
If a UTF-8 character is `1 ~ 3` bytes, its length counts as `1`.

</div>

<div className="property-item">

Type

`integer`

</div>

</div>

<div className="property">

<div className="property-heading">

## borders

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

A list of the character's border styles.
Priority: The `borders` of the text fragment > the `borders` in `defaultAttr` of the text > the `borders` in the text object's `style`.

</div>

<div className="property-item">

Type

<code>Array&lt;<a href="/specs/vectorgraphics/border">Border</a>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## fills

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

A list of the character's fill effects. The priority of `fills` is listed in `fillUseType`.

</div>

<div className="property-item">

Type

<code>Array&lt;<a href="/specs/vectorgraphics/fill">Fill</a>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## fillUseType

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The priority of `fills`.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                                                                                                                                                                                                                                   |
| :---- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">The `fills` of the text fragment > the `fills` in `defaultAttr` of the text > the `fills` in the text object's `style`. (Default value)</div>                                                                                                               |
| `1`   | <div className="enum-description">The corresponding property of the object takes precedence over `fills`. When `style.fills` and `fills` each have only one valid solid color object, the opacity of the two solid color objects is combined into the `style.fills` solid color object.</div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## name

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Common name of the font.
The font name may contain subfamily, in which case the `subFamilyName` will not appear.
If this property does not exist or is empty, the application can fall back to using its default font name.

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## subFamilyName

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Subfamily name or font type.
The value may be empty.

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## postScript

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The PostScript name of the font.
The value may be empty.

</div>

<div className="property-item">

Type

`string`

</div>

</div>

<div className="property">

<div className="property-heading">

## fontVariations

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

A list of font variations.

</div>

<div className="property-item">

Type

<code>Array&lt;<a href="/specs/vectorgraphics/font-variation">FontVariation</a>&gt;</code>

</div>

</div>

<div className="property">

<div className="property-heading">

## size

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Font size.
Default value is `1`.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## letterSpacingValue

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Text character spacing value (can be negative).
Must be used together with `letterSpacingUnit`.
Default value is `0`.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## letterSpacingUnit

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The unit of `letterSpacingValue` value.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                                                     |
| :---- | :-------------------------------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">pixel (default value)</div>                                                   |
| `1`   | <div className="enum-description">percent. Final pixel value equals to `size * letterSpacingValue / 100`.</div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## lineSpacingValue

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The spacing value of the text lines.
Must be used together with `lineSpacingUnit`.
Default value is `0`.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## lineSpacingUnit

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The unit of `lineSpacingValue` value.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                                                          |
| :---- | :------------------------------------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">pixel (default value)</div>                                                        |
| `1`   | <div className="enum-description">percent. Final pixel value equals to `size * lineSpacingValue * 1.25 / 100`.</div> |
| `2`   | <div className="enum-description">raw. Final pixel value equals to `size * lineSpacingValue`.</div>                  |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## underline

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The underline type of the text.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                  |
| :---- | :----------------------------------------------------------- |
| `0`   | <div className="enum-description">none (default value)</div> |
| `1`   | <div className="enum-description">single line</div>          |
| `2`   | <div className="enum-description">double line</div>          |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## linethrough

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Whether the text has a line through.
Default value is `false`.

</div>

<div className="property-item">

Type

`boolean`

</div>

</div>

<div className="property">

<div className="property-heading">

## textCase

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The type of text case.
**Note**:
`textCase` and `fontVariantCaps` are mutually exclusive. If either item is nonzero, you can ignore the value of the other, as they will not be nonzero at the same time.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                        |
| :---- | :----------------------------------------------------------------- |
| `0`   | <div className="enum-description">do nothing (default value)</div> |
| `1`   | <div className="enum-description">uppercase</div>                  |
| `2`   | <div className="enum-description">lowercase</div>                  |
| `3`   | <div className="enum-description">title case</div>                 |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## fontVariantCaps

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The type of small caps.
**Note**:
`textCase` and `fontVariantCaps` are mutually exclusive. If either item is nonzero, you can ignore the value of the other, as they will not be nonzero at the same time.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                              |
| :---- | :--------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">do nothing (default value)</div>                       |
| `1`   | <div className="enum-description">small caps</div>                                       |
| `2`   | <div className="enum-description">force small caps, including uppercase characters</div> |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## baselineShift

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Vertical offset of the text baseline.
Default value is `0`.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## fontVariantPosition

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The position of the text characters.

</div>

<div className="property-item">

Type

`integer`

</div>

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                    |
| :---- | :------------------------------------------------------------- |
| `0`   | <div className="enum-description">normal (default value)</div> |
| `1`   | <div className="enum-description">superscript</div>            |
| `2`   | <div className="enum-description">subscript</div>              |

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## horizontalScale

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Scale the text characters horizontally.
Default value is `1`.
Value examples:
0.5:  50%
1:    not scale
1.75: 175%
2:    200%

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## verticalScale

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Scale the text characters vertically.
Default value is `1`.
Refer to `horizontalScale` for value examples.

</div>

<div className="property-item">

Type

`number`

</div>

</div>

<div className="property">

<div className="property-heading">

## rotate

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

Rotation angle of the text characters.
Default value is `0`.

</div>

<div className="property-item">

Type

`number`

</div>

<div className="property-item">

Value

<div className="value-description">

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`

</div>

</div>

</div>

<div className="property">

<div className="property-heading">

## textParagraph

<span className="property-optional">Optional</span>

</div>

<div className="property-item">

Description

The properties of the text paragraph, which are consistent across the same text paragraph.

</div>

<div className="property-item">

Type

[`TextParagraph`](/specs/vectorgraphics/text-paragraph)

</div>

</div>
