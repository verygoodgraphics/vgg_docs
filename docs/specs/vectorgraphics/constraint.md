---
title: Constraint
sidebar_class_name: show
---

<div className="section-type">

<div className="badge-type">integer</div>

</div>

Horizontal and vertical layout constraints for the object relative to its parent container.
In the horizontal direction, `start` indicates the left, and `end` indicates the right.
In the vertical direction, `start` identifies the top, and `end` identifies the bottom.

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">Fix the `start` and `end` positions.</div>                                                                                                                                                                                                                                                                                                                                                                               |
| `1`   | <div className="enum-description">Fix the `start` position and size.</div>                                                                                                                                                                                                                                                                                                                                                                                 |
| `2`   | <div className="enum-description">Fix the `start` position and apply scaling.&#xA;For example, let the parent container be `200` units wide, and the child object has an x-coordinate of `60` and a width of `50`. When the width of the parent container becomes `300`, the x-coordinate of the child object remains `60`, and the width becomes `(50 / (200 - 60)) * (300 - 60) = 85.71`.</div>                                                          |
| `3`   | <div className="enum-description">Fix the `end` position and size.</div>                                                                                                                                                                                                                                                                                                                                                                                   |
| `4`   | <div className="enum-description">Fix the `end` position and apply scaling.</div>                                                                                                                                                                                                                                                                                                                                                                          |
| `5`   | <div className="enum-description">Scale.&#xA;For example, let the parent container be `200` units wide, and the child object has an x-coordinate of `60` and a width of `50`. When the width of the parent container becomes `300`, the x-coordinate of the child object becomes `60 / 200 * 300 = 90`, and the width becomes `50 / 200 * 300 = 75`.</div>                                                                                                 |
| `6`   | <div className="enum-description">Fix the center proportion and maintain a fixed size.&#xA;For example, let the parent container be `200` units wide, and the child object has an x-coordinate of `60` and a width of `50`. When the width of the parent container becomes `300`, the x-coordinate of the child object becomes `(60 + 50 / 2) / 200 * 300 - 50 / 2 = 102.5`, and the width remains `50`.</div>                                             |
| `7`   | <div className="enum-description">Keep the centerline distance between the child object and the parent container constant.&#xA;For example, let the parent container be `200` units wide, and the child object has an x-coordinate of `60` and a width of `50`. When the width of the parent container becomes `300`, the x-coordinate of the child object becomes `300 / 2 - (200 / 2 - (60 + 50 / 2)) - 50 / 2 = 110`, and the width remains `50`.</div> |

</div>

</div>
