---
title: "FAQ"
---

## Who is VGG Workflow designed for?

_VGG Workflow_ is designed for two kinds of people:

- Designers who want to make serious applications, rather than simple
  prototypes.
- Developers who want to spend more time on business logic, rather than UI
  code.

When these two roles are combined, _VGG Workflow_ serves independent developers,
or as they are commonly called, indie hackers. They are both full-stack frontend
designers and developers that always want a quick development process to turn
ideas into real applications.

## What's the goal of VGG Workflow?

The application development process, and particularly UI design and
development, can be tedious, monotonous and low efficient.

_VGG Workflow_ aims to make the process of application UI design and development
more efficient by:

- Eliminating the need for continuous communication efforts between designers
  and developers.
- Reducing duplicated work efforts, such as reimplementing the UI with code to
  ensure it's pixel-perfectly the same as the original design.

_VGG Workflow_ also aims to provide the best developer experience, along with
cross-platform capability and ecosystem compatibility.

## Why call it Design-as-Code? I believe it's just another design-to-code tool.

Not exactly. _VGG Workflow_ doesn't convert designs into web codes like
HTML/CSS/JS.  Instead, it depends on
[Daruma](https://verygoodgraphics.com/daruma) to convert designs into files that
conform to VGG Specs. Of course, these are also codes, but they differs from web
codes not only in the representation but also in the level of abstraction.

We use the term _Design-as-Code_ because _VGG Workflow_ can seamlessly combine
two processes of design and code, which led us to coin this phrase.

## Is it a low-code product?

Not really. First, it is not low-code. Second, it is not a product, but only a
workflow.

[Daruma](https://verygoodgraphics.com/daruma) is the product, which provides
extra values for the workflow practitioners.

## What is VGG Runtime and what's the use of it?

[VGG Runtime](https://github.com/verygoodgraphics/vgg_runtime) is a C++ engine
with two primary functionalities:

- The first is its complete 2D vector graphics capability, dedicated to
  rendering high-fidelity design files as user interfaces (UIs).
- The second is the ability to program and run design files as applications,
  providing more power than simple prototypes.

_VGG Workflow_ achieves its goal by combining these two features. However, you
can also build a professional vector graphics editor like Figma or even
Illustrator based on the first graphics capability alone. VGG already provides a
solid foundation for this with a vector graphics specification and a rendering
implementation.

Please note that VGG Runtime is open source and conditionally free under the
[VGG License](https://verygoodgraphics.com/licenses/LICENSE-1.0).
