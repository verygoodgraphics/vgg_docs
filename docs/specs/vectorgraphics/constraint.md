---
title: Constraint
sidebar_class_name: show
---

<div className="section-badges">

<div class="badge type">
        <span class="label">Type</span>
        <span class="value">integer</span>
      </div>

<a href="#backlinks" class="badge backlinks">
          <span class="label">Backlinks</span>
          <span class="value">16</span>
        </a>

</div>

Horizontal and vertical layout constraints for the object relative to its parent container.
In the horizontal direction, `start` indicates the left, and `end` indicates the right.
In the vertical direction, `start` identifies the top, and `end` identifies the bottom.

<div className="property-item">

Value

<div className="value-description">

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`   | <div className="enum-description">Fix the `start` and `end` positions.<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Constraint/fix_start_fix_end.png" alt="" /></div></div>                                                                                                                                                                                                                                                                                                                                                                                 |
| `1`   | <div className="enum-description">Fix the `start` position and size.<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Constraint/fix_start_fix_size.png" alt="" /></div></div>                                                                                                                                                                                                                                                                                                                                                                                  |
| `2`   | <div className="enum-description">Fix the `start` position and apply scaling.&#xA;For example, let the parent container be `300` units wide, and the child object has an x-coordinate of `30` and a width of `120`. When the width of the parent container becomes `500`, the x-coordinate of the child object remains `30`, and the width becomes `(120 / (300 - 30)) * (500 - 30) = 208.89`.<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Constraint/fix_start_scale.png" alt="" /></div></div>                                                           |
| `3`   | <div className="enum-description">Fix the `end` position and size.<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Constraint/fix_end_fix_size.png" alt="" /></div></div>                                                                                                                                                                                                                                                                                                                                                                                      |
| `4`   | <div className="enum-description">Fix the `end` position and apply scaling.<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Constraint/fix_end_scale.png" alt="" /></div></div>                                                                                                                                                                                                                                                                                                                                                                                |
| `5`   | <div className="enum-description">Scale.&#xA;For example, let the parent container be `300` units wide, and the child object has an x-coordinate of `30` and a width of `120`. When the width of the parent container becomes `500`, the x-coordinate of the child object becomes `30 / 300 * 500 = 50`, and the width becomes `120 / 300 * 500 = 200`.<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Constraint/scale.png" alt="" /></div></div>                                                                                                            |
| `6`   | <div className="enum-description">Fix the center proportion and maintain a fixed size.&#xA;For example, let the parent container be `300` units wide, and the child object has an x-coordinate of `90` and a width of `120`. When the width of the parent container becomes `500`, the x-coordinate of the child object becomes `(90 + 120 / 2) / 300 * 500 - 120 / 2 = 190`, and the width remains `120`.<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Constraint/fix_center_fix_size.png" alt="" /></div></div>                                           |
| `7`   | <div className="enum-description">Keep the centerline distance between the child object and the parent container constant.&#xA;For example, let the parent container be `300` units wide, and the child object has an x-coordinate of `30` and a width of `120`. When the width of the parent container becomes `500`, the x-coordinate of the child object becomes `500 / 2 - (300 / 2 - (30 + 120 / 2)) - 120 / 2 = 130`, and the width remains `120`.<div className="enum-images"><img src="https://raw.githubusercontent.com/verygoodgraphics/resource/main/img/vector/Constraint/keep_centerline.png" alt="" /></div></div> |

</div>

</div>

<div id="backlinks" className="section-backlinks">

<div className="backlinks-title">Backlinks</div>

<ul className="backlinks-list">

<li className="backlink">
      <Link to='/specs/vectorgraphics/frame#horizontalconstraint'>Frame.horizontalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/frame#verticalconstraint'>Frame.verticalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/path#horizontalconstraint'>Path.horizontalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/path#verticalconstraint'>Path.verticalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/text#horizontalconstraint'>Text.horizontalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/text#verticalconstraint'>Text.verticalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/image#horizontalconstraint'>Image.horizontalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/image#verticalconstraint'>Image.verticalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/group#horizontalconstraint'>Group.horizontalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/group#verticalconstraint'>Group.verticalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-instance#horizontalconstraint'>SymbolInstance.horizontalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-instance#verticalconstraint'>SymbolInstance.verticalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-master#horizontalconstraint'>SymbolMaster.horizontalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/symbol-master#verticalconstraint'>SymbolMaster.verticalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/pattern-layer-def#horizontalconstraint'>PatternLayerDef.horizontalConstraint</Link>
      </li>

<li className="backlink">
      <Link to='/specs/vectorgraphics/pattern-layer-def#verticalconstraint'>PatternLayerDef.verticalConstraint</Link>
      </li>

</ul>

</div>
