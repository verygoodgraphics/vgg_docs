---
title: Miter Limit
sidebar_position: 5
hide_table_of_contents: true
---

<DarumaPlayer
  src='/feature/border/border__miter_limit.daruma'
  controlsConfig={[
    {
      label: 'Miter Limit',
      type: 'Miter Limit',
      controlType: 'slider',
      value: 1,
      valuePath: '$.frames[0].childObjects[0].style.borders[0].miterLimit',
      min:0,
      max:2,
      step:0.01
    }
  ]}
/>

<br />
**Related Specs**
- [Border](/specs/vectorgraphics/border#miterlimit)
