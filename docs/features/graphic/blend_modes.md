---
title: Blend Modes
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/blend_mode__daruma/blend_mode__normal.daruma'
  controlsConfig={[
    {
      label:  'Blend Mode',
      type: 'Blend Mode',
      controlType: 'select',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].contextSettings.blendMode',
      frameName: 'Rectangle 1',
      options: [
        {
          label: 'Normal',
          value: 0
        },
        {
          label: 'Darken',
          value: 1
        },
        {
          label: 'Multiply',
          value: 2
        },
        {
          label: 'Color Burn',
          value: 3
        },
        {
          label: 'Lighten',
          value: 4
        },
        {
          label: 'Screen',
          value: 5
        },
        {
          label: 'Color Dodge',
          value: 6
        },
        {
          label: 'Overlay',
          value: 7
        },
        {
          label: 'Soft Light',
          value: 8
        },
        {
          label: 'Hard Light',
          value: 9
        },
        {
          label: 'Difference',
          value: 10
        },
        {
          label: 'Exclusion',
          value: 11
        },
        {
          label: 'Hue',
          value: 12
        },
        {
          label: 'Saturation',
          value: 13
        },
        {
          label: 'Color',
          value: 14
        },
        {
          label: 'Luminosity',
          value: 15
        },
        {
          label: 'Plus Darker',
          value: 16
        },
        {
          label: 'Plus Lighter',
          value: 17
        },
        {
          label: 'Pass Through',
          value: 18
        }
      ],
      min:0,
      max:18
    }
  ]}
 />
 
<br />
**Related Specs**
- [BlendMode](/specs/vectorgraphics/blend-mode)
