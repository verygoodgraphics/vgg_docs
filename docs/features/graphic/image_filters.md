---
title: Image Filters
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/image_filters__daruma/image_filters__exposure.daruma'
  controlsConfig={[
    {
      label:  'Exposure',
      type: 'Image Filter Exposure',
      controlType: 'slider',
      value: 0.23,
      valuePath: '$.frames[0].childObjects[0].style.fills[0].pattern.instance.imageFilters.exposure',
      min:0,
      max:1,
      step: 0.01
    },
    {
      label:  'Contrast',
      type: 'Image Filter Contrast',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.fills[0].pattern.instance.imageFilters.contrast',
      min:0,
      max:1,
      step: 0.01
    },
    {
      label:  'Saturation',
      type: 'Image Filter Saturation',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.fills[0].pattern.instance.imageFilters.saturation',
      min:0,
      max:1,
      step: 0.01
    },
    {
      label:  'Temperature',
      type: 'Image Filter Temperature',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.fills[0].pattern.instance.imageFilters.temperature',
      min:0,
      max:1,
      step: 0.01
    },
    /**
    {
      label:  'Tint',
      type: 'Image Filter Tint',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.fills[0].pattern.instance.imageFilters.tint',
      min:0,
      max:1,
      step: 0.01
    },
    {
      label:  'Highlights',
      type: 'Image Filter Highlights',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.fills[0].pattern.instance.imageFilters.highlights',
      min:0,
      max:1,
      step: 0.01
    },
    {
      label:  'Shadows',
      type: 'Image Filter Shadows',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.fills[0].pattern.instance.imageFilters.shadows',
      min:0,
      max:1,
      step: 0.01
    },
    {
      label:  'Hue',
      type: 'Image Filter Hue',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].style.fills[0].pattern.instance.imageFilters.hue',
      min:0,
      max:1,
      step: 0.01
    }
    */
  ]}
/>

<br />
**Related Specs**
- [ImageFilters](/specs/vectorgraphics/image-filters)
