"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||n;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={sidebar_position:1},o="file validator",l={unversionedId:"usage/file_validator",id:"version-1.X.X/usage/file_validator",title:"file validator",description:"In the 0.X.X version, each of the File Validats was a separate function but in this version they are all become a class",source:"@site/versioned_docs/version-1.X.X/usage/file_validator.md",sourceDirName:"usage",slug:"/usage/file_validator",permalink:"/docs/usage/file_validator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.X.X/usage/file_validator.md",tags:[],version:"1.X.X",lastUpdatedBy:"Reza Shakeri",lastUpdatedAt:1678960468,formattedLastUpdatedAt:"Mar 16, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd29 Usage",permalink:"/docs/category/-usage"},next:{title:"\ud83d\udccc Django",permalink:"/docs/category/-django"}},s={},p=[{value:"How Used?",id:"how-used",level:2},{value:"First Imported",id:"first-imported",level:3},{value:"Create Instance",id:"create-instance",level:3},{value:"File Validation Using The <strong>python-magic</strong> Library",id:"file-validation-using-the-python-magic-library",level:3},{value:"File Validation Using The <strong>pure-magic</strong> Library",id:"file-validation-using-the-pure-magic-library",level:3},{value:"File Validation Using The <strong>mimetypes</strong> Library",id:"file-validation-using-the-mimetypes-library",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-validator"},"file validator"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://file-validator.github.io/docs/0.X.X/intro"},"0.X.X")," version, each of the File Validats was a separate function but in this version they are all become a class"),(0,i.kt)("p",null,"In the new version you can validate files based on extension, mime and size separately"),(0,i.kt)("h2",{id:"how-used"},"How Used?"),(0,i.kt)("h3",{id:"first-imported"},"First Imported"),(0,i.kt)("p",null,"You must first import ",(0,i.kt)("inlineCode",{parentName:"p"},"FileValidator")," to use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from file_validator.validators import FileValidator\n")),(0,i.kt)("h3",{id:"create-instance"},"Create Instance"),(0,i.kt)("p",null,"At this point you should make an instance from the ",(0,i.kt)("inlineCode",{parentName:"p"},"FileValidator")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'file_validator = FileValidator(\n    acceptable_extensions=[".png"],\n    max_upload_file_size=1000000,\n    acceptable_types=["image", "audio"],\n    acceptable_mimes=["image/png"],\n    file_path="path/to/file",\n)\n')),(0,i.kt)("h3",{id:"file-validation-using-the-python-magic-library"},"File Validation Using The ",(0,i.kt)("strong",{parentName:"h3"},"python-magic")," Library"),(0,i.kt)("p",null,"If you want to perform validation operations by the ",(0,i.kt)("inlineCode",{parentName:"p"},"python-magic")," Library, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"python_magic()")," method as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.python_magic()\n")),(0,i.kt)("h3",{id:"file-validation-using-the-pure-magic-library"},"File Validation Using The ",(0,i.kt)("strong",{parentName:"h3"},"pure-magic")," Library"),(0,i.kt)("p",null,"If you want to perform validation operations by the ",(0,i.kt)("inlineCode",{parentName:"p"},"pure-magic")," Library, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pure_magic()")," method as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.pure_magic()\n")),(0,i.kt)("h3",{id:"file-validation-using-the-mimetypes-library"},"File Validation Using The ",(0,i.kt)("strong",{parentName:"h3"},"mimetypes")," Library"),(0,i.kt)("p",null,"If you want to perform validation operations by the ",(0,i.kt)("inlineCode",{parentName:"p"},"mimetypes")," Library, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mimetypes()")," method as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"file_validator.mimetypes()\n")))}c.isMDXComponent=!0}}]);