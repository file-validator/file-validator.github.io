"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},l="File Validator",o={unversionedId:"usage/file_validator",id:"version-1.X.X/usage/file_validator",title:"File Validator",description:"In the 0.X.X version, each of the File Validats was a separate function but in this version they are all become a class",source:"@site/versioned_docs/version-1.X.X/usage/file_validator.md",sourceDirName:"usage",slug:"/usage/file_validator",permalink:"/docs/usage/file_validator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.X.X/usage/file_validator.md",tags:[],version:"1.X.X",lastUpdatedBy:"Reza Shakeri",lastUpdatedAt:1682421036,formattedLastUpdatedAt:"Apr 25, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd29 Usage",permalink:"/docs/category/-usage"},next:{title:"\ud83d\udccc Django",permalink:"/docs/category/-django"}},p={},d=[{value:"How Used?",id:"how-used",level:2},{value:"First Imported",id:"first-imported",level:3},{value:"Create Instance",id:"create-instance",level:3},{value:"Parameters explanation",id:"parameters-explanation",level:4},{value:"python-magic Library",id:"python-magic-library",level:3},{value:"pure-magic Library",id:"pure-magic-library",level:3},{value:"mimetypes Library",id:"mimetypes-library",level:3},{value:"filetype Library",id:"filetype-library",level:3},{value:"All Library",id:"all-library",level:3},{value:"File Validation Based On The <strong>Extension</strong>",id:"file-validation-based-on-the-extension",level:3},{value:"File Validation Based On The <strong>Mime</strong>",id:"file-validation-based-on-the-mime",level:3},{value:"File Validation Based On The <strong>type</strong>",id:"file-validation-based-on-the-type",level:3},{value:"File Validation Based On The <strong>Size</strong>",id:"file-validation-based-on-the-size",level:3},{value:"Size conversion table",id:"size-conversion-table",level:3}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-validator"},"File Validator"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"https://file-validator.github.io/docs/0.X.X/intro"},"0.X.X")," version, each of the File Validats was a separate function but in this version they are all become a class"),(0,r.kt)("p",null,"In the new version you can validate files based on extension, mime and size separately"),(0,r.kt)("h2",{id:"how-used"},"How Used?"),(0,r.kt)("h3",{id:"first-imported"},"First Imported"),(0,r.kt)("p",null,"You must first import ",(0,r.kt)("inlineCode",{parentName:"p"},"FileValidator")," to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import FileValidator\n")),(0,r.kt)("h3",{id:"create-instance"},"Create Instance"),(0,r.kt)("p",null,"At this point you should make an instance from the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileValidator")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'file_validator = FileValidator(\n    acceptable_extensions=[".png"],\n    max_upload_file_size=1000000,\n    acceptable_types=["image", "audio"],\n    acceptable_mimes=["image/png"],\n    file_path="path/to/file",\n)\n')),(0,r.kt)("h4",{id:"parameters-explanation"},"Parameters explanation"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_upload_file_size"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int"),"    ",(0,r.kt)("inlineCode",{parentName:"td"},"optional")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If you want the file size to be checked, the file size must be in bytes, ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"example"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"max_upload_file_size=1048576"),"  (1MB) ",(0,r.kt)("br",null)," defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptable_extensions"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"list"),"  ",(0,r.kt)("inlineCode",{parentName:"td"},"optional")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The extensions you want the file to be checked based on. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"example"),": ",(0,r.kt)("inlineCode",{parentName:"td"},'acceptable_extensions=[".png"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptable_types"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The types you want the file to be checked based on. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"example"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"acceptable_types=['audio', 'video']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptable_mimes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The mimes you want the file to be checked based on. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"example"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"acceptable_mimes=['audio/mpeg', 'video/mp4']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_path"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The file path that you want to be validated"))))),(0,r.kt)("h3",{id:"python-magic-library"},"python-magic Library"),(0,r.kt)("p",null,"If you want to perform file validation operations by the ",(0,r.kt)("inlineCode",{parentName:"p"},"python-magic")," Library, you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"python_magic()")," method as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.python_magic()\n")),(0,r.kt)("h3",{id:"pure-magic-library"},"pure-magic Library"),(0,r.kt)("p",null,"If you want to perform file validation operations by the ",(0,r.kt)("inlineCode",{parentName:"p"},"pure-magic")," Library, you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pure_magic()")," method as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.pure_magic()\n")),(0,r.kt)("h3",{id:"mimetypes-library"},"mimetypes Library"),(0,r.kt)("p",null,"If you want to perform file validation operations by the ",(0,r.kt)("inlineCode",{parentName:"p"},"mimetypes")," Library, you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mimetypes()")," method as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.mimetypes()\n")),(0,r.kt)("h3",{id:"filetype-library"},"filetype Library"),(0,r.kt)("p",null,"If you want to perform file validation operations by the ",(0,r.kt)("inlineCode",{parentName:"p"},"filetype")," Library, you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"filetype()")," method as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.filetype()\n")),(0,r.kt)("h3",{id:"all-library"},"All Library"),(0,r.kt)("p",null,"If you want to perform file validation operations by the ",(0,r.kt)("inlineCode",{parentName:"p"},"All")," libraries , you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate()")," method as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate()\n")),(0,r.kt)("h3",{id:"file-validation-based-on-the-extension"},"File Validation Based On The ",(0,r.kt)("strong",{parentName:"h3"},"Extension")),(0,r.kt)("p",null,"If you want to validate the files based on their ",(0,r.kt)("inlineCode",{parentName:"p"},"extension"),", you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_extension()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate_extension()\n")),(0,r.kt)("h3",{id:"file-validation-based-on-the-mime"},"File Validation Based On The ",(0,r.kt)("strong",{parentName:"h3"},"Mime")),(0,r.kt)("p",null,"If you want to validate the files based on their ",(0,r.kt)("inlineCode",{parentName:"p"},"MIME")," and their ",(0,r.kt)("inlineCode",{parentName:"p"},"magic numbers"),", you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_mime()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate_mime()\n")),(0,r.kt)("h3",{id:"file-validation-based-on-the-type"},"File Validation Based On The ",(0,r.kt)("strong",{parentName:"h3"},"type")),(0,r.kt)("p",null,"If you want to validate the files based on their ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," such ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"audio"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"video")," and etc..., you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_type()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate_type()\n")),(0,r.kt)("h3",{id:"file-validation-based-on-the-size"},"File Validation Based On The ",(0,r.kt)("strong",{parentName:"h3"},"Size")),(0,r.kt)("p",null,"If you want to validate the files based on their ",(0,r.kt)("inlineCode",{parentName:"p"},"size"),", you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_size()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate_size()\n")),(0,r.kt)("h3",{id:"size-conversion-table"},"Size conversion table"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To choose the size you want the files to be validated based\non, you can take help from the table below or enter your\ndesired size in bytes:"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Bytes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1048576 B - 1024",(0,r.kt)("strong",{parentName:"td"},"2 B - 2"),"20 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.5 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2621440 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5242880 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10485760 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20971520 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"50 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"52428800 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"104857600 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"250 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"262144000 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"524288000 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1073741824 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2147483648 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"}))))))}m.isMDXComponent=!0}}]);