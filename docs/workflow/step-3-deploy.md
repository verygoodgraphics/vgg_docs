---
title: "Step 3: Deploy"
---

The last step is to deploy your VGG applications. If you are using VGG
containers, this step is trivial and easy.

The loading of a typical VGG application consists of two phases:

- Phase 1: Loading of VGG Runtime. This is automatically done if you are using
  an VGG container.
- Phase 2: Loading of VGG file. It could be a local file or a remote file
  transmitted through a CDN, which is determined by both the limits of the
  container and your own preference.

For example, suppose you are using [VGG Container for
React](https://github.com/verygoodgraphics/vgg_web/tree/main/packages/react).
First, a pre-compiled WebAssembly version of VGG Runtime is loaded from CDN.
Then, your VGG file is loaded from the actual URL that you provided to React
container. For more details, please refer to the documentation of the specific
VGG container.

