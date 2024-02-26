---
title: Radial Gradient
sidebar_position: 2
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/fill/fill__radial_gradient.daruma'
  controlsConfig={[
    {
      label:  'Radial Gradient',
      type: 'Gradient',
      controlType: 'gradient-slider',
      value: [
        {
          "class": "gradientStop",
          "color": {
            "class": "color",
            "red": 0,
            "green": 0.5372549295425415,
            "blue": 0.8313725590705872,
            "alpha": 0
          },
          "position": 0,
          "midPoint": 0.5
        },
        {
          "class": "gradientStop",
          "color": {
            "class": "color",
            "red": 0,
            "green": 0.5372549295425415,
            "blue": 0.8313725590705872,
            "alpha": 1
          },
          "position": 1,
          "midPoint": 0.5
        }
      ],
      valuePath: '$.frames[0].childObjects[0].style.fills[0].gradient.instance.stops',
      lineNumbers: [153, 165],
      lineNumberMatchType: 'exact',
      min: 0,
      max: 1
      ,step: 0.01
    }
  ]}
/>

<br />
**Related Specs**
- [Fill](/specs/vectorgraphics/fill)
- [FillType](/specs/vectorgraphics/fill-type)
- [GradientRadial](/specs/vectorgraphics/gradient-radial)
