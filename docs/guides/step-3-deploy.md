---
title: "Step 3: Deploy"
---

The deployment of a typical VGG application consists of two loading processes:

1. Loading of VGG Runtime. This is automatically done if you are using an
   VGG container.
2. Loading of VGG file. It could be a local file or a remote file transmitted
   through a CDN, which is determined by both the limits of the container and
   your own preference.

For example, suppose you are using _VGG Container for React_. First, a
pre-compiled WebAssembly version of VGG Runtime is loaded from CDN. Then, your
VGG file is loaded from the actual URL that you provided to React container. For
more details, please refer to the documentation of the specific VGG container.

