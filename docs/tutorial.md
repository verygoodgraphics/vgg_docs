# VGG Tutorial

VGG is a toolkit composed of many separate tools, each of which focuses on a
specific task. These tasks are roughly divided as follows.

1. __Import__ a design as the basis for UI development.
2. __Develop__ directly on the design by adding layout and code.
3. __Deploy__ as an independent application or an embedded component into your
   existing project.

Let's walk through them step by step.

## Import

[VGG Daruma](../what/daruma) is VGG's underlying file format and you need to
import your design files into Daruma first.

When this is done, Daruma will give you a `.daruma` file for further
development.  You can choose to download it for local development, or for
remote development through a unique `daruma id`.

> Since Daruma Formats is an [open standard
> specification](https://verygoodgraphics.com/daruma/formats/overview), you
> could even write and assemble it all on your own, however, this is a bit low
> efficient and is not recommended.

> Please note that VGG currently has no official editor for Daruma file yet,
> since our team is focusing heavily on the development of core engine, i.e.
> [VGG Runtime](../what/runtime). Please use mature design tools like Figma
> or Sketch __as your UI builders__ and rely on Daruma's import ability.

## Develop

Suppose you already have a Daruma file. The next step is to add layout
semantics and interaction behaviors to it, along with a runtime for
interactively developing and debugging.

### How to write layout and code into a Daruma file?

The most convenient way is to use [VGG
Playground](https://verygoodgraphics.com/playground) to locally open, edit,
debug and save your Daruma file.

> The local editing function is coming soon. Stay tuned!

Or you could use a editor with unzip function to directly edit the code inside
the Daruma file.

[//]: <> (TODO: Daruma file structure documentation)

### What's the form of layout semantics and interaction behaviors?

First, the layout semantics is a JSON defined by [Daruma Layout
Format](https://verygoodgraphics.com/daruma/formats/layout).

Second, the interaction behaviors could be expressed in Javascript or any
languages that could be compiled into WebAssembly. You also need to construct the
correct mappings between UI and code.

> The tools for helping mapping construction is coming soon. Stay tuned!

### How to manipulate the internal data of Daruma file or make use of VGG APIs?

This could be done through [VGG SDKs](../sdks/). Please choose any one of our
provided SDKs to meet the needs for your favorite programming language.

### How to run the Daruma file?

VGG Playground already has an embedded WASM-version runtime for you to
visualize and interact with a Daruma file.

However, if you want running a Daruma file natively, you can choose to build
VGG Runtime on your own. Please refer to [Build
instructions](https://github.com/verygoodgraphics/vgg_runtime/blob/main/README.md).

## Deploy

When the development is done, you have many options to deploy and distribute
your VGG applications, say

- As a Web application. You can deploy it independently or embedded through
  [vgg_html](#), [vgg_react](../components/react) and more.

- As a Desktop application. You can deploy it independently or embedded
  through [sdl_runtime](#), [vgg_qt](#) and more.

- As a mobile application. You can deploy it independently or embedded through
  [vgg_android](#) or [vgg_ios](#).

> Note currently only `vgg_react` is available.
