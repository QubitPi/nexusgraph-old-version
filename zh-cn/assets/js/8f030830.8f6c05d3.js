"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[618],{5201:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=s(5893),i=s(1151);const r={sidebar_position:3,title:"Development"},l=void 0,c={id:"development",title:"Development",description:"The following guide is intended to help developers who maintain or want to make changes to the Nexus Graph.",source:"@site/docs/development.md",sourceDirName:".",slug:"/development",permalink:"/zh-cn/docs/development",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/nexusgraph/tree/master/docs/docs/development.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Development"},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/zh-cn/docs/concept"},next:{title:"Design",permalink:"/zh-cn/docs/design"}},d={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting the Source Codes",id:"getting-the-source-codes",level:2},{value:"Configuring Environment Variables",id:"configuring-environment-variables",level:2},{value:"Installing Dependencies",id:"installing-dependencies",level:2},{value:"Starting Nexus Graph",id:"starting-nexus-graph",level:2},{value:"Starting Dev AI Server",id:"starting-dev-ai-server",level:3},{value:"Starting Graph API Services",id:"starting-graph-api-services",level:3},{value:"Starting Nexus Graph in Dev Mode",id:"starting-nexus-graph-in-dev-mode",level:3},{value:"Writing TypeDoc",id:"writing-typedoc",level:2},{value:"Local E2E Testing",id:"local-e2e-testing",level:2},{value:"Submitting Code",id:"submitting-code",level:2},{value:"Signing Commits with GPG Key",id:"signing-commits-with-gpg-key",level:3},{value:"Create GPG Key Locally",id:"create-gpg-key-locally",level:4},{value:"Configuring git to Use GPG Key",id:"configuring-git-to-use-gpg-key",level:4},{value:"Uploading GPG Key to GitHub",id:"uploading-gpg-key-to-github",level:4},{value:"Signing Commits",id:"signing-commits",level:5},{value:"Submitting",id:"submitting",level:3},{value:"CI/CD",id:"cicd",level:2},{value:"Neo4J Arc Library",id:"neo4j-arc-library",level:2},{value:"Load Neo4J Arc from Local",id:"load-neo4j-arc-from-local",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"React: Cannot assign to read only property <code>xxx</code> of object <code>#&lt;Object&gt;</code>",id:"react-cannot-assign-to-read-only-property-xxx-of-object-object",level:3},{value:"ESLint Reports False-Negative",id:"eslint-reports-false-negative",level:3},{value:"GitHub Actions Doesn&#39;t Start",id:"github-actions-doesnt-start",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The following guide is intended to help developers who maintain or want to make changes to the Nexus Graph."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Node 18 (Install instruction can be found ",(0,t.jsx)(n.a,{href:"https://deb.nodesource.com/",children:"here"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Yarn (",(0,t.jsx)(n.code,{children:"npm install --global yarn"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"For Mac",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Xcode CLI tools"}),": We'll need to first install Xcode CLI tools. Run this command and follow the instructions"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"xcode-select --install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Homebrew"}),": Install ",(0,t.jsx)(n.a,{href:"http://brew.sh",children:"Homebrew"}),", and then run the following command to install\n",(0,t.jsx)(n.a,{href:"https://formulae.brew.sh/formula/gnupg",children:"GPG"})," as we will ",(0,t.jsx)(n.a,{href:"#signing-commits-with-gpg-key",children:"need it later"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"brew install gnupg\n"})}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"getting-the-source-codes",children:"Getting the Source Codes"}),"\n",(0,t.jsxs)(n.p,{children:["To get started, clone the ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/nexusgraph",children:"repo"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:QubitPi/nexusgraph.git\ncd nexusgraph\n"})}),"\n",(0,t.jsx)(n.p,{children:"We're going to be working out of this repository for the remainder of the setup."}),"\n",(0,t.jsx)(n.h2,{id:"configuring-environment-variables",children:"Configuring Environment Variables"}),"\n",(0,t.jsxs)(n.admonition,{title:"Shortcut",type:"tip",children:[(0,t.jsxs)(n.p,{children:["Simply use the ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/nexusgraph/blob/master/.env.test",children:".env.dev"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"cp .env.test .env\n"})}),(0,t.jsx)(n.p,{children:"We can now skip the rest of the section. In case one needs more details, however, the details below discusses each them"})]}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsxs)(n.a,{href:"https://create-react-app.dev/docs/adding-custom-environment-variables/",children:[(0,t.jsx)(n.code,{children:".env"})," file"]})," which contains all ",(0,t.jsx)(n.strong,{children:"Dev"})," runtime variables Nexus Graph needs. The following table\nsummarizes all of the variables Nexus Graph possibily needs:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"Config Name"})}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"Required in Dev"})}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"Required in Test"})}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"Required in Prod"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"NLP_CLIENT"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"NLP_API_URL"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"GRAPH_API_CLIENT"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"GRAPH_API_ENDPOINT"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"SKIP_SIGN_IN"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"LOGTO_APP_ID"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"LOGTO_ENDPOINT_URL"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"LOGTO_API_RESOURCE_IDENTIFIER"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"LOGTO_SIGN_IN_CALLBACK_URL"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"LOGTO_SIGN_OUT_REDIRECT_URL"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"TEST_USER_EMAIL"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"TEST_USER_PASSWORD"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NLP_CLIENT"})," is the type of AI client for AI Named Entity Extraction. Allowed values are"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"JsonServerClient"})," is for dev and test"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TheresaClient"})," is our paid AI service"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NLP_API_URL"})," is the URL of AI Named Entity Extraction service"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GRAPH_API_CLIENT"})," is the type of Graph API client for CRUD operations. Allowed values are"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"JsonGraphQLServerClient"})," is for dev and test"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AstraiosGraphClient"})," is our paid Graph API serivce"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GRAPH_API_ENDPOINT"})," is the URL of the ",(0,t.jsx)(n.a,{href:"design#graph-api",children:"Graph API service"}),". Define the endpoint that sends GraphQL\nrequests to Astraios in our paid service."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://astraios.io/",children:"Astraios"})," is a JSR 370 web service template that lets us spin up model driven GraphQL or JSON API web\nservice with minimal effort."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Authentication: ",(0,t.jsx)(n.a,{href:"https://docs.logto.io/",children:"Logto"})," offers a comprehensive identity solution covering both the front and\nbackend, complete with pre-built infrastructure and enterprise-grade solutions. In the Nexus Graph we use Logto to\nverify that the user has logged in and automatically generate the user login page"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SKIP_SIGN_IN"})," is a flag variable which must be set to ",(0,t.jsx)(n.code,{children:"true"})," in Dev and ",(0,t.jsx)(n.code,{children:"false"})," in Test & Prod environments"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LOGTO_APP_ID"})," is the standard logto app ID"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LOGTO_ENDPOINT_URL"})," is the URL of our server that will receive the ",(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/webhooks/configure-webhooks-in-console/",children:"webhook"})," POST requests when the\nevent occurs."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LOGTO_API_RESOURCE_IDENTIFIER"})," is the ID of Logto API resource associated with the access token"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LOGTO_SIGN_IN_CALLBACK_URL"})," is the redirect URL after authentication"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LOGTO_SIGN_OUT_REDIRECT_URL"})," is, similarly, the redirect URL after logging out of Nexus Graph"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"TEST_USER_EMAIL"})," defines a user name dedicated to local login in test. ",(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/references/users/#username",children:"Email"})," is used for sign-in with\nusername and password."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"TEST_USER_PASSWORD"})," is used for sign-in with username and password. In Nexus Graph the ",(0,t.jsx)(n.strong,{children:"TEST_USER_PASSWORD"}),"\ndefines a password dedicated to local login"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installing-dependencies",children:"Installing Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Nexus Graph uses ",(0,t.jsx)(n.a,{href:"https://classic.yarnpkg.com/lang/en/docs/workspaces/",children:"yarn workspace"})," to manage different components.\nThe command below shall install all the dependencies and put them in ",(0,t.jsx)(n.code,{children:"node_modules"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once this command has finished we'll have Nexus Graph ready in development mode with all its required dependencies."}),"\n",(0,t.jsx)(n.h2,{id:"starting-nexus-graph",children:"Starting Nexus Graph"}),"\n",(0,t.jsx)(n.h3,{id:"starting-dev-ai-server",children:"Starting Dev AI Server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"yarn start:ai\n"})}),"\n",(0,t.jsxs)(n.p,{children:["NER data source is backed by ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/json-server",children:"json-server"})," mock. They can be viewed by the following 3 links:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"http://localhost:3001/nodes"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"http://localhost:3001/links"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"http://localhost:3001"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"starting-graph-api-services",children:"Starting Graph API Services"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"yarn start:graph-api\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Entering ",(0,t.jsx)(n.code,{children:"http://localhost:5000/"})," will open up the GraphiQL:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Error loading json-graphql-server-graphiql.png)",src:s(2461).Z+"",width:"2560",height:"984"})}),"\n",(0,t.jsx)(n.h3,{id:"starting-nexus-graph-in-dev-mode",children:"Starting Nexus Graph in Dev Mode"}),"\n",(0,t.jsxs)(n.p,{children:["Finally we can run the development server at ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"yarn start\n"})}),"\n",(0,t.jsx)(n.p,{children:"which Runs the app in the development mode. The page will reload if you make edits. You will also see any lint errors in\nthe console."}),"\n",(0,t.jsx)(n.h2,{id:"writing-typedoc",children:"Writing TypeDoc"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://nexusgraph.qubitpi.org/api",children:"nexusgraph API"})," page was automatically generated by ",(0,t.jsx)(n.a,{href:"https://typedoc.org/guides/overview/",children:"TypeDoc"}),", which parses the inline documentation\nof nexusgraph source code. To generated them locally"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd docs\nyarn typedoc\n"})}),"\n",(0,t.jsx)(n.p,{children:"We can have TypeDoc watch for changes from the command line by using"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn typedoc-watch\n"})}),"\n",(0,t.jsx)(n.h2,{id:"local-e2e-testing",children:"Local E2E Testing"}),"\n",(0,t.jsxs)(n.p,{children:["We use ",(0,t.jsx)(n.a,{href:"https://cypress.qubitpi.org/",children:"Cypress"})," for E2E testing."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reload environment variables for testing"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"cp .env.test .env\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#starting-nexus-graph",children:"Restart Nexus Graph"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open up ",(0,t.jsx)(n.a,{href:"https://docs.cypress.io/guides/overview/why-cypress",children:"Cypress End-to-End testing"})," dashboard"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"yarn cypress:open\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The E2E tests spins up an ",(0,t.jsx)(n.a,{href:"design#json-graphql-server",children:"in-memory database"})," to store the test graphs."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Happy building awesome knowledge graph app!"}),"\n",(0,t.jsx)(n.h2,{id:"submitting-code",children:"Submitting Code"}),"\n",(0,t.jsx)(n.h3,{id:"signing-commits-with-gpg-key",children:"Signing Commits with GPG Key"}),"\n",(0,t.jsx)(n.p,{children:"The purpose of GPG key is to sign the code for the authorship of our contributor."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Error loading gpg-example.png",src:s(1567).Z+"",width:"1000",height:"114"})}),"\n",(0,t.jsx)(n.p,{children:"This section teaches how to create a GPG key locally, upload it to GitHub, and use to sign future commits."}),"\n",(0,t.jsx)(n.h4,{id:"create-gpg-key-locally",children:"Create GPG Key Locally"}),"\n",(0,t.jsx)(n.p,{children:"In terminal, execute"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --full-generate-key\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["key size must be ",(0,t.jsx)(n.strong,{children:"4096"})," bits"]}),"\n",(0,t.jsx)(n.li,{children:"email must be the one associated with your GitHub account"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To obtain the GPG key ID created just now:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --list-secret-keys --keyid-format=long\n"})}),"\n",(0,t.jsx)(n.p,{children:"An example output might be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ gpg --list-secret-keys --keyid-format=long\n/Users/hubot/.gnupg/secring.gpg\n------------------------------------\nsec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]\nuid                          Hubot <hubot@example.com>\nssb   4096R/4BB6D45482678BE3 2016-03-10\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the example above, the ",(0,t.jsx)(n.strong,{children:"GPG key ID is 3AA5C34371567BD2"}),"; ",(0,t.jsx)(n.em,{children:"we will be using this key ID in the following\ndiscussion"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"In case we would want to delete that key, we could do so by"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --delete-secret-keys 3AA5C34371567BD2\n"})})]}),"\n",(0,t.jsx)(n.h4,{id:"configuring-git-to-use-gpg-key",children:"Configuring git to Use GPG Key"}),"\n",(0,t.jsxs)(n.p,{children:["We now instruct ",(0,t.jsx)(n.code,{children:"git"})," to pick up the GPG key at every git commit:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git config --global user.signingkey 3AA5C34371567BD2\n"})}),"\n",(0,t.jsx)(n.h4,{id:"uploading-gpg-key-to-github",children:"Uploading GPG Key to GitHub"}),"\n",(0,t.jsx)(n.p,{children:"Printout the GPG key in ASCII armor format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --armor --export 3AA5C34371567BD2\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Copy the command output, i.e. the GPG key, including the ",(0,t.jsx)(n.strong,{children:"-----BEGIN PGP PUBLIC KEY BLOCK-----"}),", the\n",(0,t.jsx)(n.strong,{children:"-----END PGP PUBLIC KEY BLOCK-----"}),", as well as the contents in between."]}),"\n",(0,t.jsxs)(n.p,{children:["Then following the ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account",children:"official documentation"})," to upload the GPG key onto your GitHub account."]}),"\n",(0,t.jsx)(n.h5,{id:"signing-commits",children:"Signing Commits"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["If this is your first time submitting code using ",(0,t.jsx)(n.em,{children:"git"}),", make sure to bind your GitHub username and account email first:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'git config --global user.name "<username>"\ngit config --global user.email "<email>"\n'})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Substitute ",(0,t.jsx)(n.code,{children:"<username>"})," and ",(0,t.jsx)(n.code,{children:"<email>"})," with your account info accordingly"]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"To commit with GPG-signed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'git commit -S -m "<commit message>"\n'})}),"\n",(0,t.jsx)(n.p,{children:"where"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-S"})," tells git to sign the commit with GPG key"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<commit message>"})," should be adjusted accordingly"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["If the commit command above errors with ",(0,t.jsx)(n.strong,{children:"gpg: signing failed: Inappropriate ioctl for device"})," message,\n",(0,t.jsx)(n.a,{href:"https://github.com/keybase/keybase-issues/issues/2798#issue-205008630",children:"execute"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export GPG_TTY=$(tty)\n"})}),(0,t.jsx)(n.p,{children:"then re-run the commit"})]}),"\n",(0,t.jsx)(n.h3,{id:"submitting",children:"Submitting"}),"\n",(0,t.jsx)(n.p,{children:"Before committing your code, please run the following checks locally in order to give ourselves better confidence that\nthe code will pass the automated checks online:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Prettier our code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx prettier --write .\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check code style using ESLint:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx eslint .\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["ESLint currently does not run on documentation source codes, i.e. ",(0,t.jsx)(n.code,{children:"/docs"})]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run all tests"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn test\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cicd",children:"CI/CD"}),"\n",(0,t.jsxs)(n.p,{children:["We use ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions",children:"GitHub Actions"})," for CI/CD, which contains 3 parts in the following order:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Code style check"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hashicorp-aws.com/blog/yml-and-md-style-checks",children:"YAML & Markdown style checks"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hashicorp-aws.com/blog/ui-code-style",children:"React & TypeScript code style checks by Prettier and ESLint"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Tests"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hashicorp-aws.com/blog/ui-unit-test",children:"Unit tests"})}),"\n",(0,t.jsxs)(n.li,{children:["E2E tests via ",(0,t.jsx)(n.a,{href:"https://cypress.qubitpi.org/",children:"Cypress"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/nexusgraph/blob/master/packages/nexusgraph-db/src/graph/astraios/AstraiosGraphClient.ts#L28-L67",children:"JSON schema"}),"\ntests"]}),"\n",(0,t.jsxs)(n.li,{children:["Lighthouse test, an idea learned from\n",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/blob/main/.github/workflows/lighthouse-report.yml",children:"Docusaurus"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://hashicorp-aws.com/blog/npm-release",children:"Release to NPM"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Each part doesn't run until its previous dependency finishes successfully"}),"\n",(0,t.jsx)(n.h2,{id:"neo4j-arc-library",children:"Neo4J Arc Library"}),"\n",(0,t.jsx)(n.h3,{id:"load-neo4j-arc-from-local",children:"Load Neo4J Arc from Local"}),"\n",(0,t.jsxs)(n.p,{children:["Nexus Graph's graphing capabilities is externalized to\n",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/neo4j-browser/tree/master/src/neo4j-arc",children:"Neo4J's graphing library"}),". When we update the\nlibrary and would like to see its immediate effects, we could have Nexus Graph manually depend on the local version:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/QubitPi/neo4j-browser.git\ncd neo4j-browser/src/neo4j-arc\nyarn && yarn build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In nexusgraph, delete the ",(0,t.jsx)(n.code,{children:'"neo4j-devtools-arc": "^x.y.z",'})," from ",(0,t.jsx)(n.code,{children:"dependencies"})," section in\n",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/nexusgraph/blob/master/packages/nexusgraph-graph/package.json",children:(0,t.jsx)(n.code,{children:"packages/nexusgraph-graph/package.json"})}),"\nand run"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add /absolute/path/to/neo4j-browser/src/neo4j-arc/\nyarn\nyarn start\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["When we are done, do not forget to put ",(0,t.jsx)(n.code,{children:'"neo4j-devtools-arc": "^x.y.z"'})," back into ",(0,t.jsx)(n.code,{children:"package.json"})]})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.h3,{id:"react-cannot-assign-to-read-only-property-xxx-of-object-object",children:["React: Cannot assign to read only property ",(0,t.jsx)(n.code,{children:"xxx"})," of object ",(0,t.jsx)(n.code,{children:"#<Object>"})]}),"\n",(0,t.jsxs)(n.p,{children:["This was caused by immer's ",(0,t.jsx)(n.code,{children:"produce"})," function which builds read-only deep copy of object. In Nexus Graph, all redux\nstates are make immutable using ",(0,t.jsx)(n.a,{href:"https://immerjs.github.io/immer/",children:"immer"}),", because, by experience, immutable states prevents bugs. As a result, all\nin-memory state mutations should utilize our dedicated ",(0,t.jsx)(n.code,{children:"immutable.ts"})," module. Failed to do that could result in the\nerror above because that indictes one is directly mutating our immutable states"]}),"\n",(0,t.jsx)(n.h3,{id:"eslint-reports-false-negative",children:"ESLint Reports False-Negative"}),"\n",(0,t.jsx)(n.p,{children:"Suppose we have the following TypeScript code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"node.radius + 25;\n"})}),"\n",(0,t.jsx)(n.p,{children:"but ESLint complains that"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"error  Operands of '+' operation with any is possible only with string, number, bigint or any  @typescript-eslint/restrict-plus-operands\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And we are sure that ",(0,t.jsx)(n.code,{children:"node.radius"})," by definition is a ",(0,t.jsx)(n.code,{children:"number"}),". This could happend due to the incorrect import, which\nresults ",(0,t.jsx)(n.code,{children:"node"})," type not properly imported. As a result, TypeScript sees ",(0,t.jsx)(n.code,{children:"node.radius"})," as to type ",(0,t.jsx)(n.code,{children:"any"})," because it\ndoesn't know what type ",(0,t.jsx)(n.code,{children:"node"})," is"]}),"\n",(0,t.jsx)(n.h3,{id:"github-actions-doesnt-start",children:"GitHub Actions Doesn't Start"}),"\n",(0,t.jsx)(n.p,{children:"If all syntax are correct, simply cancelled the job and re-run. It might be something on GitHub's end."})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1567:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gpg-example-a82f69703583ff9b63b7c303c553e80b.png"},2461:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/json-graphql-server-graphiql-436bb42ce960b54445d70d86f8056947.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var t=s(7294);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);