---
title: File Spec
---

VGG File Specification defines how JSON files are fused together as a single
file.

There are two forms of file format designed for VGG, namely

- Form 1: Zip of JSONs
- Form 2: Streaming binary blob (🚧)

Both forms are essentially equivalent, differing only in file size and usage
scenarios. Form 2 is more compact and has better support for network streaming.

## Form 1: Zip of JSONs

This is the simplest and most straightforward format, where a file conforming
to VGG File Spec is simply a zip of all the associated JSONs. The widely
adopted Zip Spec can be found in [ISO/IEC
21320-1:2015](https://www.iso.org/standard/60101.html) and many open source
implementations are available.

Currently [Daruma](https://daruma.run) will produce `.daruma`
file and [VGG Runtime](https://github.com/verygoodgraphics/vgg_runtime) reads
it.  This `.daruma` file is actually of Form 1, with its own customization. The
structure of a typical `.daruma` file looks like this after unzipping:

```
├── design.json
├── layout.json
├── resources
│   ├── 7cd240ad79432fb602658bbf2d4b6b573681df30.png
│   ├── a80205d7467dc0e5eafac1cba24ce53ca2ddfae6.png
│   └── c1dc652004616cba4640e452e5feca37a4357334.png
└── thumbnail
    └── thumbnail_500_256.png
```

where `design.json` conforms to VGG [Vector Graphics
Spec](/specs/vectorgraphics/overview) and `layout.json` conforms to VGG [Layout
Spec](/specs/layout/overview). The images files under `resources` directory are
referenced in `design.json` in some filed, like the `imageFileName` field in
[PatternImageFill](/specs/vectorgraphics/pattern-image-fill#imagefilename).

## Form 2: Streaming binary blob (🚧)

This form is optimized for file size and network streaming. It is still in the
design phase. It will be like the [Kiwi](https://github.com/evanw/kiwi) format
used by Figma.
