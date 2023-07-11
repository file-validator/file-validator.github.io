"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},f=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,u=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(u,o(o({ref:t},f),{},{components:a})):n.createElement(u,o({ref:t},f))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},o="FileType",l={unversionedId:"usage/filetype",id:"version-0.X.X/usage/filetype",title:"FileType",description:"filetype a Python package to infer file type and MIME type checking the magic numbers signature of a file or buffer. we also support the filetype library, and you can import it to your project as follows:",source:"@site/versioned_docs/version-0.X.X/usage/filetype.md",sourceDirName:"usage",slug:"/usage/filetype",permalink:"/docs/0.X.X/usage/filetype",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.X.X/usage/filetype.md",tags:[],version:"0.X.X",lastUpdatedBy:"pre-commit-ci[bot]",lastUpdatedAt:1689055559,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MimeTypes",permalink:"/docs/0.X.X/usage/mimetypes"},next:{title:"file validator by type",permalink:"/docs/0.X.X/usage/file_validator_by_type"}},p={},s=[],f={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"filetype"},"FileType"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/h2non/filetype.py"},"filetype")," a Python package to infer file type and MIME type checking the magic numbers signature of a file or buffer. we also support the filetype library, and you can import it to your project as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_filetype\n")),(0,r.kt)("p",null,"Just call this function and give the function path of the file and the mimes\nyou want the files to be validated based on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_filetype\n\nfile_validator_by_filetype(acceptable_mimes=['audio/mpeg', 'video/mp4'], file_path='/path/to/file')\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Description of the return value and the function parameters:")),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_path"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The path to the file you want to validate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptable_mimes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The mime of the files you want to validate based on them, example: image/png")))),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Returns:"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"If everything is OK it will return information about file such ",(0,r.kt)("inlineCode",{parentName:"td"},"file name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"file mime"),",",(0,r.kt)("inlineCode",{parentName:"td"},"file type"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"file extensions")," , otherwise it will return a ",(0,r.kt)("inlineCode",{parentName:"td"},"FileValidationException"),"."))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To see what types the filetype library supports, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/h2non/filetype.py#supported-types"},"link")," below")))}m.isMDXComponent=!0}}]);