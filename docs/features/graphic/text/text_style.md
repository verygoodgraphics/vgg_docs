---
title: Text Style
sidebar_position: 0
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/text__daruma/text__line_height.daruma'
  controlsConfig={[
    {
      label:  'Size',
      type: 'Text Size',
      controlType: 'slider',
      value: 18,
      valuePath: '$.frames[0].childObjects[0].defaultFontAttr.size',
      min:10,
      max:80,
      step: 1
    },
    {
      label:  'Line Height',
      type: 'Text Line Height',
      controlType: 'slider',
      value: 1.9,
      valuePath: '$.frames[0].childObjects[0].defaultFontAttr.lineSpacingValue',
      min:0,
      max:20,
      step: 0.1
    },
    {
      label:  'Letter Spacing',
      type: 'Text Letter Spacing',
      controlType: 'slider',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].defaultFontAttr.letterSpacingValue',
      min:0,
      max:100,
      step: 1
    },

  ]}
/>

<br />
**Related Specs**
- [FontAttr](/specs/vectorgraphics/font-attr#size)
