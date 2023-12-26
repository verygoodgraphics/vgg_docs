---
title: "Step 1: Design"
---

In this step, we need to obtain a design file that conforms to VGG Specs.

This can be done in a number of ways:

- Write JSON files manually that conform to VGG's _Vector Graphics Spec_ and
  _Layout Spec_, and then make a zip of them according to _File Spec_.
- Write a JSON generator that generates VGG JSON files according to a high-level
  description.
- Write a JSON generator that also generates VGG JSON files from design files
  created by other design tools.
- Write an editor for VGG that allows you to create a VGG design file from
  scratch.
- ...

VGG has no official editor and you would be on your own. Thanks to
[Daruma](https://verygoodgraphics.com/daruma), there is an online converter with
support for popular design tools including Figma, Sketch and Adobe Illustrator,
so you can quickly generate a VGG design file by simply importing an existing
design file.

> Tips: Daruma produces `.daruma` files that conforms to VGG specs in [Form
> 1](/specs/file#form-1-zip-of-jsons).

And there is also an open source [Sketch
parser](https://github.com/verygoodgraphics/vgg_sketch_parser) that generates
VGG JSON files from a Sketch design file.
