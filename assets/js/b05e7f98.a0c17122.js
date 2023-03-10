"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[879],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(a),u=r,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="Pure Magic",l={unversionedId:"usage/pure_magic",id:"usage/pure_magic",title:"Pure Magic",description:"puremagic is a pure python module that will identify a file based off it's magic numbers.It is designed to be minimalistic and inherently cross platform compatible. It is also designed to be a stand in for python-magic, it incorporates the functions fromfile(filename[, mime]) and fromstring(string[, mime]) however the magicfile() and magicstring() are more powerful and will also display confidence and duplicate matches.",source:"@site/docs/usage/pure_magic.md",sourceDirName:"usage",slug:"/usage/pure_magic",permalink:"/docs/next/usage/pure_magic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/pure_magic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Python Magic",permalink:"/docs/next/usage/python_magic"},next:{title:"MimeTypes",permalink:"/docs/next/usage/mimetypes"}},p={},m=[],c={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pure-magic"},"Pure Magic"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/cdgriffith/puremagic"},"puremagic")," is a pure python module that will identify a file based off it's magic numbers.It is designed to be minimalistic and inherently cross platform compatible. It is also designed to be a stand in for python-magic, it incorporates the functions from_file(filename","[, mime]",") and from_string(string","[, mime]",") however the magic_file() and magic_string() are more powerful and will also display confidence and duplicate matches."),(0,r.kt)("p",null,"you can add it to your project as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_pure_magic\n")),(0,r.kt)("p",null,"Just call this function and give the function path of the file and the mimes\nyou want the files to be validated based on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_pure_magic\n\nfile_validator_by_pure_magic(acceptable_mimes=['audio/mpeg', 'video/mp4'], file_path='/path/to/file')\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Description of the return value and the function parameters:")),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_path"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The path to the file you want to validate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptable_mimes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The mime of the files you want to validate based on them, example: image/png")))),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Returns:"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"If everything is OK it will return information about file such ",(0,r.kt)("inlineCode",{parentName:"td"},"file name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"file mime"),",",(0,r.kt)("inlineCode",{parentName:"td"},"file type"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"file extensions")," , otherwise it will return a ",(0,r.kt)("inlineCode",{parentName:"td"},"FileValidationException"),"."))))))}s.isMDXComponent=!0}}]);