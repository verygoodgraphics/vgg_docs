---
title: Alignment
sidebar_position: 5
hide_table_of_contents: true
---

## Horizontal Alignment

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/text__daruma/text__horizontal_alignment__left.daruma'
  controlsConfig={[
    {
      label: 'Horizontal Alignment',
      type: 'Alignment',
      controlType: 'select',
      value: [
            0,
          ],
      valuePath: '$.frames[0].childObjects[0].horizontalAlignment',
      options: [
        {
          label: 'Left',
          value: [
            0,
          ]
        },
        {
          label: 'Right',
          value: [
            1
          ]
        },
        {
          label: 'Center',
          value: [
            2
          ]
        },
        {
          label: 'Justified',
          value: [
            3
          ]
        },
      ]
    }
  ]}
/>
 
## Vertical Alignment

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/text__daruma/text__vertical_alignment__top.daruma'
  controlsConfig={[
    {
      label: 'Vertical Alignment',
      type: 'Alignment',
      controlType: 'select',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].verticalAlignment',
      options: [
        {
          label: 'Top',
          value: 0
        },
        {
          label: 'Center',
          value: 1
        },
        {
          label: 'Down',
          value: 2
        },
      ]
    }
  ]}
/>
 
<br />
**Related Specs**
- [Text](/specs/vectorgraphics/text#verticalalignment)
