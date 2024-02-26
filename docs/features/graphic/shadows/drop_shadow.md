---
title: Drop Shadows
sidebar_position: 0
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/shadow/shadow__drop_shadow.daruma'
  controlsConfig={[
    {
      label:  'X',
      type: 'Dropshadow X',
      controlType: 'slider',
      value: 10,
      valuePath: '$.frames[0].childObjects[0].style.shadows[0].offsetX',
      frameName: 'Rectangle',
      min:-50,
      max:50
    },
    {
      label:  'Y',
      type: 'Dropshadow Y',
      controlType: 'slider',
      value: -10,
      valuePath: '$.frames[0].childObjects[0].style.shadows[0].offsetY',
      frameName: 'Rectangle',
      min:-50,
      max:50
    },
    {
      label:  'Blur',
      type: 'Dropshadow Blur',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.shadows[0].blur',
      frameName: 'Rectangle',
      min:0,
      max:100
    },
    {
      label:  'Spread',
      type: 'Dropshadow Spread',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.shadows[0].spread',
      frameName: 'Rectangle',
      min:0,
      max:100
    }
  ]}
/>

<br />
**Related Specs**
- [Shadow](/specs/vectorgraphics/shadow)
