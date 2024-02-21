---
title: Miter Limit
sidebar_position: 5
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/border__daruma/border__miter_limit.daruma'
  controlsConfig={[
    {
      label: 'Miter Limit',
      type: 'Miter Limit',
      controlType: 'slider',
      value: 1,
      valuePath: '$.frames[0].childObjects[0].style.borders[0].miterLimit',
      frameName: 'Rectangle 1',
      min:0,
      max:100
    }
  ]}
/>

<br />
**Related Specs**
- [Border](/specs/vectorgraphics/border#miterlimit)
