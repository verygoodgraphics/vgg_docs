---
title: Line Dash
sidebar_position: 0
hide_table_of_contents: true
---

<DarumaPlayer 
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/border__daruma/border__line_dash.daruma'
  controlsConfig={[
    {
      label: 'Dash',
      type: 'Line Dash',
      controlType: 'multi-slider',
      value: [20, 20],
      valuePath: '$.frames[0].childObjects[0].style.borders[0].dashedPattern',
      valueLabels: ['Dash', 'Gap'],
      min:0,
      max:100
    },
    {
      label: 'Offset',
      type: 'Line Dash',
      controlType: 'slider',
      value:0,
      valuePath: '$.frames[0].childObjects[0].style.borders[0].dashedOffset',
      min:-50,
      max:50
    },
  ]}
/>

<br />
**Related Specs**
- [Border](/specs/vectorgraphics/border#dashedpattern)
