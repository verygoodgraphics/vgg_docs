---
title: Radius
sidebar_position: 4
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/geometry__daruma/geometry__radius.daruma'
  controlsConfig={[
    {
      label: 'Point Radius 1',
      type: 'Radius',
      controlType: 'slider',
      value: 10,
      valuePath: '$.frames[0].childObjects[0].shape.subshapes[0].subGeometry.points[1].radius',
      lineNumber: 192,
      lineNumberMatchType: 'exact',
      min:0,
      max:100,
      step:1
    },
    {
      label: 'Point Radius 2',
      type: 'Radius',
      controlType: 'slider',
      value: 10,
      valuePath: '$.frames[0].childObjects[0].shape.subshapes[0].subGeometry.points[3].radius',
      lineNumber: 208,
      lineNumberMatchType: 'exact',
      min:0,
      max:100,
      step:1
    }
  ]}
/>

<br />
**Related Specs**
- [PointAttr](/specs/vectorgraphics/point-attr)
