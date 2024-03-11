---
title: BlendMode
sidebar_class_name: show
---

<div className="section-badges">

<div className="badge type">
        <span className="label">Type</span>
        <span className="value">integer</span>
      </div>

<a href="#backlinks" className="badge backlinks">
          <span className="label">Backlinks</span>
          <span className="value">1</span>
        </a>

</div>

Blend mode of the object.
In the formula below:
`r` means result.
`s` means source.
`d` means destination.
`sa` means source alpha.
`da` means destination alpha.
`rc` means result RGB.
`ra` means result alpha.

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                                                     |
| :---- | :-------------------------------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">normal: r = s + (1 - sa) \* d</div>                                           |
| `1`   | <div className="enum-description">darken: rc = s + d - max(s \* da, d \* sa), ra = normal</div>                 |
| `2`   | <div className="enum-description">multiply: r = s \* (1 - da) + d \* (1 - sa) + s \* d</div>                    |
| `3`   | <div className="enum-description">color burn: darken destination to reflect source</div>                        |
| `4`   | <div className="enum-description">lighten: rc = s + d - min(s \* da, d \* sa), ra = normal</div>                |
| `5`   | <div className="enum-description">screen: r = s + d - s \* d</div>                                              |
| `6`   | <div className="enum-description">color dodge: brighten destination to reflect source</div>                     |
| `7`   | <div className="enum-description">overlay: multiply or screen, depending on destination</div>                   |
| `8`   | <div className="enum-description">soft light: lighten or darken, depending on source</div>                      |
| `9`   | <div className="enum-description">hard light: multiply or screen, depending on source</div>                     |
| `10`  | <div className="enum-description">difference: rc = s + d - 2 \* (min(s \* da, d \* sa)), ra = normal</div>      |
| `11`  | <div className="enum-description">exclusion: rc = s + d - two(s \* d), ra = normal</div>                        |
| `12`  | <div className="enum-description">hue: hue of source with saturation and luminosity of destination</div>        |
| `13`  | <div className="enum-description">saturation: saturation of source with hue and luminosity of destination</div> |
| `14`  | <div className="enum-description">color: hue and saturation of source with luminosity of destination</div>      |
| `15`  | <div className="enum-description">luminosity: luminosity of source with hue and saturation of destination</div> |
| `16`  | <div className="enum-description">plus darker</div>                                                             |
| `17`  | <div className="enum-description">plus lighter</div>                                                            |
| `27`  | <div className="enum-description">pass through: ignore now layer</div>                                          |

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title"><h2>Backlinks</h2></div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/graphics-context-settings#blendmode'>GraphicsContextSettings.blendMode</Link>
      </li>

</ul>

</div>
