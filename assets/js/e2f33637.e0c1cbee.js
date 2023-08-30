"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7824],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(a),u=i,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1},o="Python Magic",l={unversionedId:"usage/python_magic",id:"version-0.X.X/usage/python_magic",title:"Python Magic",description:"python-magic is a Python interface to the libmagic file type identification library. libmagic identifies file types by checking their headers according to a predefined list of file types. This functionality is exposed to the command line by the Unix command file.",source:"@site/versioned_docs/version-0.X.X/usage/python_magic.md",sourceDirName:"usage",slug:"/usage/python_magic",permalink:"/docs/0.X.X/usage/python_magic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.X.X/usage/python_magic.md",tags:[],version:"0.X.X",lastUpdatedBy:"Reza shakeri",lastUpdatedAt:1693439023,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd29 Usage",permalink:"/docs/0.X.X/category/-usage"},next:{title:"Pure Magic",permalink:"/docs/0.X.X/usage/pure_magic"}},p={},m=[],s={toc:m};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python-magic"},"Python Magic"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ahupp/python-magic"},"python-magic")," is a Python interface to the libmagic file type identification library. libmagic identifies file types by checking their headers according to a predefined list of file types. This functionality is exposed to the command line by the Unix command file."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Since the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ahupp/python-magic"},"python-magic"),"\nlibrary may treat audio files like mp3 as programs\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"application/octet-stream")," and it\u2019s a bit\nannoying, I suggest when you want to validate\naudio files from two libraries (",(0,i.kt)("strong",{parentName:"p"},"filetype"),", ",(0,i.kt)("strong",{parentName:"p"},"MimeTypes"),", ",(0,i.kt)("strong",{parentName:"p"},"pure magic"),")\nor use the safe mode method.")),(0,i.kt)("p",null,"If you want to use File Validators made using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ahupp/python-magic"},"python-magic"),"\nlibrary, you should add it to your program as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_python_magic\n")),(0,i.kt)("p",null,"Just call this function and give the function path of the file and the mimes\nyou want the files to be validated based on:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import file_validator_by_python_magic\n\nfile_validator_by_python_magic(acceptable_mimes=['audio/mpeg', 'video/mp4'], file_path='/path/to/file')\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("blockquote",{parentName:"admonition"},(0,i.kt)("p",{parentName:"blockquote"},"Description of the return value and the function parameters:")),(0,i.kt)("table",{parentName:"admonition"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file_path"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The path to the file you want to validate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"acceptable_mimes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"list")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The mime of the files you want to validate based on them, example: ",(0,i.kt)("inlineCode",{parentName:"td"},"image/png "))))),(0,i.kt)("table",{parentName:"admonition"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Returns:"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"If everything is OK it will return information about file such ",(0,i.kt)("inlineCode",{parentName:"td"},"file name"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"file mime"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"file type"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"file extensions")," , otherwise it will return a ",(0,i.kt)("inlineCode",{parentName:"td"},"FileValidationException"),"."))))))}c.isMDXComponent=!0}}]);