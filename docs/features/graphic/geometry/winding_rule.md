---
title: Winding Rule
sidebar_position: 6
hide_table_of_contents: true
---

<DarumaPlayer
  src='/feature/geometry/geometry__winding_rule__non_zero.daruma'
  controlsConfig={[
    {
      label:  'Winding Rule',
      type: 'Winding Rule',
      controlType: 'select',
      value: 0,
      valuePath: '$.frames[0].childObjects[0].shape.windingRule',
      options: [
        {
          label: 'Non-zero',
          value: 0
        },
        {
          label: 'Even-odd',
          value: 1
        },
      ]
    }
  ]}
/>

<br />
**Related Specs**
- [Shape](/specs/vectorgraphics/shape)
