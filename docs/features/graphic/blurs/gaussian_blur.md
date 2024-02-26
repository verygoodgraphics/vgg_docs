---
title: Gaussian Blur
sidebar_position: 0
hide_table_of_contents: true
---

<DarumaPlayer src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/blur/blur__gaussian_blur.daruma' controlsConfig={[
  {
    label:  'Gaussian Blur',
    type: 'Gaussian Blur',
    controlType: 'slider',
    value: 10,
    valuePath: '$.frames[0].childObjects[0].style.blurs[0].radius',
    frameName: 'Rectangle',
    min:0,
    max:100
  }
]} />

<br />
**Related Specs**
- [Blur](/specs/vectorgraphics/blur)
- [BlurType](/specs/vectorgraphics/blur-type)
