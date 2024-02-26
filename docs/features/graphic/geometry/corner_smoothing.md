---
title: Corner Smoothing
sidebar_position: 5
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/geometry/geometry__corner_smoothing.daruma'
  controlsConfig={[
    {
      label: 'Corner Smoothing',
      type: 'Corner Smoothing',
      controlType: 'slider',
      value: 10,
      valuePath: '$.frames[0].childObjects[1].cornerSmoothing',
      min:0,
      max:1,
      step:0.01
    }
  ]}
/>

<br />
**Related Specs**
- [Path](/specs/vectorgraphics/path#cornersmoothing)
