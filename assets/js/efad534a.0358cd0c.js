"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[189],{3800:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>D,contentTitle:()=>G,default:()=>M,frontMatter:()=>k,metadata:()=>T,toc:()=>A});var s=r(5893),t=r(1151),a=r(7294),i=r(512),d=r(2466),l=r(6550),o=r(469),h=r(1980),u=r(7392),c=r(12);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.k6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,h._X)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,t=g(e),[i,d]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[l,h]=m({queryString:r,groupId:s}),[u,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,c.Nk)(r);return[s,(0,a.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),f=(()=>{const e=l??u;return x({value:e,tabValues:t})?e:null})();(0,o.Z)((()=>{f&&d(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,t]),tabValues:t}}var j=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:h}=(0,d.o5)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),s=l[r].value;s!==t&&(h(n),a(s))},c=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:c,onClick:u,...a,className:(0,i.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=f(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,s.jsx)(v,{...e,...n}),(0,s.jsx)(y,{...e,...n})]})}function N(e){const n=(0,j.Z)();return(0,s.jsx)(w,{...e,children:p(e.children)},String(n))}const q={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:r,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(q.tabItem,t),hidden:r,children:n})}const k={sidebar_position:4,title:"Design"},G=void 0,T={id:"design",title:"Design",description:"The following guide is intended for developers who want to make changes to the Nexus Graph. It will cover the design of",source:"@site/docs/design.mdx",sourceDirName:".",slug:"/design",permalink:"/docs/design",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/nexusgraph/tree/master/docs/docs/design.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Design"},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/docs/development"}},D={},A=[{value:"Module Layout",id:"module-layout",level:2},{value:"High Level Design",id:"high-level-design",level:2},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Redux Module",id:"redux-module",level:2},{value:"Graph Module",id:"graph-module",level:2},{value:"Database Module",id:"database-module",level:2},{value:"json-graphql-server",id:"json-graphql-server",level:3},{value:"Graph API",id:"graph-api",level:3},{value:"Saving or Updating",id:"saving-or-updating",level:4},{value:"Nodes",id:"nodes",level:5},{value:"Links",id:"links",level:4},{value:"Graph",id:"graph",level:5},{value:"Getting Graph By ID",id:"getting-graph-by-id",level:4},{value:"Deleting Graph By ID",id:"deleting-graph-by-id",level:4},{value:"Nodes",id:"nodes-1",level:5},{value:"Getting Graph Metadata list by User ID",id:"getting-graph-metadata-list-by-user-id",level:4}];function E(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The following guide is intended for developers who want to make changes to the Nexus Graph. It will cover the design of\nvarious subsystems."}),"\n",(0,s.jsx)(n.h2,{id:"module-layout",children:"Module Layout"}),"\n",(0,s.jsxs)(n.p,{children:["Elide is a ",(0,s.jsx)(n.a,{href:"https://qubitpi.github.io/monorepo.tools/",children:"mono-repo"})," consisting of the following published modules:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Module Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nexusgraph-app"}),(0,s.jsx)(n.td,{children:"The user interface where user can use all features of Nexus Graph"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nexusgraph-db"}),(0,s.jsx)(n.td,{children:"Graph Data storage for nexusgraph CRUD API queries"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nexusgraph-graph"}),(0,s.jsx)(n.td,{children:"The core module that handles Graph rendering"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nexusgraph-nlp"}),(0,s.jsx)(n.td,{children:"The AI module that transforms text/audio into knowledge graphs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nexusgraph-oauth"}),(0,s.jsx)(n.td,{children:"Handles Authentication"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nexusgraph-redux"}),(0,s.jsx)(n.td,{children:"The state management of the entire app"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"high-level-design",children:"High Level Design"}),"\n",(0,s.jsx)(n.p,{children:"The following diagram represents a high level component breakout of Nexus Graph. Names in italics represent class names\nwhereas other names represent functional blocks (made up of many classes). Gray arrows represent client request and\nresponse flow through the system."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Error loading high-level-design.png",src:r(1323).Z+"",width:"2488",height:"816"})}),"\n",(0,s.jsx)(n.h2,{id:"dependency-injection",children:"Dependency Injection"}),"\n",(0,s.jsx)(n.p,{children:"In order to optimize our developer's experience, Nexus Graph runs against very different configurations in\nDev/Test/Prod environments. This puts some challenges on the design of system. Dependency injection is one of them.\nFor example, in dev mode, we want our UI engineer to go completely free by decoupling backend developments. We do that\nby running in-memory backend services. This means for those services, we need to automatically wire up different\nimplementations in Dev and Prod environment."}),"\n",(0,s.jsxs)(n.p,{children:["To address that, we use ",(0,s.jsx)(n.a,{href:"https://inversify.qubitpi.org/",children:"Inversify"})," to dynamically load 2 of our components:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"AI Entity Extraction Service"}),"\n",(0,s.jsx)(n.li,{children:"Graph API Webservice"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"redux-module",children:"Redux Module"}),"\n",(0,s.jsxs)(n.p,{children:["We are not using ",(0,s.jsx)(n.a,{href:"https://redux-toolkit.qubitpi.org/",children:"Redux Toolkit"})," because we want greater control over our\napplication states"]}),"\n",(0,s.jsx)(n.p,{children:"We employ redux by defining a GlobalState and a bunch of slices, which include reduces, to manipulate these states."}),"\n",(0,s.jsx)(n.p,{children:'The module also maintains the domain model of a "Graph" which includes 3 representations:'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://nexusgraph.qubitpi.org/api/interfaces/nexusgraph_redux.Node.html",children:"Node"})]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://nexusgraph.qubitpi.org/api/interfaces/nexusgraph_redux.Link.html",children:"Link"})]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://nexusgraph.qubitpi.org/api/interfaces/nexusgraph_redux.Graph.html",children:"Graph"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Basically, all Nexus Graph components agree on such data structure to model a graph. If a different representation is\nneeded, such as in nexusgraph-graph module, where a node needs to encode its position on a graph canvas, a\n",(0,s.jsx)(n.a,{href:"https://nexusgraph.qubitpi.org/api/functions/nexusgraph_graph_src_mappers.mapToBasicNodes.html",children:"separate transformation"}),"\nwould be needed"]}),"\n",(0,s.jsx)(n.p,{children:"Please keep in mind that Nexus Graph uses intensively 2 of the Redux's recommended practices:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redux.qubitpi.org/style-guide/#use-action-creators",children:"Selector Functions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redux.qubitpi.org/usage/deriving-data-selectors/#basic-selector-concepts",children:"Action Creators"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"graph-module",children:"Graph Module"}),"\n",(0,s.jsxs)(n.p,{children:["Our graph model is deeply nested, which causes a\n",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/62373936/component-not-updating-on-deeply-nested-redux-object",children:"huge pain on Redux state update"}),".\nWe take an\n",(0,s.jsx)(n.a,{href:"https://redux.qubitpi.org/usage/structuring-reducers/immutable-update-patterns/#immutable-update-utility-libraries",children:"immutable approach"}),"\nto address such issue."]}),"\n",(0,s.jsx)(n.h2,{id:"database-module",children:"Database Module"}),"\n",(0,s.jsx)(n.p,{children:"Nexus Graph is storage agnostic."}),"\n",(0,s.jsxs)(n.p,{children:["Semantic layer: ",(0,s.jsx)(n.code,{children:"GraphClient"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Our free version comes with an in-memory ",(0,s.jsx)(n.a,{href:"https://github.com/QubitPi/json-graphql-server",children:"json-graphql-server"}),". We can host our own on-premise production version with\n",(0,s.jsx)(n.a,{href:"https://astraios.io",children:"astraios.io"}),", our official supported backend for storing graphs. Or we can implement our own ",(0,s.jsx)(n.a,{href:"#graph-api",children:"graph API"})]}),"\n",(0,s.jsx)(n.h3,{id:"json-graphql-server",children:"json-graphql-server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd nexusgraph\nyarn start:graph-api\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The server will be running at ",(0,s.jsx)(n.code,{children:"http://localhost:5000/"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["There is a very useful debugging technique: if you click the axios request to the server from browser console, it will\ntake you directly to the ",(0,s.jsx)(n.code,{children:"http://localhost:5000/"})," with the actual query printed on it, ready to be re-sent for debugging\npurposes."]})}),"\n",(0,s.jsx)(n.h3,{id:"graph-api",children:"Graph API"}),"\n",(0,s.jsx)(n.p,{children:"The Graph API server should support the following Operations with specified GraphQL query and response schema:"}),"\n",(0,s.jsx)(n.h4,{id:"saving-or-updating",children:"Saving or Updating"}),"\n",(0,s.jsx)(n.h5,{id:"nodes",children:"Nodes"}),"\n",(0,s.jsxs)(N,{children:[(0,s.jsx)(I,{value:"graphql-query",label:"GraphQL Query",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n    node(\n      op:UPSERT\n      data:[\n        {fields: "{\\"name\\": \\"My Node\\"}", noteId:"1"},\n        {fields: "{\\"name\\": \\"My Node 2\\"}", noteId:"2"}\n      ]) {\n        edges {\n            node {\n                id\n            }\n        }\n    }\n}\n'})})}),(0,s.jsx)(I,{value:"graphql-response",label:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "node": {\n      "edges": [\n        {\n          "node": {\n            "id": "15"\n          }\n        },\n        {\n          "node": {\n            "id": "16"\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h4,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(N,{children:[(0,s.jsx)(I,{value:"graphql-query",label:"GraphQL Query",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n    link(\n        op:UPSERT\n        data: [\n          {\n            sourceNode:{id:15},\n            targetNode:{id:16},\n            fields: "{\\"type\\": \\"points to\\"}"\n          },\n          {\n            sourceNode:{id:13},\n            targetNode:{id:14},\n            fields: "{\\"type\\": \\"points to\\"}"\n          }\n        ]\n    ) {\n        edges {\n            node {\n                id\n            }\n        }\n    }\n}\n'})})}),(0,s.jsx)(I,{value:"graphql-response",label:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "link": {\n      "edges": [\n        {\n          "node": {\n            "id": "4"\n          }\n        },\n        {\n          "node": {\n            "id": "5"\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h5,{id:"graph",children:"Graph"}),"\n",(0,s.jsxs)(N,{children:[(0,s.jsx)(I,{value:"graphql-query",label:"GraphQL Query",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n    graph(\n        op: UPSERT\n        data:{\n            userId: "10000",\n            name: "My Graph",\n            nodes: [{id:13},{id:14},{id:15},{id:16}],\n            links: [{id:4},{id:5}]\n        }\n    ) {\n      edges {\n        node {\n            id\n            userId\n            name\n            nodes {\n                edges {\n                    node {\n                        ...nodeAttributes\n                    }\n                }\n            }\n            links {\n                edges {\n                    node {\n                        id\n                        sourceNode {\n                            edges {\n                                node {\n                                    ...nodeAttributes\n                                }\n                            }\n                        }\n                        targetNode {\n                            edges {\n                                node {\n                                    ...nodeAttributes\n                                }\n                            }\n                        }\n                        fields\n                    }\n                }\n            }\n            dateCreated\n            dateUpdated\n        }\n      }\n    }\n}\n\nfragment nodeAttributes on Node {\n  id\n  noteId\n  fields\n}\n'})})}),(0,s.jsx)(I,{value:"graphql-response",label:"Response",children:(0,s.jsxs)(n.p,{children:["The response format is the same as that of ",(0,s.jsx)(n.a,{href:"#getting-graph-by-id",children:"Getting Graph By ID"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"getting-graph-by-id",children:"Getting Graph By ID"}),"\n",(0,s.jsxs)(N,{children:[(0,s.jsx)(I,{value:"graphql-query",label:"GraphQL Query",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'{\n    graph(ids: ["5"]) {\n        edges {\n            node {\n                id\n                userId\n                name\n                nodes {\n                    edges {\n                        node {\n                            ...nodeAttributes\n                        }\n                    }\n                }\n                links {\n                    edges {\n                        node {\n                            id\n                            sourceNode {\n                                edges {\n                                    node {\n                                        ...nodeAttributes\n                                    }\n                                }\n                            }\n                            targetNode {\n                                edges {\n                                    node {\n                                        ...nodeAttributes\n                                    }\n                                }\n                            }\n                            fields\n                        }\n                    }\n                }\n                dateCreated\n                dateUpdated\n            }\n        }\n    }\n}\n\nfragment nodeAttributes on Node {\n    id\n    noteId\n    fields\n}\n'})})}),(0,s.jsx)(I,{value:"graphql-response",label:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "graph": {\n      "edges": [\n        {\n          "node": {\n            "id": "5",\n            "userId": "10000",\n            "name": "My Graph",\n            "nodes": {\n              "edges": [\n                {\n                  "node": {\n                    "id": "11",\n                    "noteId": "1",\n                    "fields": "{\\"name\\": \\"My Node\\"}"\n                  }\n                },\n                {\n                  "node": {\n                    "id": "12",\n                    "noteId": "1",\n                    "fields": "{\\"name\\": \\"My Node\\"}"\n                  }\n                }\n              ]\n            },\n            "links": {\n              "edges": [\n                {\n                  "node": {\n                    "id": "3",\n                    "sourceNode": {\n                      "edges": [\n                        {\n                          "node": {\n                            "id": "11",\n                            "noteId": "1",\n                            "fields": "{\\"name\\": \\"My Node\\"}"\n                          }\n                        }\n                      ]\n                    },\n                    "targetNode": {\n                      "edges": [\n                        {\n                          "node": {\n                            "id": "12",\n                            "noteId": "1",\n                            "fields": "{\\"name\\": \\"My Node\\"}"\n                          }\n                        }\n                      ]\n                    },\n                    "fields": "{\\"type\\": \\"points to\\"}"\n                  }\n                }\n              ]\n            },\n            "dateCreated": 1705382225651,\n            "dateUpdated": 1705382225651\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h4,{id:"deleting-graph-by-id",children:"Deleting Graph By ID"}),"\n",(0,s.jsx)(n.h5,{id:"nodes-1",children:"Nodes"}),"\n",(0,s.jsxs)(N,{children:[(0,s.jsx)(I,{value:"graphql-query",label:"GraphQL Query",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  graph(op: DELETE, ids: ["5"]) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n'})})}),(0,s.jsx)(I,{value:"graphql-response",label:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "graph": {\n      "edges": []\n    }\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h4,{id:"getting-graph-metadata-list-by-user-id",children:"Getting Graph Metadata list by User ID"}),"\n",(0,s.jsxs)(N,{children:[(0,s.jsx)(I,{value:"graphql-query",label:"GraphQL Query",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"{\n  graph {\n      edges {\n          node {\n            id\n            name\n            dateCreated\n            dateUpdated\n          }\n      }\n  }\n}\n"})})}),(0,s.jsx)(I,{value:"graphql-response",label:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "graph": {\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "name": "My Graph",\n            "dateCreated": 1705372839620,\n            "dateUpdated": 1705372839620\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function M(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(E,{...e})}):E(e)}},1323:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/high-level-design-4cda0b4247b6a7b0730a0e8516388457.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var s=r(7294);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);