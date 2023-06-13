"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:6},o="\ud83d\udc99 Contributing",l={unversionedId:"Contributing",id:"version-0.X.X/Contributing",title:"\ud83d\udc99 Contributing",description:"Contributions are welcome, and they are greatly appreciated! Every little bit helps, and credit will always be given.",source:"@site/versioned_docs/version-0.X.X/Contributing.md",sourceDirName:".",slug:"/Contributing",permalink:"/docs/0.X.X/Contributing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.X.X/Contributing.md",tags:[],version:"0.X.X",lastUpdatedBy:"Reza Shakeri",lastUpdatedAt:1686633189,formattedLastUpdatedAt:"Jun 13, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u2699\ufe0f Config",permalink:"/docs/0.X.X/config"},next:{title:"\ud83d\udc64 Credits",permalink:"/docs/0.X.X/Credits"}},s={},u=[{value:"Report Bugs",id:"report-bugs",level:3},{value:"Fix Bugs",id:"fix-bugs",level:3},{value:"Implement Features",id:"implement-features",level:3},{value:"Write Documentation",id:"write-documentation",level:3},{value:"Submit Feedback",id:"submit-feedback",level:3},{value:"Pull Request Guidelines",id:"pull-request-guidelines",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-contributing"},"\ud83d\udc99 Contributing"),(0,i.kt)("p",null,"Contributions are welcome, and they are greatly appreciated! Every little bit helps, and credit will always be given."),(0,i.kt)("p",null,"You can contribute in many ways:"),(0,i.kt)("h1",{id:"types-of-contributions"},"Types of Contributions"),(0,i.kt)("h3",{id:"report-bugs"},"Report Bugs"),(0,i.kt)("p",null,"Report bugs at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/file-validator/file-validator/issues"},"https://github.com/file-validator/file-validator/issues")),(0,i.kt)("p",null,"If you are reporting a bug, please include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your operating system name and version."),(0,i.kt)("li",{parentName:"ul"},"Any details about your local setup that might be helpful in troubleshooting."),(0,i.kt)("li",{parentName:"ul"},"Detailed steps to reproduce the bug.")),(0,i.kt)("h3",{id:"fix-bugs"},"Fix Bugs"),(0,i.kt)("p",null,"Look through the GitHub issues for bugs. Anything tagged with \u201cbug\u201d and \u201chelp wanted\u201d is open to whoever wants to implement it."),(0,i.kt)("h3",{id:"implement-features"},"Implement Features"),(0,i.kt)("p",null,"Look through the GitHub issues for features. Anything tagged with \u201cenhancement\u201d and \u201chelp wanted\u201d is open to whoever wants to implement it."),(0,i.kt)("h3",{id:"write-documentation"},"Write Documentation"),(0,i.kt)("p",null,"File Validator could always use more documentation, whether as part of the official File Validator docs, in docstrings, or even on the web in blog posts, articles, and such."),(0,i.kt)("h3",{id:"submit-feedback"},"Submit Feedback"),(0,i.kt)("p",null,"The best way to send feedback is to file an issue at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/file-validator/file-validator/issues"},"https://github.com/file-validator/file-validator/issues")),(0,i.kt)("p",null,"If you are proposing a feature:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explain in detail how it would work."),(0,i.kt)("li",{parentName:"ul"},"Keep the scope as narrow as possible, to make it easier to implement."),(0,i.kt)("li",{parentName:"ul"},"Remember that this is a volunteer-driven project, and that contributions are welcome :)")),(0,i.kt)("h3",{id:"pull-request-guidelines"},"Pull Request Guidelines"),(0,i.kt)("p",null,"Before you submit a pull request, check that it meets these guidelines:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The pull request should include tests."),(0,i.kt)("li",{parentName:"ol"},"If the pull request adds functionality, the docs should be updated. Put your new functionality into a function with a docstring, and add the feature to the list in README.rst."),(0,i.kt)("li",{parentName:"ol"},"The pull request should work for Python 3.8, 3.9 and 3.10, and for PyPy."),(0,i.kt)("li",{parentName:"ol"},"Run the tests before the Pull Request and must be successfully executed and accepted until the Pull Request, and this proves that there is no problem for the codes that are already running."),(0,i.kt)("li",{parentName:"ol"},"Check your code with Pylint to meet the standards, ",(0,i.kt)("a",{parentName:"li",href:"https://pylint.readthedocs.io/en/latest/"},"Pylint")," analyses your code without actually running it. It checks for errors, enforces a coding standard, looks for code smells, and can make suggestions about how the code could be refactored."),(0,i.kt)("li",{parentName:"ol"},"You can also use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/psf/black"},"Black")," to format your code"),(0,i.kt)("li",{parentName:"ol"},"also check code with ",(0,i.kt)("a",{parentName:"li",href:"https://pre-commit.com/"},"pre-commit")," before release")))}p.isMDXComponent=!0}}]);