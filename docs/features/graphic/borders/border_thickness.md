---
title: Border Thickness
sidebar_position: 4
hide_table_of_contents: true
---

<DarumaPlayer
  src='/feature/border/border__thickness.daruma'
  controlsConfig={[
    {
      label:  'Border Thickness',
      type: 'Border Thickness',
      controlType: 'slider',
      value: 10,
      valuePath: '$.frames[0].childObjects[0].style.borders[0].thickness',
      frameName: 'Rectangle 1',
      min:0,
      max:100
    }
  ]}
/>

<br />
**Related Specs**
- [Border](/specs/vectorgraphics/border#thickness)
