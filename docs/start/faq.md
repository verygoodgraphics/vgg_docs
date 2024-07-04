---
title: FAQ
sidebar_position: 2
---

# VGG FAQ

## What is VGG?

VGG, short for VeryGoodGraphics, is next-gen vector graphics useful for the design and
development of cross-platform user interfaces.

VGG is so versatile that you can view it from at least two perspectives:
- As a type of vector graphics, it can be compared to SVG (Scalable Vector Graphics).
- As a cross-platform UI framework, it can be compared to Flutter.

You can consider VGG a vectorized UI framework that uses vector graphics extensively for
general user interfaces.

## What problem is VGG going to solve?

The application development process, particularly UI design and development, can be tedious,
monotonous, and inefficient. For example,

- There are many unnecessary communication efforts between designers and developers.
- There are many unnecessary efforts for developers, the most annoying being writing code to
  make a UI pixel-perfectly match the design draft.

VGG aims to speed up this design and development process by eliminating those unnecessary
efforts as much as possible.

## How does VGG solve this problem?

VGG solves this problem by providing a Design-as-Code paradigm for UI development, allowing
programmers to use design drafts as the starting point for UI building by treating them as
vector graphics resources.

Meanwhile, VGG also aims to provide the best cross-platform support and design & development
ecosystem support to offer developers the best experience.

## What's the difference between VGG and HTML/CSS?

The UI design and development processes happen at two different levels of abstraction. The design
language expresses low-level vector graphics elements, while the programming language expresses
high-level UI concepts like components or widgets.

The common Design-to-Code process usually involves converting low-level vector graphics to higher-level
code. It is similar to a lossy compression process that loses some details and control of the converted
details at a higher level.

Since VGG is a type of vector graphics, the conversion from design to VGG is a lossless process,
retaining full details and control.

This is the most important difference between VGG and HTML/CSS.

## What's the difference between VGG and SVG?

SVG is vector graphics based on XML, with many different implementations across platforms, leading to
inconsistent rendering effects. SVG also lacks some graphic features, resulting in poor conversion
from design tools.

VGG is next-gen vector graphics based on JSON, with an official cross-platform implementation that ensures
consistent rendering effects and behaviors on all platforms using runtime wrappers called VGG containers.
VGG is also rich in graphic features, making it suitable for conversion from common design tools.

If designers could export their designs as SVG with perfect rendering effects and consistency across
platforms, developers could use it as the basis for further UI development. However, this is not possible
due to the intrinsic pitfalls of SVG.

VGG solves SVG's problems, making the Design-as-Code workflow a reality.

## Is VGG free?

VGG comes with an open standard and an open-source runtime licensed under a conditionally free VGG
license. The only reason it is not completely free is that VGG Group has contributed significantly
(over at least two years) and doesn't want it easily stolen. If you don't like this license, you
are free to write a third-party implementation.

In short, you can consider VGG an almost-free product, as VGG Group does not expect to profit solely
from this license, but rather from SaaS and technical support.

## So what's the condition of VGG license?

You must pay VGG a 2% royalty only if your VGG-applied product makes more than $10,000 every quarter.
You can read the full [VGG License](https://verygoodgraphics.com/licenses/LICENSE-latest) for more details.

## Who is behind VGG?

VGG is initiated and developed by VGG Group. You can find the core members in the [VGG Governance](/community/governance) document.
