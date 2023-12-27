---
title: VGG Overview
---

## VGG First Principle

<img src="/img/principle.png" alt="first_principle" style={{ width: '40%', display: 'block', margin: '40px auto' }}/>

The first principle of VGG is to bridge the huge gap between the two worlds of
design and development, eliminating duplicate development work (writing code to
reimplement UI which is already created by designers using design tools) and
accelerating the application development process.

## Design-as-Code Workflow

Thanks to [VGG Runtime](https://github.com/verygoodgraphics/vgg_runtime), a
cross-platform implementation of [VGG Specs](/specs/overview), VGG achieves this
original goal through an innovative _Design-as-Code_ workflow.

<img src="/img/dac.svg" alt="design-as-code" style={{ width: '50%', display: 'block', margin: '0 auto' }}/>

Simply put, it allows developers to focus on writing business logic code using
their familiar and preferred development tools and languages directly on top of
the design files. Developers don't have to endure various style sheets
including CSS or its derivatives.

## Ecosystem Compatibility

What's more, thanks to VGG Containers, developers can deploy the final results
of this workflow to any platforms with any frameworks. This means that VGG's
_Design-as-Code_ workflow is fully compatible with the existing code base and
doesn't even have the lock-in problems that are commonly identified in low-code
tools.

<img src="/img/platform.svg" alt="platform" style={{ width: '50%', display: 'block', margin: '0 auto' }}/>

In short, it is an enhancement to your original workflow, not a burden.

## Workflow Division

The _Design-as-Code_ workflow could be divided into three steps:

1. Design
2. Develop
3. Deploy

Let's go through each of them step by step.
