"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9323],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},f=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,u=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(u,o(o({ref:t},f),{},{components:a})):r.createElement(u,o({ref:t},f))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6276:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:4},o="FileType",l={unversionedId:"usage/filetype",id:"version-1.X.X/usage/filetype",title:"FileType",description:"filetype a Python package to infer file type and MIME type checking the magic numbers signature of a file or buffer. we also support the filetype library, and you can import it to your project as follows:",source:"@site/versioned_docs/version-1.X.X/usage/filetype.md",sourceDirName:"usage",slug:"/usage/filetype",permalink:"/docs/usage/filetype",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.X.X/usage/filetype.md",tags:[],version:"1.X.X",lastUpdatedBy:"pre-commit-ci[bot]",lastUpdatedAt:1678765495,formattedLastUpdatedAt:"Mar 14, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MimeTypes",permalink:"/docs/usage/mimetypes"},next:{title:"file validator by type",permalink:"/docs/usage/file_validator_by_type"}},p={},s=[],f={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"filetype"},"FileType"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/h2non/filetype.py"},"filetype")," a Python package to infer file type and MIME type checking the magic numbers signature of a file or buffer. we also support the filetype library, and you can import it to your project as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_filetype\n")),(0,n.kt)("p",null,"Just call this function and give the function path of the file and the mimes\nyou want the files to be validated based on:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_filetype\n\nfile_validator_by_filetype(acceptable_mimes=['audio/mpeg', 'video/mp4'], file_path='/path/to/file')\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("blockquote",{parentName:"admonition"},(0,n.kt)("p",{parentName:"blockquote"},"Description of the return value and the function parameters:")),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"file_path"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The path to the file you want to validate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"acceptable_mimes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"list")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The mime of the files you want to validate based on them, example: image/png")))),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Returns:"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"If everything is OK it will return information about file such ",(0,n.kt)("inlineCode",{parentName:"td"},"file name"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"file mime"),",",(0,n.kt)("inlineCode",{parentName:"td"},"file type"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"file extensions")," , otherwise it will return a ",(0,n.kt)("inlineCode",{parentName:"td"},"FileValidationException"),"."))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To see what types the filetype library supports, you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/h2non/filetype.py#supported-types"},"link")," below")))}m.isMDXComponent=!0}}]);