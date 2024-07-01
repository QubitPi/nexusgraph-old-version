"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[189],{1454:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=r(5893),s=r(1151);r(4866),r(5162);const a={sidebar_position:5,title:"Design"},i=void 0,o={id:"design",title:"Design",description:"The following guide is intended for developers who want to make changes to the Nexus Graph. It will cover the design of",source:"@site/docs/design.mdx",sourceDirName:".",slug:"/design",permalink:"/zh-cn/docs/design",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/nexusgraph/tree/master/docs/docs/design.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Design"},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/zh-cn/docs/development/graph-api"}},l={},u=[{value:"Module Layout",id:"module-layout",level:2},{value:"High Level Design",id:"high-level-design",level:2},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Redux Module",id:"redux-module",level:2},{value:"Graph Module",id:"graph-module",level:2},{value:"Database Module",id:"database-module",level:2},{value:"json-graphql-server",id:"json-graphql-server",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The following guide is intended for developers who want to make changes to the Nexus Graph. It will cover the design of\nvarious subsystems."}),"\n",(0,t.jsx)(n.h2,{id:"module-layout",children:"Module Layout"}),"\n",(0,t.jsxs)(n.p,{children:["Elide is a ",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/monorepo.tools/",children:"mono-repo"})," consisting of the following published modules:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Module Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nexusgraph-app"}),(0,t.jsx)(n.td,{children:"The user interface where user can use all features of Nexus Graph"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nexusgraph-db"}),(0,t.jsx)(n.td,{children:"Graph Data storage for nexusgraph CRUD API queries"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nexusgraph-graph"}),(0,t.jsx)(n.td,{children:"The core module that handles Graph rendering"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nexusgraph-nlp"}),(0,t.jsx)(n.td,{children:"The AI module that transforms text/audio into knowledge graphs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nexusgraph-oauth"}),(0,t.jsx)(n.td,{children:"Handles Authentication"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nexusgraph-redux"}),(0,t.jsx)(n.td,{children:"The state management of the entire app"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"high-level-design",children:"High Level Design"}),"\n",(0,t.jsx)(n.p,{children:"The following diagram represents a high level component breakout of Nexus Graph. Names in italics represent class names\nwhereas other names represent functional blocks (made up of many classes). Gray arrows represent module dependencies\nthrough the system."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Error loading high-level-design.png",src:r(1323).Z+"",width:"2508",height:"1642"})}),"\n",(0,t.jsx)(n.h2,{id:"dependency-injection",children:"Dependency Injection"}),"\n",(0,t.jsx)(n.p,{children:"In order to optimize our developer's experience, Nexus Graph runs against very different configurations in\nDev/Test/Prod environments. This puts some challenges on the design of system. Dependency injection is one of them.\nFor example, in dev mode, we want our UI engineer to go completely free by decoupling backend developments. We do that\nby running in-memory backend services. This means for those services, we need to automatically wire up different\nimplementations in Dev and Prod environment."}),"\n",(0,t.jsxs)(n.p,{children:["To address that, we use ",(0,t.jsx)(n.a,{href:"https://inversify.qubitpi.org/",children:"Inversify"})," to dynamically load 2 of our components:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"AI Entity Extraction Service"}),"\n",(0,t.jsx)(n.li,{children:"Graph API Webservice"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"redux-module",children:"Redux Module"}),"\n",(0,t.jsxs)(n.p,{children:["We are not using ",(0,t.jsx)(n.a,{href:"https://redux-toolkit.qubitpi.org/",children:"Redux Toolkit"})," because we want greater control over our\napplication states"]}),"\n",(0,t.jsx)(n.p,{children:"We employ redux by defining a GlobalState and a bunch of slices, which include reduces, to manipulate these states."}),"\n",(0,t.jsx)(n.p,{children:'The module also maintains the domain model of a "Graph" which includes 3 representations:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://nexusgraph.qubitpi.org/api/interfaces/nexusgraph_redux_src_graph_graphDuck.Node.html",children:"Node"})]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://nexusgraph.qubitpi.org/api/interfaces/nexusgraph_redux_src_graph_graphDuck.Link.html",children:"Link"})]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://nexusgraph.qubitpi.org/api/interfaces/nexusgraph_redux_src_graph_graphDuck.Graph.html",children:"Graph"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Basically, all Nexus Graph components agree on such data structure to model a graph. If a different representation is\nneeded, such as in nexusgraph-graph module, where a node needs to encode its position on a graph canvas, a\n",(0,t.jsx)(n.a,{href:"https://nexusgraph.qubitpi.org/api/functions/nexusgraph_graph_src_mappers.mapToBasicNodes.html",children:"separate transformation"}),"\nwould be needed"]}),"\n",(0,t.jsx)(n.p,{children:"Please keep in mind that Nexus Graph uses intensively 2 of the Redux's recommended practices:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://redux.qubitpi.org/style-guide/#use-action-creators",children:"Selector Functions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://redux.qubitpi.org/usage/deriving-data-selectors/#basic-selector-concepts",children:"Action Creators"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"graph-module",children:"Graph Module"}),"\n",(0,t.jsxs)(n.p,{children:["Our graph model is deeply nested, which causes a\n",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/62373936/component-not-updating-on-deeply-nested-redux-object",children:"huge pain on Redux state update"}),".\nWe take an\n",(0,t.jsx)(n.a,{href:"https://redux.qubitpi.org/usage/structuring-reducers/immutable-update-patterns/#immutable-update-utility-libraries",children:"immutable approach"}),"\nto address such issue."]}),"\n",(0,t.jsx)(n.h2,{id:"database-module",children:"Database Module"}),"\n",(0,t.jsx)(n.p,{children:"Nexus Graph is storage agnostic."}),"\n",(0,t.jsxs)(n.p,{children:["Semantic layer: ",(0,t.jsx)(n.code,{children:"GraphClient"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Our free version comes with an in-memory ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/json-graphql-server",children:"json-graphql-server"}),". We can host our own on-premise production version with\n",(0,t.jsx)(n.a,{href:"https://astraios.io",children:"astraios.io"}),", our official supported backend for storing graphs. Or we can implement our own ",(0,t.jsx)(n.a,{href:"#graph-api",children:"graph API"})]}),"\n",(0,t.jsx)(n.h3,{id:"json-graphql-server",children:"json-graphql-server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd nexusgraph\nyarn start:graph-api\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The server will be running at ",(0,t.jsx)(n.a,{href:"http://localhost:5000/",children:"http://localhost:5000/"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["There is a very useful debugging technique: if you click the axios request to the server from browser console, it will\ntake you directly to the ",(0,t.jsx)(n.a,{href:"http://localhost:5000/",children:"http://localhost:5000/"})," with the actual query printed on it, ready to be re-sent for debugging\npurposes."]})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>i});r(7294);var t=r(512);const s={tabItem:"tabItem_Ymn6"};var a=r(5893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,i),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(7294),s=r(512),a=r(2466),i=r(6550),o=r(469),l=r(1980),u=r(7392),d=r(12);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[u,c]=g({queryString:r,groupId:s}),[m,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),f=(()=>{const e=u??m;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),x(e)}),[c,x,a]),tabValues:a}}var x=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(5893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),s=o[r].value;s!==t&&(u(n),i(s))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:c,onClick:d,...a,className:(0,s.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,b.jsx)(y,{...e,children:c(e.children)},String(n))}},1323:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/high-level-design-bb484a1f02a0b54360f5963b7ab444ca.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(7294);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);