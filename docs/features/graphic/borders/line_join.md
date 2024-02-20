---
title: Line Join
sidebar_position: 2
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/border__daruma/border__line_join__miter.daruma'
  controlsConfig={[
    {
      label:  'Line Join',
      type: 'Line Join',
      controlType: 'select',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.borders[0].lineJoinStyle',
      frameName: 'Rectangle 1',
      options: [
        {
          label: 'Miter',
          value: 0
        },
        {
          label: 'Round',
          value: 1
        },
        {
          label: 'Bevel',
          value: 2
        },
      ]
    }
  ]}
/>
 
<br />
**Related Specs**
- [Border](/specs/vectorgraphics/border#linejoinstyle)
- [LineJoinStyle](/specs/vectorgraphics/line-join-style)
