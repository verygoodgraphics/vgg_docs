---
title: Quick Start
sidebar_position: 0
---

# Quick Start

Although VGG is a kind of general vector graphics, it could be used in the design and development of a user interface.

<img src="/img/vgg_mindmap.png" alt="VGG quick start" className="doc-image" />

This innovative way of developing user interface is called __Design as Code__ paradigm, in contrast to the traditional __imperative__ UI programming paradigm, or the popular __declarative__ UI programming paradigm with frameworks like React, SwiftUI, Flutter, Qt Quick or even GNOME [Blueprint](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/).

Let's start step by step.

## Step 1. UI Design

As a UI development framework, VGG has no built-in UI builder, nor any declarative DSL. Instead, VGG takes advantages of existing UI design tools, or just any vector graphics editor that is able to draw a user interface, as a UI builder. No matter whether it is a rough sketch, or a high-fidelity design, or an interactive prototype, VGG is able to use it as the starting point of UI development, by turning these files into a well-defined vector graphics representation.

There are multiple ways to turn a design file into a VGG file, for example:

1. [Daruma](https://daruma.run) is an online service that could convert Figma/Sketch/Adobe Illustrator files into a kind of VGG file called Daruma file.
2. Daruma provides a [Figma plugin](https://daruma.run/plugins/daruma-figma-plugin) that does this conversion process during the synchronization from Figma to Daruma.
3. [VGG CLI](https://github.com/verygoodgraphics/vgg_cli) is another entrance of the free Daruma conversion service if you do not want any sign-up process.

We'll use VGG CLI in this tutorial. Suppose you have a Figma design file `hello_vgg.fig`, then

```
$ npm install -g @verygoodgraphics/vgg-cli
$ vgg-cli convert hello_vgg.fig
Saved as "hello_vgg.daruma"
```

And that's done!

P.S. You could also use VGG community-driven converters like [VGG-SVG-Parser](https://github.com/verygoodgraphics/vgg_svg_parser/) to convert from any SVG files, but as for now this project is not finished yet.

## Step 2. UI Development

The `hello_vgg.daruma` file obtained in the last step could be directly rendered and executed by VGG Runtime.

The development process may happen in two places.

- Inside the daruma file. This requires a Daruma Editor (currently not available). However, you could unzip this file, make modifications to the JSON or the embedded script files as long as it conforms to VGG Specs, and zip it again to finish the daruma file programming process.
- Outside of the daruma file. This requires using a VGG container to load and control the rendering and interaction behaviors of this daruma file.

We'll discuss the second case, by using VGG web container as an example. This [video](https://youtu.be/auvBmOb3AT0) contains some detailed code samples about setting up callbacks for some buttons. More VGG APIs are still developing.

## Step 3. Done

And that's done. The remaining problems are the deployments, including the deployment of VGG container and the associated daruma files. That'll be leaved to more community tools in the future. For example, maybe there should be a better Webpack support for daruma files.

Please read our [roadmap](/start/roadmap) to find out what you need. If you cannot find any, you are welcome to create issues.
