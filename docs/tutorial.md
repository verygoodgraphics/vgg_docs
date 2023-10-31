# VGG Tutorial

VGG is a toolkit composed of many separate tools, each of which focuses on a
specific task during application development. These tasks are roughly divided
into three parts as follows:

1. __Import__ a design as the foundation for UI development.
2. __Develop__ directly on the design by adding layout and code.
3. __Deploy__ it as an independent application or as an embedded component
   within your existing project.

Let's walk through them step by step.

## Import

[VGG Daruma](../what/daruma) is VGG's underlying file format, and you need to
import your design files into Daruma first.

Once this is done, Daruma will provide you with a `.daruma` file for further
development. You can choose to download it for local development, or for
remote development through a unique `daruma id`.

> Since Daruma Formats is an [open standard
> specification](https://verygoodgraphics.com/daruma/formats/overview), you
> have the option to create and assemble it independently, but this method is
> less efficient and not recommended.

> Please be aware that, as for now, VGG does not have an official editor for
> Daruma files. Our team is currently prioritizing the development of the core
> engine, namely [VGG Runtime](../what/runtime). We recommend using
> well-established design tools such as Figma or Sketch __as your UI builders__
> and relying on Daruma's import functionality.

## Develop

Suppose you already have a Daruma file. The next step is to add layout
semantics and interaction behaviors to it, along with a runtime for
interactive development and debugging.

### How to write layout and code into a Daruma file?

The most convenient way is to use [VGG
Playground](https://verygoodgraphics.com/playground) to locally open, edit,
debug and save your Daruma file.

> Local editing functionality is coming soon. Stay tuned!

Alternatively, you can use an editor with an unzip function to directly edit
the code within the Daruma file.

[//]: <> (TODO: Daruma file structure documentation)

### What's the form of layout semantics and interaction behaviors?

First, layout semantics are defined in JSON according to the [Daruma Layout
Format](https://verygoodgraphics.com/daruma/formats/layout).

Second, interaction behaviors can be expressed in JavaScript or any language
that can be compiled into WebAssembly. You will also need to establish the
correct mappings between the UI and the code.

> Tools to assist with mapping construction will be available soon. Stay tuned!

### How to manipulate the internal data of Daruma file or make use of VGG APIs?

This can be achieved through [VGG SDKs](../sdks/). Please select one of our
provided SDKs that suits your preferred programming language.

### How to run the Daruma file?

VGG Playground already includes an embedded WASM-version runtime for
visualizing and interacting with a Daruma file.

However, if you wish to run a Daruma file natively, you have the option to
build VGG Runtime on your own. Please refer to [Build
instructions](https://github.com/verygoodgraphics/vgg_runtime/blob/main/README.md)
for more details.

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
