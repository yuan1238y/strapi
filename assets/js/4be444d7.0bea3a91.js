"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[221],{9791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(4848),i=n(8453);const o={title:"FE Coding Guidelines"},a=void 0,r={id:"guides/fe-coding-guidelines",title:"FE Coding Guidelines",description:"Coding Style",source:"@site/docs/guides/04-fe-coding-guidelines.mdx",sourceDirName:"guides",slug:"/guides/fe-coding-guidelines",permalink:"/guides/fe-coding-guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/guides/04-fe-coding-guidelines.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"FE Coding Guidelines"},sidebar:"guides",previous:{title:"Typescript",permalink:"/guides/typescript"},next:{title:"Setup",permalink:"/guides/e2e/setup"}},l={},c=[{value:"Coding Style",id:"coding-style",level:2},{value:"Application Structure",id:"application-structure",level:3},{value:"Exports",id:"exports",level:3},{value:"Utilities / Helpers",id:"utilities--helpers",level:3},{value:"Components &amp; Hooks",id:"components--hooks",level:3},{value:"Memoization",id:"memoization",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"A special note on <code>lodash</code>",id:"a-special-note-on-lodash",level:3},{value:"Adding new dependencies",id:"adding-new-dependencies",level:3},{value:"Data fetching",id:"data-fetching",level:2},{value:"V4",id:"v4",level:3},{value:"Example",id:"example",level:4},{value:"V5",id:"v5",level:3},{value:"Managing state",id:"managing-state",level:2},{value:"Local / Global / URL state",id:"local--global--url-state",level:3},{value:"Avoid effects",id:"avoid-effects",level:3},{value:"Using context effectively",id:"using-context-effectively",level:3},{value:"Useful articles",id:"useful-articles",level:3},{value:"Unit Testing",id:"unit-testing",level:2},{value:"When &amp; why should you write tests?",id:"when--why-should-you-write-tests",level:3},{value:"What makes a good test?",id:"what-makes-a-good-test",level:3},{value:"Mocking",id:"mocking",level:3},{value:"Useful Articles",id:"useful-articles-1",level:3},{value:"A11y",id:"a11y",level:2},{value:"Conventions",id:"conventions",level:2},{value:"Submitting a PR",id:"submitting-a-pr",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"coding-style",children:"Coding Style"}),"\n",(0,s.jsx)(t.h3,{id:"application-structure",children:"Application Structure"}),"\n",(0,s.jsx)(t.p,{children:"The FE of Strapi aims to be a domain driven application such as we heavily utilise the concept of\nnested routes:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"pages/\n\u251c\u2500 index.tsx\n\u251c\u2500 settings/\n\u2502  \u251c\u2500 pages/\n\u2502  \u2502  \u251c\u2500 index.tsx\n\u2502  \u2502  \u251c\u2500 users/\n\u2502  \u2502  \u251c\u2500 roles/\n\u2502  \u2502  \u2502  \u251c\u2500 create.tsx\n\u2502  \u2502  \u2502  \u251c\u2500 :id.tsx\n\u2502  \u2502  \u2502  \u251c\u2500 index.tsx\n"})}),"\n",(0,s.jsx)(t.p,{children:"As part of this effort, assuming a component is not used anywhere else it should live as close as\npossible to the section of the app it's used in:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"pages/\n\u251c\u2500 index.tsx\n\u251c\u2500 settings/\n\u2502  \u251c\u2500 components/\n\u2502  \u2502  \u251c\u2500 SettingsNavigation.tsx\n\u2502  \u251c\u2500 hooks/\n\u2502  \u2502  \u251c\u2500 useSettings.ts\n\u2502  \u251c\u2500 pages/\n\u2502  \u2502  \u251c\u2500 index.tsx\n\u2502  \u2502  \u251c\u2500 users/\n\u2502  \u2502  \u251c\u2500 roles/\n\u2502  \u2502  \u2502  \u251c\u2500 create.tsx\n\u2502  \u2502  \u2502  \u251c\u2500 :id.tsx\n\u2502  \u2502  \u2502  \u251c\u2500 index.tsx\n"})}),"\n",(0,s.jsx)(t.p,{children:"When components/hooks etc. are required higher in the tree, we can subsequently move them higher up\nas necessary. But we strive for colocation."}),"\n",(0,s.jsx)(t.h3,{id:"exports",children:"Exports"}),"\n",(0,s.jsxs)(t.p,{children:["Prefer named exports over default exports. Why? Because Strapi is a ",(0,s.jsx)(t.em,{children:"very"})," large codebase. If you\nexport something as ",(0,s.jsx)(t.code,{children:"default"})," someone can import it with a different name:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"// button.tsx\n\nconst MyButton = (props) => <button {...props} />;\n\nexport default MyButton;\n\n// form.tsx\nimport Button from './button';\n\n// NAMED EXPORT\nexport const Form = () => <Button type=\"button\">Submit</Button>;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Above is a simple component for illustration purposes, but you'd be likely to use the ",(0,s.jsx)(t.code,{children:"MyButton"}),"\ncomponent in ",(0,s.jsx)(t.em,{children:"a lot"})," of places, so what happens if you want to replace all instances with a new v2\nButton? If the naming is not as consistent, it's typically a lot more frustrating & can lead to\nbugs."]}),"\n",(0,s.jsx)(t.h3,{id:"utilities--helpers",children:"Utilities / Helpers"}),"\n",(0,s.jsxs)(t.p,{children:["When you need a utility function ask yourself a question \u2013 do I need this ",(0,s.jsx)(t.em,{children:"anywhere"})," else? If you\ndon't (which is fairly typical) include it in the file you're using it. As a guide, we expect\nanything exported to be unit-tested and if a utility or hook is unique and bespoke to the component\nyou're creating then it's advised to test that code in the context of said component, this is\ncovered in the Testing guides below."]}),"\n",(0,s.jsxs)(t.p,{children:["If you do need to use the utility elsewhere then follow the same practices shown in\n",(0,s.jsx)(t.a,{href:"#application-structure",children:"Application Structure"})," keep it as close to where it's used as possible.\nAvoid re-exporting them from a generic ",(0,s.jsx)(t.code,{children:"index"})," file. However, you might find it useful to group them\nunder a generic file name such as ",(0,s.jsx)(t.code,{children:"strings.ts"})," which would include all the ",(0,s.jsx)(t.code,{children:"string"})," utils you have."]}),"\n",(0,s.jsx)(t.h3,{id:"components--hooks",children:"Components & Hooks"}),"\n",(0,s.jsx)(t.p,{children:"With components and hooks, to improve code discoverability, opt for this pattern instead:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"hooks/\n\u251c\u2500 tests/\n\u2502  \u251c\u2500 useContentManager.test.ts\n\u251c\u2500 useContentManager.ts\n"})}),"\n",(0,s.jsx)(t.h3,{id:"memoization",children:"Memoization"}),"\n",(0,s.jsxs)(t.p,{children:["Premature optimisation is the root of all evil. Performance of the application ",(0,s.jsx)(t.em,{children:"is"})," important\nhowever it should be measurable before we attempt to solve the issue as these\nfunctions ",(0,s.jsx)(t.em,{children:"are not free."})," Take this example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"const FormButton = () => {\n  const handleSubmit = useCallback((entity) => {\n    post('/entity/create', {\n      entity,\n    });\n  }, []);\n\n  return <Button onClick={handleSubmit}>Create Entity</Button>;\n};\n\nconst Button = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The component we're passing to is ",(0,s.jsx)(t.em,{children:"very"})," simple & ",(0,s.jsx)(t.code,{children:"useCallback"})," is unnecessary here. Because we do\nnot need the function identity to be stable. If we were to use the callback in a ",(0,s.jsx)(t.code,{children:"useEffect"})," hook\nthen yes, we would want the function to be stable otherwise every render would cause the ",(0,s.jsx)(t.code,{children:"useEffect"}),"\nhook to run which could be problematic."]}),"\n",(0,s.jsxs)(t.p,{children:["So what about ",(0,s.jsx)(t.code,{children:"useMemo"}),". Same thing, it's for heavy computational processes e.g. not this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"const Component = ({ entities = [] }) => {\n  const entityLength = useMemo(() => entities.length, [entities]);\n  //...\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The above function isn't expensive but more importantly we don't know what impact it has without\nmeasuring it. Therefore, avoid using ",(0,s.jsx)(t.code,{children:"useCallback"})," and ",(0,s.jsx)(t.code,{children:"useMemo"})," unless you ",(0,s.jsx)(t.em,{children:"know"})," you need it."]}),"\n",(0,s.jsx)(t.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["Generally speaking, always opt to use native-browser APIs where possible over library code, the\nplatform is powerful and leveraging it correctly will handle ",(0,s.jsx)(t.em,{children:"a lot"})," of edge cases you probably\nwon't have considered."]}),"\n",(0,s.jsxs)(t.p,{children:["One example of this would be\n",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/structuredClone",children:(0,s.jsx)(t.code,{children:"structuredClone"})})," which is a\ncompletely drop-in solution for ",(0,s.jsx)(t.code,{children:"lodash/cloneDeep"}),". If you're not sure whether you can use a browser\nAPI feel free to use ",(0,s.jsx)(t.a,{href:"https://caniuse.com/",children:"caniuse.com"}),", a powerful resource that gives you a\nbreakdown of the availability of an API across browsers:"]}),"\n",(0,s.jsx)("img",{src:"/img/guides/fe-guidelines/caniuse-example.png",alt:"A screenshot of caniuse.com on the structureClone API"}),"\n",(0,s.jsxs)(t.p,{children:["By default, we use ",(0,s.jsx)(t.code,{children:"browserslist"})," to define the browsers we support, they're defined as:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"last 3 major versions\nFirefox ESR\nlast 2 Opera versions\nnot dead\n"})}),"\n",(0,s.jsxs)(t.p,{children:["It's important to note that this informs the JS transpilation step by esbuild, so if a browser does\nnot support it, it ",(0,s.jsx)(t.em,{children:"may"})," be polyfilled."]}),"\n",(0,s.jsxs)(t.h3,{id:"a-special-note-on-lodash",children:["A special note on ",(0,s.jsx)(t.code,{children:"lodash"})]}),"\n",(0,s.jsxs)(t.p,{children:["We target modern browsers, typically speaking these browsers have all the functionality lodash\nprovides natively, albeit there may be some discrepancies between the functionality or API\nsignature. Because of this and our general view of shipping as little javascript to the client as\npossible we should ",(0,s.jsxs)(t.strong,{children:["never be adding a ",(0,s.jsx)(t.code,{children:"lodash"})," function to our code"]}),". In addition, when working on\nthe codebase everyone should strive to remove the instances we currently have."]}),"\n",(0,s.jsxs)(t.p,{children:["A common use case is the ",(0,s.jsx)(t.code,{children:"get"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import get from 'lodash/get';\n\nconst extractDeepAttribute = (schema: object, path: string[]) => {\n  return get(schema, ['attributes', ...path], {});\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"But if we zoom out we can begin to question a few things:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"why are we extracting something so deep here?"}),"\n",(0,s.jsx)(t.li,{children:"are my data structures the issue? i.e. to complex"}),"\n",(0,s.jsxs)(t.li,{children:["can i just use\n",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",children:(0,s.jsx)(t.code,{children:"optionalChaining"})}),"?"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Typically, I think you'll find that rethinking how the code works will reveal an easier to manage\ndata structure that from there you can probably use ",(0,s.jsx)(t.code,{children:"optionalChaining"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you're struggling to convert a ",(0,s.jsx)(t.code,{children:"lodash"})," usage to native code, check out\n",(0,s.jsx)(t.a,{href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore",children:"this helpful guide"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"adding-new-dependencies",children:"Adding new dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes you require a new dependency, it happens, it's common. Third party library code is\n",(0,s.jsx)(t.em,{children:"fantastic"})," because typically it's somewhat battle tested in production environments and in some\ncircumstances where the concept is complicated e.g. ",(0,s.jsx)(t.code,{children:"fractional-indexing"})," it really is easier to use\na library than re-write and maintain in our application. It's a case by case basis therefore, when\nadding a new dependency to the codebase you should do the following:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Discuss it with at least one other developer from a different squad \u2013 most appropriately through\nthe PR"}),"\n",(0,s.jsx)(t.li,{children:"Add as a talking point to the next FE sync so other developers have visibility"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You'd be surprised how often a library can be replaced with a native API and through thinking and\nacting in this way we hope to keep our dependency surface as small as possible."}),"\n",(0,s.jsx)(t.h2,{id:"data-fetching",children:"Data fetching"}),"\n",(0,s.jsx)(t.h3,{id:"v4",children:"V4"}),"\n",(0,s.jsxs)(t.p,{children:["Whilst we are actively developing V4 of the CMS we should ",(0,s.jsx)(t.em,{children:"always"})," be using ",(0,s.jsx)(t.code,{children:"react-query"}),"'s hooks to\nmanage the fetching and mutation of data in conjunction with ",(0,s.jsx)(t.code,{children:"useFetchClient"}),". This is because\n",(0,s.jsx)(t.code,{children:"react-query"})," caches our data-fetching meaning multiple calls are not necessarily made unless a\nmutation occurs as well as handling various intermittent states and events during the fetching\nlifecycle."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["We're using ",(0,s.jsx)(t.code,{children:"react-query"})," version 3, see the specific docs \u2013 ",(0,s.jsx)(t.a,{href:"https://tanstack.com/query/v3/docs/react/overview",children:"https://tanstack.com/query/v3/docs/react/overview"})]})}),"\n",(0,s.jsx)(t.p,{children:"There are a few guidelines to keep in mind when writing your query-keys"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Use the URL fragments from the called URL e.g ",(0,s.jsx)(t.code,{children:"/admin/content-manger/:id/stages -> ['content-manager', id, 'stages']"})," with the exception of ",(0,s.jsx)(t.code,{children:"admin"})]}),"\n",(0,s.jsx)(t.li,{children:"All ee calls should be prefixed with ee, to be able to invalidate it all at once"}),"\n",(0,s.jsx)(t.li,{children:"All dynamic variables need to be part of the dependency array"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can read more on query-keys for ",(0,s.jsx)(t.code,{children:"react-query"})," ",(0,s.jsx)(t.a,{href:"https://tanstack.com/query/v3/docs/react/guides/query-keys",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"const useLicenseLimits = () => {\n  const { get } = useFetchClient();\n\n  const { data: license } = useQuery(['ee', 'license-limit-info'], async () => {\n    const {\n      data: { data },\n    } = await get('/admin/license-limit-information');\n\n    return data;\n  });\n\n  return { license };\n};\n"})}),"\n",(0,s.jsx)(t.h3,{id:"v5",children:"V5"}),"\n",(0,s.jsxs)(t.p,{children:["In V5 we'll be looking at using ",(0,s.jsx)(t.code,{children:"react-router-dom"}),"'s loaders function to avoid data-waterfalls //\nrender as you fetch. For mutations we'll be using ",(0,s.jsx)(t.code,{children:"@redux/toolkit"})," and subsequently it's caching\nmechanisms making ",(0,s.jsx)(t.code,{children:"react-query"})," redundant."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"\ud83d\udea7 This section will be filled in further upon delivery of v5."})}),"\n",(0,s.jsx)(t.h2,{id:"managing-state",children:"Managing state"}),"\n",(0,s.jsx)(t.h3,{id:"local--global--url-state",children:"Local / Global / URL state"}),"\n",(0,s.jsxs)(t.p,{children:["In the following paragraph we discuss three different types of state \u2013 Local which commonly is\ndefined by using ",(0,s.jsx)(t.code,{children:"React.useState"}),", Global which in our case involves using ",(0,s.jsx)(t.code,{children:"redux"})," and URL based\nstate e.g. a path parameter or search params."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Local State"})}),"\n",(0,s.jsx)(t.p,{children:"This is the typical place to start when you need to make your app \u201creact\u201d to a change, for example,\nthrough event inputs e.g \u201cA user presses a button and a modal opens\u201d:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import { useState } from 'react';\n\nconst MyButton = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleClick = () => setIsOpen((currOpen) => !currOpen);\n\n  return (\n    <button type=\"button\" onClick={handleClick}>\n      {isOpen ? 'Close modal' : 'Open modal'}\n    </button>\n  );\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"Above is a simple example of using local state, it's isolated to the component and we're not\ntypically passing this further down the tree. It's important to remember that you can very easily\nderive state from either your current state or props that are passed e.g. you render a table of\nentries and you want to know the count of entries that are \u201cpublished\u201d you could create a new state\nvalue, but that's not necessary, we can do a calculation because the root of the data is based off\nthe props thus when the props update so will the count:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"const MyTable = ({ entries = [] }) => {\n  const publishedCount = entries.filter((e) => e.isPublished).length;\n\n  return (\n    <div>\n      <p>You have {publishedCount} published entries</p>\n      <List entries={entries} />\n    </div>\n  );\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"Always aim to derive state as opposed to setting state where possible!"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Global state (redux)"})}),"\n",(0,s.jsx)(t.p,{children:"When's the right time to use global state? Well first if we look at how you can pass state around\nyour app we first look at prop drilling. This can become verbose and inconvenient when you start to\npass it down past the first child. Often composability can be incredibly useful for these scenarios\nwhere this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import { useState } from 'react';\n\nconst App = () => {\n  const [someState, setSomeState] = useState('some state');\n  return (\n    <>\n      <Header someState={someState} onStateChange={setSomeState} />\n      <LeftNav someState={someState} onStateChange={setSomeState} />\n      <MainContent someState={someState} onStateChange={setSomeState} />\n    </>\n  );\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"can easily become this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import { useState } from 'react';\n\nconst App = () => {\n  const [someState, setSomeState] = useState('some state');\n  return (\n    <>\n      <Header>\n        <Logo someState={someState} />\n        <Settings onStateChange={setSomeState} />\n      </Header>\n      <LeftNav>\n        <SomeLink someState={someState} />\n        <SomeOtherLink someState={someState} />\n        <Etc someState={someState} />\n      </LeftNav>\n      <MainContent>\n        <SomeSensibleComponent someState={someState} />\n        <AndSoOn someState={someState} />\n      </MainContent>\n    </>\n  );\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["But in the above example, we're still passing it around. Other times composability will not help you\nbecause it doesn't make sense or perhaps the data is fetched from one part of an application and\nanother requires it later / now. For data fetching you could consider using something like\n",(0,s.jsx)(t.code,{children:"react-query"})," because it has it's own data caching system. Other times such as the Content Manager's\nedit view, it's managing complex nested browser form state and in these circumstances you'd use a\nglobal state management solution like redux."]}),"\n",(0,s.jsx)(t.p,{children:"The other plus side to a global state manager like redux is that it's contained, it's easily\ndebuggable because all the state & changes can be monitored closely and reviewed piece by piece. It\nalso enforces uni-directional data flows & unlocks powerful features such as \u201credo/undo\u201d."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"URL state"})}),"\n",(0,s.jsxs)(t.p,{children:["If we have local, derived & global state then why would we want URL state? Consider this, you've\ncreated a very complicated view of your a table, it has the exact columns you want to show and how\nto show them and you need to show this someone page 3 \u2013 but they're not near you. This is where URL\nstate comes in. If we store the pagination state in the URL we can ",(0,s.jsx)(t.em,{children:"easily"})," share the exact page of\na table. If we store the sorting & filtering of the table then anyone can see the view you're\ndirectly on."]}),"\n",(0,s.jsx)(t.p,{children:"The bottom line is \u2013 global & local state do not transcend the machine you're working on. In all\nreality, this is typically how web apps worked before the javascript ecosystem \u201cgot big\u201d and most\nimportantly, we're just leaning on the platform as much as possible to do all our heavy lifting\nwhilst giving our users a 10x better experience."}),"\n",(0,s.jsx)(t.h3,{id:"avoid-effects",children:"Avoid effects"}),"\n",(0,s.jsx)(t.p,{children:"Effects are tricky, when should you use them? React's documentation describes them as an escape\nhatch to step outside of the react paradigm to sync with \u201cexternal\u201d systems such as the network of\nDOM. If you're using them to make changes to your component code or respond to user-events then\nyou've probably made a mistake in your code and you should review this. If you're struggling to work\nwith effects and worry you're using too many of them, check out the react docs."}),"\n",(0,s.jsxs)(t.p,{children:["Overall, we advise you avoid effects where you can, especially for data-fetching when you really get\ninto it, it's not a trivial problem to circumvent and there's a reason why we recommend using a\ndata-fetching library like ",(0,s.jsx)(t.code,{children:"react-query"})," or ",(0,s.jsx)(t.code,{children:"@redux/toolkit"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"using-context-effectively",children:"Using context effectively"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"React.Context"})," is another powerful tool to avoid prop drilling and employ a version of global\nstate, after all, ",(0,s.jsx)(t.code,{children:"redux"})," is based on ",(0,s.jsx)(t.code,{children:"React.Context"}),". But knowing when to use it is important. We\nadvise avoiding it for complex nested data-structures like the ",(0,s.jsx)(t.code,{children:"content-manger"})," edit view because\ncontext has no selector pattern (at time of writing) which means one change to the context will\nre-render every component connected \u2013 this could be expensive. What it's great for is complex\ncomponents using composable design, take this simplified example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"// Table.tsx\nimport { useContext, createContext } from 'react'\n\nconst TableContext = createContext()\n\nconst useTableContext = () => useContext(TableContext)\n\nconst Root = ({ isLoading, children }) => {\n\tconst contextValue = useMemo(() => ({ isLoading }), [isLoading])\n\n\treturn (\n\t\t<TableContext.Provider value={contextValue}>\n\t\t\t{children}\n\t\t</TableContext.Provider>\n\t)\n}\n\nconst Loading = () => {\n\tconst { isLoading } = useTableContext()\n\n\tif(!isLoading){\n\t\treturn null\n\t}\n\n\treturn (\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\tloading...\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t)\n}\n\nexport const Table = {\n\t\tRoot,\n\t\tLoading,\n}\n\n// something-else.tsx\nimport { useQuery } from 'react-query'\nimport { useFetchClient } from '@strapi/helper-plugin'\n\nimport { Table } from './Table'\n\nconst MyPage = () => {\n\tconst { get } = useFetchClient()\n\n\tconst { isLoading, data } = useQuery(async () => {\n\t\tconst { data } = await get(ENDPOINT)\n\t\treturn data\n\t})\n\n\treturn (\n\t\t<Table.Root isLoading={isLoading}>\n\t\t\t<Table.Loading />\n\t\t\t{data.map(datum => <MyCustomRow {...datum} />}\n\t\t</Table.Root>\n\t)\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the above example we don't need to worry about when to render the loading state because the table\nextracts all this and we can focus on composing our views in a readable manor."}),"\n",(0,s.jsx)(t.h3,{id:"useful-articles",children:"Useful articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://kentcdodds.com/blog/application-state-management-with-react",children:"https://kentcdodds.com/blog/application-state-management-with-react"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://react.dev/learn/you-might-not-need-an-effect",children:"https://react.dev/learn/you-might-not-need-an-effect"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"unit-testing",children:"Unit Testing"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"We'll write a section on E2E tests when we're there."})}),"\n",(0,s.jsx)(t.h3,{id:"when--why-should-you-write-tests",children:"When & why should you write tests?"}),"\n",(0,s.jsxs)(t.p,{children:["As a rule of thumb you should add tests \u2013 whenever you add ",(0,s.jsx)(t.em,{children:"new"})," code. It's even better if you add\nthem when refactoring and you notice the tests are either \u201clight\u201d or non-existent. They're\nincredibly valuable in stopping accidental regressions (which happen and that's okay). No test suite\nis perfect and there's always room to improve. If you're fixing a bug consider writing a test that\naddresses the issue you're trying to solve to assert it's failing & then you have an automated way\nto confirm your fix works as expected."]}),"\n",(0,s.jsx)(t.h3,{id:"what-makes-a-good-test",children:"What makes a good test?"}),"\n",(0,s.jsxs)(t.p,{children:["Good FE tests avoid testing implementation details, the tests often break when refactoring code in\nan arbitrary manor whilst not actually showing issues when a user interacts with the component. This\nis why we aim to test our components as if we're a user, it supports our ethos of test writing\nshould give us confidence that our application will work when a ",(0,s.jsx)(t.em,{children:"user"})," uses it. Because we're using\nthe Testing Library suite of tools, they have an incredibly\n",(0,s.jsx)(t.a,{href:"https://testing-library.com/docs/queries/about/#priority",children:"handy document"})," surrounding what order of\nqueries to try and use. The main takeaway would be to try and avoid using ",(0,s.jsx)(t.code,{children:"getByTestId"})," where\npossible, it should be considered a last resort because it doesn't test any of the user\nimplementations and more than likely you're testing code that is not visible to the user correctly\nand in that scenario we should be asking \u201cwhy is this necessary?\u201d."]}),"\n",(0,s.jsxs)(t.p,{children:["Also, avoid snapshotting the DOM except for ",(0,s.jsx)(t.em,{children:"small"})," circumstances, snapshotting is great for\ndata-structures where it's easy to skim and understand, it's also great for analysing a very small\ncomponent e.g. an ",(0,s.jsx)(t.code,{children:"svg"})," with a single ",(0,s.jsx)(t.code,{children:"path"}),". However, often we're testing very large complicated\ncompositions of components and the snapshot of said component is typically very large and hard for a\ndeveloper to skim and understand the impact of their changes. If we're being honest with ourselves,\nno one reviews should enormous snapshot changes either."]}),"\n",(0,s.jsx)(t.h3,{id:"mocking",children:"Mocking"}),"\n",(0,s.jsx)(t.p,{children:"Avoid it if you can."}),"\n",(0,s.jsxs)(t.p,{children:["Although realistically, it's not always possible. Lets first look at API mocking; try to avoid\nmocking your \u201cfetch\u201d library whether that's ",(0,s.jsx)(t.code,{children:"react-query"})," or ",(0,s.jsx)(t.code,{children:"axios"})," or native fetch. It makes a\nbrittle test and doesn't behave 1:1 as the library would with the network request. Instead, prefer\nusing Mock Service Worker (",(0,s.jsx)(t.a,{href:"https://mswjs.io/",children:"MSW"}),") to mock/intercept the API request calls. The\nlargest benefit is because all we're doing is locating our API responses in one space that can be\nshared across tests to avoid reimplementation and therefore less work to edit them should the API\nresponse change."]}),"\n",(0,s.jsxs)(t.p,{children:["When looking at ",(0,s.jsx)(t.code,{children:"module"})," mocking:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"jest.mock('@strapi/helper-plugin', () => ({\n  ...jest.requireActual('@strapi/helper-plugin'),\n  useNotification: jest.fn(() => ({\n    toggleNotification: jest.fn(),\n  })),\n}));\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We should continue to avoid it where possible, in the above example there's no real reason to mock\n",(0,s.jsx)(t.code,{children:"useNotification"}),", it's more than likely the wrapper just needed the correct Provider to be added to\navoid any errors and more importantly we're now not able to test our notification is visible to the\nuser \u2013 testing it's fired is an implementation detail, how can we be sure it's visible?"]}),"\n",(0,s.jsxs)(t.p,{children:["If you do mock a module try to create a manual mock instead under the ",(0,s.jsx)(t.code,{children:"__mocks__"})," folder if\npossible."]}),"\n",(0,s.jsx)(t.h3,{id:"useful-articles-1",children:"Useful Articles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://kentcdodds.com/blog/testing-implementation-details",children:"https://kentcdodds.com/blog/testing-implementation-details"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://testing-library.com/docs/queries/about/#priority",children:"https://testing-library.com/docs/queries/about/#priority"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"a11y",children:"A11y"}),"\n",(0,s.jsxs)(t.p,{children:["Semantics are important for users, just because the application is \u201cnot on the web\u201d does not mean\nour users are \u201cfully abled\u201d (do not have any type of disability). Therefore when building UI aim to\nuse the correct semantic elements in the correct places, typically we use the ",(0,s.jsx)(t.code,{children:"design-system"})," to\nbuild UI in the CMS, so most of the accessibility work is done there. But, accessibility is not easy\n\u2013 this is why we test from a user perspective as described in the \u201cTesting\u201d section. If you're not\nsure about accessibility patterns check out these resources:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/",children:"https://www.w3.org/WAI/ARIA/apg/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://webaim.org/",children:"https://webaim.org/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.a11yproject.com/",children:"https://www.a11yproject.com/"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"conventions",children:"Conventions"}),"\n",(0,s.jsx)(t.h3,{id:"submitting-a-pr",children:"Submitting a PR"}),"\n",(0,s.jsx)(t.p,{children:"When submitting an FE related PR ensure you've done the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Follow the template, especially including a clear description, it's a history for future\ndevelopers understanding the context around a decision."}),"\n",(0,s.jsxs)(t.li,{children:["Update or add tests for your relevant code, for more help on this consult the\n",(0,s.jsx)(t.a,{href:"#unit-testing",children:"Testing Section"})]}),"\n",(0,s.jsx)(t.li,{children:"Always consider whether adding contributor documentation is helpful for the work you've done e.g.\nyou've created a new hook that can be used across the app"}),"\n",(0,s.jsxs)(t.li,{children:["Get the relevant reviewers \u2013 engineers in your squad is a good start, but if you're working in a\nspace of the codebase you're not as familiar with e.g. ",(0,s.jsx)(t.code,{children:"entity-service"})," consider getting engineers\nwho have more experience in the space."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(6540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);