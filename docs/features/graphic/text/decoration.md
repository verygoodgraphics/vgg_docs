---
title: Text Decoration Lines
sidebar_position: 4
hide_table_of_contents: true
---

## Underline
<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/text/text__decoration__underline.daruma'
  controlsConfig={[
    {
      label: 'Underline',
      type: 'Text Decoration Line',
      controlType: 'select',
      value: 1,
      valuePath: '$.frames[0].childObjects[0].defaultFontAttr.underline',
      options: [
        {
          label: 'Single line',
          value: 1
        },
        {
          label: 'Double line',
          value: 2
        },
        {
          label: 'None',
          value: 0
        },
      ]
    }
  ]}
/>

## Line Through
<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/text/text__decoration__linethrough.daruma'
  controlsConfig={[
    {
      label: 'Line Through',
      type: 'Text Decoration Line',
      controlType: 'switch',
      value: true,
      valuePath: '$.frames[0].childObjects[0].defaultFontAttr.linethrough',
    }
  ]}
/>

<br />
**Related Specs**
- [FontAttr](/specs/vectorgraphics/font-attr#underline)
