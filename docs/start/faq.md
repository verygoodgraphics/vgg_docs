---
title: FAQ
sidebar_position: 2
---

# VGG FAQ

## What is VGG?

VGG, short for VeryGoodGraphics, is a next-gen vector graphics which focuses on the design
and development of cross-platform user interface.

VGG is so versatile that you can see it from at least two views:
- As a kind of vector graphics, it could be compared to SVG (Scalable Vector Graphics).
- As a cross-platform UI framework, it could be compared to Flutter.

You can take VGG a vectorized UI framework that use vector graphics heavily as general user
interfaces.

## What problem is VGG going to solve?

The application development process, when involved with particularly UI design and
development, can be tedious, monotonous and low efficient. For example,

- There is a lot of unnecessary communication efforts between designers and developers.
- There is a lot of unnecessary work efforts for developers, the most annoying being
  writing code to implement a UI to be pixel-perfectly the same as the design draft.

VGG tries to speed up this design & development process by eliminating those unnecessary
efforts as much as possible.

## How does VGG solve this problem?

VGG solves this problem by providing Design-as-Code paradigm for UI development, that
lets programmers to use any design drafts as the starting point for UI building by
treating them as vector graphics resources.

Meanwhile, VGG also tries to provide best cross-platform support, as well as design & development
ecosystem support so as to bring developers the best developer experience.

## What's the difference between VGG and HTML/CSS?

The UI design process and UI development process happens in two different levels of abstractions.
The design language is expressing low-level vector graphics elements, while the programming
language is expressing high-level UI concepts like components or widgets.

The common Design-to-Code process usually involves conversion from the low-level vector graphics to
a higher level of code. It is similar to a lossy compression process that not only loses some details
but also loses the control of converted details in higher level.

Since VGG is a kind of vector graphics, so the conversion from design to VGG is a lossless compression
process, which gives you back the full details as well as the control of these details.

And that's the most important discrepancy between VGG and HTML/CSS.

## What's the difference between VGG and SVG?

SVG is a vector graphics that is based on XML, with many different implementations across different
platforms so some rendering effects are not the same on different platforms. And SVG also lacks some
graphic features, so the conversion result from design tools could be very poor.

VGG is a next-gen vector graphics that is based on JSON, with an official cross-platform implementation
that has consistent rendering effects and behaviors on all platforms with the help of runtime wrappers
called VGG containers. VGG is also rich in graphic features that is good for conversion from common design
tools.

Say, if designers could export their design as a SVG that is perfect in rendering effects and consistent
across different platforms, the developers can just take it as the basis of further UI development, right?
However, it is not possible because of those intrinsic pitfalls of SVG.

VGG solves the problems of SVG so the above workflow, called Design-as-Code by VGG, becomes a reality.

## Is VGG free?

VGG comes with an open standard and an open source runtime which is licensed under a __conditionally
free__ VGG license. The only reason for non-totally-free is that VGG Group has contributed a lot
(over least two years) and simply doesn't want it stolen easily. If you don't like this license, you
are free and welcome to write a 3rd-party implementation.

In a word, you can take VGG runtime an almost-free product as VGG Group didn't expect to make profit
simply from this license, as SaaS and technical support are how we expected to make money.

## So what's the condition of VGG license?

You shall pay VGG a 2% royalty if and only if your VGG-applied product makes more than 10000 USD
every quarter.

