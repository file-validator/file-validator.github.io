"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},i="Customizing Errors",s={unversionedId:"django/customizing_errors",id:"version-0.X.X/django/customizing_errors",title:"Customizing Errors",description:"It is possible that you can customize the error messages, that is, show the format of the files or mimes in the error message, you can do this in the following way:",source:"@site/versioned_docs/version-0.X.X/django/customizing_errors.md",sourceDirName:"django",slug:"/django/customizing_errors",permalink:"/docs/0.X.X/django/customizing_errors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.X.X/django/customizing_errors.md",tags:[],version:"0.X.X",lastUpdatedBy:"Reza shakeri",lastUpdatedAt:1696893521,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Validated File Field",permalink:"/docs/0.X.X/django/models/validated_file_field"},next:{title:"\u2699\ufe0f Config",permalink:"/docs/0.X.X/config"}},l={},m=[],p={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customizing-errors"},"Customizing Errors"),(0,a.kt)("p",null,"It is possible that you can customize the error messages, that is, show the format of the files or mimes in the error message, you can do this in the following way:"),(0,a.kt)("p",null,"First, in your Django settings ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.py"),", you must specify the error message as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'FILE_VALIDATOR_ERROR_MESSAGE = "{file_name} is not valid"\n')),(0,a.kt)("p",null,"To display the current file name in the error message, you must put the ",(0,a.kt)("inlineCode",{parentName:"p"},"{file}")," string in your error message for example : \ud83d\udc47"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'FILE_VALIDATOR_ERROR_MESSAGE = "{file_name} Your custom error message"\n')),(0,a.kt)("p",null,"To display the mimes based on which the file is to be validated, you must include ",(0,a.kt)("inlineCode",{parentName:"p"},"{mimes}")," string in your error message. for example : \ud83d\udc47"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'FILE_VALIDATOR_ERROR_MESSAGE = "{mimes} Your custom error message"\n')),(0,a.kt)("p",null,"To display both memes and file name, you can put both in your error message. for example : \ud83d\udc47"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'FILE_VALIDATOR_ERROR_MESSAGE = "{file_name} and {mimes} Your custom error message"\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"In this section we will explain the parameters you can use in your message message")),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{file_name}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"return the current file name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{mimes}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"return the accepted mime")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{max_file_size}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"return the Maximum file size that the user can upload")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{file_size}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"return the current file size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{current_file_mime}")),(0,a.kt)("td",{parentName:"tr",align:"left"},"return the current file mime"))))))}u.isMDXComponent=!0}}]);