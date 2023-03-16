"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1},l="file validator",o={unversionedId:"usage/file_validator",id:"version-1.X.X/usage/file_validator",title:"file validator",description:"In the 0.X.X version, each of the File Validats was a separate function but in this version they are all become a class",source:"@site/versioned_docs/version-1.X.X/usage/file_validator.md",sourceDirName:"usage",slug:"/usage/file_validator",permalink:"/docs/usage/file_validator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.X.X/usage/file_validator.md",tags:[],version:"1.X.X",lastUpdatedBy:"Reza Shakeri",lastUpdatedAt:1678995284,formattedLastUpdatedAt:"Mar 16, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd29 Usage",permalink:"/docs/category/-usage"},next:{title:"\ud83d\udccc Django",permalink:"/docs/category/-django"}},d={},p=[{value:"How Used?",id:"how-used",level:2},{value:"First Imported",id:"first-imported",level:3},{value:"Create Instance",id:"create-instance",level:3},{value:"File Validation Using The <strong>python-magic</strong> Library",id:"file-validation-using-the-python-magic-library",level:3},{value:"File Validation Using The <strong>pure-magic</strong> Library",id:"file-validation-using-the-pure-magic-library",level:3},{value:"File Validation Using The <strong>mimetypes</strong> Library",id:"file-validation-using-the-mimetypes-library",level:3},{value:"File Validation Using The <strong>filetype</strong> Library",id:"file-validation-using-the-filetype-library",level:3},{value:"File Validation Using The <strong>All</strong> Library",id:"file-validation-using-the-all-library",level:3},{value:"File Validation Based On The Mime",id:"file-validation-based-on-the-mime",level:3},{value:"File Validation Based On The Extension",id:"file-validation-based-on-the-extension",level:3},{value:"File Validation Based On The Size",id:"file-validation-based-on-the-size",level:3},{value:"Size conversion table",id:"size-conversion-table",level:2},{value:"File Validation Based On The type",id:"file-validation-based-on-the-type",level:3}],s={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-validator"},"file validator"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://file-validator.github.io/docs/0.X.X/intro"},"0.X.X")," version, each of the File Validats was a separate function but in this version they are all become a class"),(0,i.kt)("p",null,"In the new version you can validate files based on extension, mime and size separately"),(0,i.kt)("h2",{id:"how-used"},"How Used?"),(0,i.kt)("h3",{id:"first-imported"},"First Imported"),(0,i.kt)("p",null,"You must first import ",(0,i.kt)("inlineCode",{parentName:"p"},"FileValidator")," to use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import FileValidator\n")),(0,i.kt)("h3",{id:"create-instance"},"Create Instance"),(0,i.kt)("p",null,"At this point you should make an instance from the ",(0,i.kt)("inlineCode",{parentName:"p"},"FileValidator")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'file_validator = FileValidator(\n    acceptable_extensions=[".png"],\n    max_upload_file_size=1000000,\n    acceptable_types=["image", "audio"],\n    acceptable_mimes=["image/png"],\n    file_path="path/to/file",\n)\n')),(0,i.kt)("h3",{id:"file-validation-using-the-python-magic-library"},"File Validation Using The ",(0,i.kt)("strong",{parentName:"h3"},"python-magic")," Library"),(0,i.kt)("p",null,"If you want to perform validation operations by the ",(0,i.kt)("inlineCode",{parentName:"p"},"python-magic")," Library, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"python_magic()")," method as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.python_magic()\n")),(0,i.kt)("h3",{id:"file-validation-using-the-pure-magic-library"},"File Validation Using The ",(0,i.kt)("strong",{parentName:"h3"},"pure-magic")," Library"),(0,i.kt)("p",null,"If you want to perform validation operations by the ",(0,i.kt)("inlineCode",{parentName:"p"},"pure-magic")," Library, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pure_magic()")," method as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.pure_magic()\n")),(0,i.kt)("h3",{id:"file-validation-using-the-mimetypes-library"},"File Validation Using The ",(0,i.kt)("strong",{parentName:"h3"},"mimetypes")," Library"),(0,i.kt)("p",null,"If you want to perform validation operations by the ",(0,i.kt)("inlineCode",{parentName:"p"},"mimetypes")," Library, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mimetypes()")," method as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.mimetypes()\n")),(0,i.kt)("h3",{id:"file-validation-using-the-filetype-library"},"File Validation Using The ",(0,i.kt)("strong",{parentName:"h3"},"filetype")," Library"),(0,i.kt)("p",null,"If you want to perform validation operations by the ",(0,i.kt)("inlineCode",{parentName:"p"},"filetype")," Library, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"filetype()")," method as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.filetype()\n")),(0,i.kt)("h3",{id:"file-validation-using-the-all-library"},"File Validation Using The ",(0,i.kt)("strong",{parentName:"h3"},"All")," Library"),(0,i.kt)("p",null,"If you want to perform validation operations by the ",(0,i.kt)("inlineCode",{parentName:"p"},"All")," libraries , you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"filetype()")," method as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate()\n")),(0,i.kt)("h3",{id:"file-validation-based-on-the-mime"},"File Validation Based On The Mime"),(0,i.kt)("p",null,"If you want to validate the files based on their ",(0,i.kt)("inlineCode",{parentName:"p"},"MIME")," and their ",(0,i.kt)("inlineCode",{parentName:"p"},"magic numbers"),", you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate_mime()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate_mime()\n")),(0,i.kt)("h3",{id:"file-validation-based-on-the-extension"},"File Validation Based On The Extension"),(0,i.kt)("p",null,"If you want to validate the files based on their ",(0,i.kt)("inlineCode",{parentName:"p"},"extension"),", you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate_extension()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate_extension()\n")),(0,i.kt)("h3",{id:"file-validation-based-on-the-size"},"File Validation Based On The Size"),(0,i.kt)("p",null,"If you want to validate the files based on their ",(0,i.kt)("inlineCode",{parentName:"p"},"size"),", you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate_size()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate_size()\n")),(0,i.kt)("h2",{id:"size-conversion-table"},"Size conversion table"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To choose the size you want the files to be validated based\non, you can take help from the table below or enter your\ndesired size in bytes:"),(0,i.kt)("table",{parentName:"admonition"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Bytes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1 MB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1048576 B - 1024",(0,i.kt)("strong",{parentName:"td"},"2 B - 2"),"20 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2.5 MB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2621440 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5 MB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"5242880 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10 MB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"10485760 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"20 MB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"20971520 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"50 MB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"52428800 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"100 MB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"104857600 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"250 MB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"262144000 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"500 MB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"524288000 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1073741824 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2147483648 B")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:"center"}))))),(0,i.kt)("h3",{id:"file-validation-based-on-the-type"},"File Validation Based On The type"),(0,i.kt)("p",null,"If you want to validate the files based on their ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," such ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"audio"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"video")," and etc..., you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate_type()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.validate_type()\n")))}m.isMDXComponent=!0}}]);