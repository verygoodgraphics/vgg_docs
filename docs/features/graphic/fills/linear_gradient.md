---
title: Linear Gradient
sidebar_position: 1
hide_table_of_contents: true
---

## Content

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/fill/fill__linear_gradient.daruma'
  controlsConfig={[
    {
      label:  'Linear Gradient',
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
            "alpha": 1
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
            "alpha": 0
          },
          "position": 1,
          "midPoint": 0.5
        }
      ],
      valuePath: '$.frames[0].childObjects[0].style.fills[0].gradient.instance.stops',
      frameName: 'Rectangle',
      lineNumbers: [148, 160],
      lineNumberMatchType: 'exact',
      min: 0,
      max: 1,
      step: 0.01
    }
  ]}
/>

## Border

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/border/border__fill__linear_gradient.daruma'
  controlsConfig={[
    {
      label:  'Linear Gradient',
      type: 'Gradient',
      controlType: 'gradient-slider',
      value: [
        {
          "class": "gradientStop",
          "color": {
            "class": "color",
            "red": 0.9326009154319763,
            "green": 0.9122051000595093,
            "blue": 0.8726133108139038,
            "alpha": 1
          },
          "position": 0,
          "midPoint": 0.5
        },
        {
          "class": "gradientStop",
          "color": {
            "class": "color",
            "red": 0.22185872495174408,
            "green": 0.15399809181690216,
            "blue": 0.022268924862146378,
            "alpha": 1
          },
          "position": 1,
          "midPoint": 0.5
        }
      ],
      valuePath: '$.frames[0].childObjects[0].style.borders[0].gradient.instance.stops',
      frameName: 'Rectangle',
      lineNumbers: [146, 158],
      lineNumberMatchType: 'exact',
      min: 0,
      max: 1,
      step: 0.01
    }
  ]}
/>

<br />
**Related Specs**
- [Fill](/specs/vectorgraphics/fill)
- [Border](/specs/vectorgraphics/border)
- [FillType](/specs/vectorgraphics/fill-type)
- [GradientLinear](/specs/vectorgraphics/gradient-linear)
