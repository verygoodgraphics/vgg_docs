---
title: Variable Font
sidebar_position: 6
hide_table_of_contents: true
---

## Variable Font Weight & Width

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/text__daruma/text__variable_font__width.daruma'
  controlsConfig={[
    {
      label:  'Weight',
      type: 'Variable Font Weight',
      controlType: 'slider',
      value: 816.25,
      valuePath: '$.frames[0].childObjects[0].defaultFontAttr.fontVariations[0].value',
      min:10,
      max:999,
      step: 0.01
    },
    {
      label:  'Width',
      type: 'Variable Font Width',
      controlType: 'slider',
      value: 116,
      valuePath: '$.frames[0].childObjects[0].defaultFontAttr.fontVariations[1].value',
      min:0,
      max:200,
      step: 0.1
    },

  ]}
/>

## Variable Font Slant

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/text__daruma/text__variable_font__slant.daruma'
  controlsConfig={[
    {
      label:  'Slant',
      type: 'Variable Font Slant',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].defaultFontAttr.fontVariations[1].value',
      min:-10,
      max:0,
      step: 0.01
    },

  ]}
/>

<br />
**Related Specs**
- [FontAttr](/specs/vectorgraphics/font-attr#fontvariations)
- [FontVariation](/specs/vectorgraphics/font-variation)
