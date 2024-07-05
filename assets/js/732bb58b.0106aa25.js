"use strict";(self.webpackChunkvgg_docs=self.webpackChunkvgg_docs||[]).push([[6383],{6500:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(1527),r=i(395);const s={title:"Quick Start",sidebar_position:0},a="Quick Start",o={id:"start/overview",title:"Quick Start",description:"Although VGG is a kind of general vector graphics, it could be used in the design and development of a user interface.",source:"@site/docs/start/overview.md",sourceDirName:"start",slug:"/start/overview",permalink:"/start/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/verygoodgraphics/vgg_docs/tree/main/docs/start/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Quick Start",sidebar_position:0},sidebar:"startSidebar",next:{title:"Roadmap",permalink:"/start/roadmap"}},l={},d=[{value:"Step 1. UI Design",id:"step-1-ui-design",level:2},{value:"Step 2. UI Development",id:"step-2-ui-development",level:2},{value:"Step 3. Done",id:"step-3-done",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsx)(t.p,{children:"Although VGG is a kind of general vector graphics, it could be used in the design and development of a user interface."}),"\n",(0,n.jsx)("img",{src:"/img/vgg_mindmap.png",alt:"VGG quick start",className:"doc-image"}),"\n",(0,n.jsxs)(t.p,{children:["This innovative way of developing user interface is called ",(0,n.jsx)(t.strong,{children:"Design as Code"})," paradigm, in contrast to the traditional ",(0,n.jsx)(t.strong,{children:"imperative"})," UI programming paradigm, or the popular ",(0,n.jsx)(t.strong,{children:"declarative"})," UI programming paradigm with frameworks like React, SwiftUI, Flutter, Qt Quick or even GNOME ",(0,n.jsx)(t.a,{href:"https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/",children:"Blueprint"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Let's start step by step."}),"\n",(0,n.jsx)(t.h2,{id:"step-1-ui-design",children:"Step 1. UI Design"}),"\n",(0,n.jsx)(t.p,{children:"As a UI development framework, VGG has no built-in UI builder, nor any declarative DSL. Instead, VGG takes advantages of existing UI design tools, or just any vector graphics editor that is able to draw a user interface, as a UI builder. No matter whether it is a rough sketch, or a high-fidelity design, or an interactive prototype, VGG is able to use it as the starting point of UI development, by turning these files into a well-defined vector graphics representation."}),"\n",(0,n.jsx)(t.p,{children:"There are multiple ways to turn a design file into a VGG file, for example:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://daruma.run",children:"Daruma"})," is an online service that could convert Figma/Sketch/Adobe Illustrator files into a kind of VGG file called Daruma file."]}),"\n",(0,n.jsxs)(t.li,{children:["Daruma provides a ",(0,n.jsx)(t.a,{href:"https://daruma.run/plugins/daruma-figma-plugin",children:"Figma plugin"})," that does this conversion process during the synchronization from Figma to Daruma."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/verygoodgraphics/vgg_cli",children:"VGG CLI"})," is another entrance of the free Daruma conversion service if you do not want any sign-up process."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["We'll use VGG CLI in this tutorial. Suppose you have a Figma design file ",(0,n.jsx)(t.code,{children:"hello_vgg.fig"}),", then"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'$ npm install -g @verygoodgraphics/vgg-cli\n$ vgg-cli convert hello_vgg.fig\nSaved as "hello_vgg.daruma"\n'})}),"\n",(0,n.jsx)(t.p,{children:"And that's done!"}),"\n",(0,n.jsxs)(t.p,{children:["P.S. You could also use VGG community-driven converters like ",(0,n.jsx)(t.a,{href:"https://github.com/verygoodgraphics/vgg_svg_parser/",children:"VGG-SVG-Parser"})," to convert from any SVG files, but as for now this project is not finished yet."]}),"\n",(0,n.jsx)(t.h2,{id:"step-2-ui-development",children:"Step 2. UI Development"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"hello_vgg.daruma"})," file obtained in the last step could be directly rendered and executed by VGG Runtime."]}),"\n",(0,n.jsx)(t.p,{children:"The development process may happen in two places."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Inside the daruma file. This requires a Daruma Editor (currently not available). However, you could unzip this file, make modifications to the JSON or the embedded script files as long as it conforms to VGG Specs, and zip it again to finish the daruma file programming process."}),"\n",(0,n.jsx)(t.li,{children:"Outside of the daruma file. This requires using a VGG container to load and control the rendering and interaction behaviors of this daruma file."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["We'll discuss the second case, by using VGG web container as an example. This ",(0,n.jsx)(t.a,{href:"https://youtu.be/auvBmOb3AT0",children:"video"})," contains some detailed code samples about setting up callbacks for some buttons. More VGG APIs are still developing."]}),"\n",(0,n.jsx)(t.h2,{id:"step-3-done",children:"Step 3. Done"}),"\n",(0,n.jsx)(t.p,{children:"And that's done. The remaining problems are the deployments, including the deployment of VGG container and the associated daruma files. That'll be leaved to more community tools in the future. For example, maybe there should be a better Webpack support for daruma files."}),"\n",(0,n.jsxs)(t.p,{children:["Please read our ",(0,n.jsx)(t.a,{href:"/start/roadmap",children:"roadmap"})," to find out what you need. If you cannot find any, you are welcome to create issues."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},395:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var n=i(959);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);