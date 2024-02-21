---
title: Line Dash
sidebar_position: 0
hide_table_of_contents: true
---

<DarumaPlayer 
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/border__daruma/border__line_dash.daruma'
  controlsConfig={[
    {
      label:  'Thickness',
      type: 'Line Dash Thickness',
      controlType: 'slider',
      value: 10,
      valuePath: '$.frames[0].childObjects[0].style.borders[0].thickness',
      frameName: 'Rectangle 1',
      min:0,
      max:100
    }
  ]}
/>

<br />
**Related Specs**
- [Border](/specs/vectorgraphics/border#dashedpattern)
