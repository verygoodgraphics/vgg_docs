---
title: VGG Specs
---

VGG Specs is a set of JSON-based specifications for the next generation of vector graphics. As a
kind of vector graphics, VGG could be applied to various domains, with user interface being the main
use case, as it supports advanced UI effects including gradients, shadows, blurs and masks.

The current working specs within VGG Specs includes:
- [VGG File Spec](/specs/file)
- [VGG Vector Graphics Spec](/specs/vectorgraphics/overview), with the complete JSON schema
  [here](/schemas/vectorgraphics.schema.json)
- [VGG Layout Spec](/specs/layout/overview), with the complete JSON schema
  [here](/schemas/layout.schema.json)

VGG Specs is designed from the ground up with the following characteristics in mind:

- **Open**: It should be an open standard for the next generation of vector graphics, led by
  VGG and driven by the [VGG community](/community/overview).
- **Readable**: It must be readable by ordinary users. Not only should the specs
  be well and clearly documented with illustrations, but also the data that
  conforms to the specs should be human-readable and parser-developable.
- **Compatible**: It should be compatible not only with popular design software
  such as Figma or Adobe Illustrator, but also with public graphics
  specifications such as SVG, making it a super-set of existing formats. This
  also means that it should include all the advanced graphic effects such as
  gradients, shadows, masks and blurs.
- **Scriptable**: It should have built-in scripting capability for vector graphics
  animation and more advanced interaction semantics.
- **Compact**: While being readable, it should be as compact as possible for
  network transmission.
- **Extensible**: It could be extended for future needs, for example, a new
  path description other than [Bezier
  Curves](https://pomax.github.io/bezierinfo/) or [Vector
  Networks](https://help.figma.com/hc/en-us/articles/360040450213-Vector-Networks).

As VGG Specs is extensible, more specs could be added separately, such as the upcoming
[animation specification](/specs/animation) and [3D specification](/specs/3d).

Additionally, VGG Specs comes along with an official implementation. VGG Runtime
is an open-source implementation of the VGG Specs with cross-platform rendering
and scripting capabilities. You can check it out
[here](https://github.com/verygoodgraphics/vgg_runtime).
