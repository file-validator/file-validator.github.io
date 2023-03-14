"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3394],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?r.createElement(f,o(o({ref:t},m),{},{components:a})):r.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:3},o="MimeTypes",l={unversionedId:"usage/mimetypes",id:"version-1.X.X/usage/mimetypes",title:"MimeTypes",description:"The good news is that we also support the native Python library, mimetypes MimeTypes, and you can add it to your project as follows:",source:"@site/versioned_docs/version-1.X.X/usage/mimetypes.md",sourceDirName:"usage",slug:"/usage/mimetypes",permalink:"/docs/usage/mimetypes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.X.X/usage/mimetypes.md",tags:[],version:"1.X.X",lastUpdatedBy:"Reza Shakeri",lastUpdatedAt:1678771741,formattedLastUpdatedAt:"Mar 14, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pure Magic",permalink:"/docs/usage/pure_magic"},next:{title:"FileType",permalink:"/docs/usage/filetype"}},p={},s=[],m={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mimetypes"},"MimeTypes"),(0,n.kt)("p",null,"The good news is that we also support the native Python library, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/mimetypes.html"},"mimetypes")," MimeTypes, and you can add it to your project as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_mimetypes\n")),(0,n.kt)("p",null,"Just call this function and give the function path of the file and the mimes\nyou want the files to be validated based on:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_mimetypes\n\nfile_validator_by_mimetypes(acceptable_mimes=['audio/mpeg', 'video/mp4'], file_path='/path/to/file')\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("blockquote",{parentName:"admonition"},(0,n.kt)("p",{parentName:"blockquote"},"Description of the return value and the function parameters:")),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"file_path"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The path to the file you want to validate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"acceptable_mimes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"list")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The mime of the files you want to validate based on them, example: image/png")))),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Returns:"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"If everything is OK it will return information about file such ",(0,n.kt)("inlineCode",{parentName:"td"},"file name"),",",(0,n.kt)("inlineCode",{parentName:"td"},"file type"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"file mime"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"file extensions")," , otherwise it will return a ",(0,n.kt)("inlineCode",{parentName:"td"},"FileValidationException"),"."))))))}d.isMDXComponent=!0}}]);