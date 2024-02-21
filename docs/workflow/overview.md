---
title: VGG Workflow
sidebar_label: Overview
---

The _VGG Workflow_ is an innovative workflow for rapid application development,
made possible by [VGG Specs](/specs/overview) with the official open-source
implementation, [VGG Runtime](https://github.com/verygoodgraphics/vgg_runtime),
and various [VGG Containers](/containers/overview) for different frameworks and
platforms.

Before we discuss the details of _VGG Workflow_, let's first learn some concepts
including its first principle, the concept of _Design-as-Code_, and its
ecosystem compatibility.

## First Principle

<img src="/img/principle.png" alt="first_principle" className='doc-image'/>

The first principle of _VGG Workflow_ is to bridge the huge gap between the two
worlds of design and development. This is achieved by eliminating redundant
development efforts—specifically, the rewriting of code to reimplement UI
elements that designers have already created using design tools.

The ultimate result is an accelerated application development process, a
minimized R&D cycle, and a significantly improved ROI.

## Design-as-Code

<img src="/img/dac.svg" alt="design-as-code" className='doc-image' />

The concept of _Design-as-Code_ is straightforward and intuitive, with _Code_
specifically referring to __UI code__.

The _VGG Workflow_ allows developers to focus on writing business logic code
using their familiar and preferred development tools and languages directly on
top of the design files.

As a result, developers will no longer need to repeatedly implement or fine-tune
the UI using various style sheets like CSS or its derivatives. They can simply
take the design as the source of truth for the UI, and the rest will be handled
by VGG.

## Ecosystem Compatibility

What's more, thanks to [VGG Containers](/containers/overview), developers can
deploy the final outcomes of _VGG workflow_ to any platforms with any
frameworks. This means it is completely compatible with the existing code base
and doesn't even have vendor lock-in problems that are commonly identified in
low-code tools.

<img src="/img/platform.svg" alt="platform" className='doc-image' />

In short, it is an enhancement to your original workflow, not a burden.

## Workflow Steps

_VGG Workflow_ could be divided into three steps:

1. Design
2. Develop
3. Deploy

Let's go through each of them step by step.
