"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[204],{5771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=t(5893),r=t(1151),s=t(4866),o=t(5162);const i={sidebar_position:3,title:"Data Models"},l=void 0,d={id:"data-model",title:"Data Models",description:"This page is a description on the CRUD data models (create, read, update, and delete) in the backend of Nexus Graph.",source:"@site/docs/data-model.mdx",sourceDirName:".",slug:"/data-model",permalink:"/docs/data-model",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/nexusgraph/tree/master/docs/docs/data-model.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Data Models"},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/docs/concept"},next:{title:"Development",permalink:"/docs/development"}},c={},u=[{value:"GraphQL",id:"graphql",level:2},{value:"API Structure",id:"api-structure",level:2},{value:"Input Objects",id:"input-objects",level:3},{value:"Query Objects",id:"query-objects",level:3},{value:"Making Calls",id:"making-calls",level:2},{value:"Creating a New Graph",id:"creating-a-new-graph",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This page is a description on the CRUD data models (create, read, update, and delete) in the backend of Nexus Graph."}),"\n",(0,a.jsx)(n.h2,{id:"graphql",children:"GraphQL"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://graphql.org/",children:"GraphQL"})," is a language specification published by Facebook for constructing graph APIs. Nexus Graph is backed by an\nGraphQL API to manage all the graph data."]}),"\n",(0,a.jsx)(n.h2,{id:"api-structure",children:"API Structure"}),"\n",(0,a.jsx)(n.p,{children:"GraphQL in Nexus Graph splits its schema into 2 kinds of objects:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Query objects which are used to compose queries and mutations"}),"\n",(0,a.jsx)(n.li,{children:"Input Objects which are used to supply input data to mutations"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The schema for both kind of objects are derived from the entity relationship among Nodes and Links (defined by the\n",(0,a.jsx)(n.a,{href:"https://download.oracle.com/otn-pub/jcp/persistence-2_1-fr-eval-spec/JavaPersistence.pdf?AuthParam=1719199826_ee6dd88167d33fe7e52533421c072552",children:"JPA data model"}),"). Both contain a set of attributes and relationships. Attributes are properties of the entity.\nRelationships are links to other entities in the graph."]}),"\n",(0,a.jsx)(n.h3,{id:"input-objects",children:"Input Objects"}),"\n",(0,a.jsx)(n.p,{children:"Input objects just contain attributes and relationship with names directly matching the property names in the JPA\nannotated model:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Error loading input-objects.png",src:t(4689).Z+"",width:"502",height:"61"})}),"\n",(0,a.jsx)(n.h3,{id:"query-objects",children:"Query Objects"}),"\n",(0,a.jsx)(n.p,{children:"Query Objects are more complex than Input Objects since they do more than simply describe data; they must support\nfiltering, sorting, and pagination. Nexus Graph GraphQL structure for queries and mutations is depicted below:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Error loading query-objects.png",src:t(1415).Z+"",width:"607",height:"186"})}),"\n",(0,a.jsx)(n.p,{children:"GraphQL schema for Nexus Graph defines a root document which represents the root of the object graph. There are 4\nentities that are marked as directly navigable from the root of this graph:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Graph"}),"\n",(0,a.jsx)(n.li,{children:"Node"}),"\n",(0,a.jsx)(n.li,{children:"Link"}),"\n",(0,a.jsx)(n.li,{children:"Note"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Nexus Graph's GraphQL root document consist of ",(0,a.jsx)(n.em,{children:"relationships"})," to those a single rootable entity: Graph. All other\nnon-rootable entities (Node, Link, and Note) must be referenced through traversal of the relationships in the entity\nrelationship graph."]}),"\n",(0,a.jsxs)(n.p,{children:["Nexus Graph model relationships follows ",(0,a.jsx)(n.a,{href:"http://graphql.org/learn/pagination/",children:"Relay's Connection pattern"}),".  Relationships are a collection of graph edges.\nEach edge contains a graph node. The node is an instance of a data model which in turn contains its own attributes and\nset of relationships."]}),"\n",(0,a.jsx)(n.h2,{id:"making-calls",children:"Making Calls"}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-new-graph",children:"Creating a New Graph"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"request",label:"Request",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n    graph(op: UPSERT, data: {name: "My Graph"}) {\n        edges {\n            node {\n                id\n                links(op: UPSERT, data: [{onCanvasId: "HDdH3f3", fields: "{\\"type\\": \\"my link\\"}"}]) {\n                    edges {\n                        node {\n                            id\n                            source(op: UPSERT, data: {\n                                onCanvasId: "kjGUgyf",\n                                fields: "{\\"name\\": \\"source node\\", \\"description\\": \\"my source node\\", \\"labels\\": \\"[\\\\\\"label1\\\\\\", \\\\\\"[label2]\\\\\\"]\\"}",\n                                note: {noteId: "JHG&d2c"}\n                            }) {\n                                edges {\n                                    node {\n                                        ...nodeAttributes\n                                    }\n                                }\n                            }\n                            target(op: UPSERT, data: {\n                                onCanvasId: "IuJeIf3",\n                                fields: "{\\"name\\": \\"target node\\", \\"description\\": \\"my target node\\", \\"labels\\": \\"[\\\\\\"label1\\\\\\", \\\\\\"[label2]\\\\\\"]\\"}",\n                                note: {noteId: "i87UGfd"}\n                            }) {\n                                edges {\n                                    node {\n                                        ...nodeAttributes\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n\nfragment nodeAttributes on Node {\n    id\n    fields\n    onCanvasId\n    note {\n        edges {\n            node {\n                noteId\n            }\n        }\n    }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"response",label:"Response",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "graph":{\n            "edges":[\n                {\n                    "node":{\n                        "id":"1",\n                        "links":{\n                            "edges":[\n                                {\n                                    "node":{\n                                        "id":"1",\n                                        "source":{\n                                            "edges":[\n                                                {\n                                                    "node":{\n                                                        "id":"1",\n                                                        "fields":"{\\"name\\": \\"source node\\", \\"description\\": \\"my source node\\", \\"labels\\": \\"[\\\\\\"label1\\\\\\", \\\\\\"[label2]\\\\\\"]\\"}",\n                                                        "onCanvasId":"kjGUgyf",\n                                                        "note":{\n                                                            "edges":[\n                                                                {\n                                                                    "node":{\n                                                                        "noteId":"JHG&d2c"\n                                                                    }\n                                                                }\n                                                            ]\n                                                        }\n                                                    }\n                                                }\n                                            ]\n                                        },\n                                        "target":{\n                                            "edges":[\n                                                {\n                                                    "node":{\n                                                        "id":"2",\n                                                        "fields":"{\\"name\\": \\"target node\\", \\"description\\": \\"my target node\\", \\"labels\\": \\"[\\\\\\"label1\\\\\\", \\\\\\"[label2]\\\\\\"]\\"}",\n                                                        "onCanvasId":"IuJeIf3",\n                                                        "note":{\n                                                            "edges":[\n                                                                {\n                                                                    "node":{\n                                                                        "noteId":"i87UGfd"\n                                                                    }\n                                                                }\n                                                            ]\n                                                        }\n                                                    }\n                                                }\n                                            ]\n                                        }\n                                    }\n                                }\n                            ]\n                        }\n                    }\n                }\n            ]\n        }\n    }\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(7294),r=t(512),s=t(2466),o=t(6550),i=t(469),l=t(1980),d=t(7392),c=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,u]=f({queryString:t,groupId:r}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=d??g;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function I(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,v.jsx)(I,{...e,children:u(e.children)},String(n))}},4689:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"},1415:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/query-objects-a247f46cdce9eef285c3c3366f9dd62a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(7294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);