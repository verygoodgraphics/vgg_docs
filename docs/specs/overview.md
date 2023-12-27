---
title: Specs Overview
---

VGG Specs is a set of JSON-based specifications for the next generation of vector graphics.
It currently includes specs for VGG [file](/specs/file), general [vector
graphics](/specs/vectorgraphics/overview), and [layout
semantics](/specs/layout/overview).

The JSON schemas could be downloaded here:

- [Vector Graphics Spec](/schemas/vectorgraphics.schema.json)
- [Layout Spec](/schemas/layout.schema.json)

VGG Specs is designed from the ground up with the following characteristics in mind:

- __Open__: It should be an open standard for the next generation of vector graphics, led by
  VGG and driven by the VGG community.
- __Readable__: It must be readable by ordinary users. Not only should the specs
  be well and clearly documented with illustrations, but also the data that
  conforms to the specs should be human-readable and parser-developable.
- __Compatible__: It should be compatible not only with popular design software
  such as Figma or Adobe Illustrator, but also with public graphics
  specifications such as SVG, making it a super-set of existing formats. This
  also means that it should include all the advanced graphic effects such as
  gradients, shadows, masks and blurs.
- __Scriptable__: It should have built-in scripting capability for vector graphics
  animation and more advanced interaction semantics.
- __Compact__: While being readable, it should be as compact as possible for
  network transmission.
- __Extensible__: It could be extended for future needs, for example, a new
  path description other than [Bezier
  Curves](https://pomax.github.io/bezierinfo/) or [Vector
  Networks](https://help.figma.com/hc/en-us/articles/360040450213-Vector-Networks).

As VGG Specs is extensible, more specs could be added separately, such as an upcoming
animation specification and 3D specification.

Additionally, VGG Specs comes along with an official implementation. VGG Runtime
is an open-source implementation of the VGG Specs with cross-platform rendering
and scripting capabilities. You can check it out
[here](https://github.com/verygoodgraphics/vgg_runtime).
