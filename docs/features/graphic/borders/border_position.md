---
title: Border Position
sidebar_position: 3
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/border/border__position__center.daruma'
  controlsConfig={[
    {
      label:  'Border Position',
      type: 'Border Position',
      controlType: 'select',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.borders[0].position',
      lineNumber: 184,
      frameName: 'Rectangle 1',
      options: [
        {
          label: 'Center',
          value: 0
        },
        {
          label: 'Inside',
          value: 1
        },
        {
          label: 'Outside',
          value: 2
        },
      ]
    }
  ]}
/>

<br />
**Related Specs**
- [Border](/specs/vectorgraphics/border#position)
- [BorderPosition](/specs/vectorgraphics/border-position)
