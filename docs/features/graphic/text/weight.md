---
title: Weight
sidebar_position: 1
hide_table_of_contents: true
---

<DarumaPlayer
  src='https://raw.githubusercontent.com/verygoodgraphics/resource/main/feature/text/text__weight.daruma'
  controlsConfig={[
    {
      label:  'Font Weight',
      type: 'Text',
      controlType: 'select',
      value: 'Black',
      valuePath: '$.frames[0].childObjects[0].defaultFontAttr.subFamilyName',
      options: [
        {
          label: 'Light',
          value: 'Light'
        },
        {
          label: 'Regular',
          value: 'Regular'
        },
        {
          label: 'Medium',
          value: 'Medium'
        },
        {
          label: 'Bold',
          value: 'Bold'
        },
        {
          label: 'Black',
          value: 'Black'
        }
      ]
    }
  ]}
/>

<br />
**Related Specs**
- [FontAttr](/specs/vectorgraphics/font-attr#subfamilyname)
