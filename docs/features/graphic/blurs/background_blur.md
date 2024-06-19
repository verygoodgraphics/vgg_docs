---
title: Background Blur
sidebar_position: 3
hide_table_of_contents: true
---

<DarumaPlayer
  src='/feature/blur/blur__background_blur.daruma'
  controlsConfig={[
    {
      label:  'Background Blur',
      type: 'Background Blur',
      controlType: 'slider',
      value: 10,
      valuePath: '$.frames[0].childObjects[1].style.blurs[0].radius',
      frameName: 'Rectangle',
      min:0,
      max:100
    }
  ]}
/>

<br />
**Related Specs**
- [Blur](/specs/vectorgraphics/blur)
- [BlurType](/specs/vectorgraphics/blur-type)
