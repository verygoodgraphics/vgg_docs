---
title: Angular Gradient
sidebar_position: 3
hide_table_of_contents: true
---

## Content

<DarumaPlayer
  src='/feature/fill/fill__angular_gradient.daruma'
  controlsConfig={[
    {
      label: 'Angular Gradient',
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
      lineNumbers: [153, 165],
      lineNumberMatchType: 'exact',
      min: 0,
      max: 1,
      step: 0.01
    }
  ]}
/>

## Border

<DarumaPlayer
  src='/feature/border/border__fill__angular_gradient.daruma'
  controlsConfig={[
    {
      label: 'Angular Gradient',
      type: 'Gradient',
      controlType: 'gradient-slider',
      value: [
        {
          "class": "gradientStop",
          "color": {
            "class": "color",
            "red": 0.9482747316360474,
            "green": 0.8993256092071533,
            "blue": 0.8043048977851868,
            "alpha": 1
          },
          "position": 0,
          "midPoint": 0.5
        },
        {
          "class": "gradientStop",
          "color": {
            "class": "color",
            "red": 0.3822265565395355,
            "green": 0.26946383714675903,
            "blue": 0.050571609288454056,
            "alpha": 1
          },
          "position": 1,
          "midPoint": 0.5
        }
      ],
      valuePath: '$.frames[0].childObjects[0].style.borders[0].gradient.instance.stops',
      lineNumbers: [151, 163],
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
- [GradientAngular](/specs/vectorgraphics/gradient-angular)
