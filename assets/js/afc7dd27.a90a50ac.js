"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3092],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=d(a),m=r,u=f["".concat(p,".").concat(m)]||f[m]||c[m]||i;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1905:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:5},o="file validator by type",l={unversionedId:"usage/file_validator_by_type",id:"version-0.X.X/usage/file_validator_by_type",title:"file validator by type",description:"this file validator for validation of the overall type of files",source:"@site/versioned_docs/version-0.X.X/usage/file_validator_by_type.md",sourceDirName:"usage",slug:"/usage/file_validator_by_type",permalink:"/docs/0.X.X/usage/file_validator_by_type",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.X.X/usage/file_validator_by_type.md",tags:[],version:"0.X.X",lastUpdatedBy:"Reza shakeri",lastUpdatedAt:1694381590,formattedLastUpdatedAt:"Sep 10, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"FileType",permalink:"/docs/0.X.X/usage/filetype"},next:{title:"Safe Mode \ud83d\udd12",permalink:"/docs/0.X.X/usage/safe_mode"}},p={},d=[],s={toc:d};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-validator-by-type"},"file validator by type"),(0,r.kt)("p",null,"this file validator for validation of the overall type of files\nsuch ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"audio"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"video"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"archive"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"font")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_type\n")),(0,r.kt)("p",null,"Just call this function and give the function path of the file and the mimes\nyou want the files to be validated based on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_type\n\nfile_validator_by_type(acceptable_types=['image'], file_path='/path/to/file')\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Description of the return value and the function parameters:")),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_path"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The path to the file you want to validate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptable_types"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:"left"},"acceptable types of file, Supported types ",(0,r.kt)("inlineCode",{parentName:"td"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"video"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"audio"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"archive"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"font"))))),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Returns:"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"If everything is OK it will return information about file such ",(0,r.kt)("inlineCode",{parentName:"td"},"file name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"file type")," , otherwise it will return a ",(0,r.kt)("inlineCode",{parentName:"td"},"FileValidationException"),"."))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To see what types the filetype library supports, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/h2non/filetype.py#supported-types"},"link")," below")))}f.isMDXComponent=!0}}]);