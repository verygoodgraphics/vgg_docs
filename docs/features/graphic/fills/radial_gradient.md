---
title: Radial Gradient
sidebar_position: 2
hide_table_of_contents: true
---

## Content

<DarumaPlayer
  src='/feature/fill/fill__radial_gradient.daruma'
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
      max: 1,
      step: 0.01
    }
  ]}
/>

## Border

<DarumaPlayer
  src='/feature/border/border__fill__radial_gradient.daruma'
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
            "red": 0.7721517086029053,
            "green": 0.6028779149055481,
            "blue": 0.27428728342056274,
            "alpha": 1
          },
          "position": 0,
          "midPoint": 0.5
        },
        {
          "class": "gradientStop",
          "color": {
            "class": "color",
            "red": 0.21552734076976776,
            "green": 0.16428446769714355,
            "blue": 0.0648125484585762,
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
- [GradientRadial](/specs/vectorgraphics/gradient-radial)
