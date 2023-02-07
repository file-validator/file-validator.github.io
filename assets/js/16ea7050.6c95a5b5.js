"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?o.createElement(f,s(s({ref:r},u),{},{components:t})):o.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9892:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(7462),n=(t(7294),t(3905));const i={sidebar_position:4},s="Customizing Errors",a={unversionedId:"django/customizing_errors",id:"django/customizing_errors",title:"Customizing Errors",description:"It is possible that you can customize the error messages, that is, show the format of the files or mimes in the error message, you can do this in the following way:",source:"@site/docs/django/customizing_errors.md",sourceDirName:"django",slug:"/django/customizing_errors",permalink:"/docs/django/customizing_errors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/django/customizing_errors.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"File Size Validator",permalink:"/docs/django/file_size_validator"},next:{title:"\u2699\ufe0f Config",permalink:"/docs/config"}},l={},c=[],u={toc:c};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"customizing-errors"},"Customizing Errors"),(0,n.kt)("p",null,"It is possible that you can customize the error messages, that is, show the format of the files or mimes in the error message, you can do this in the following way:"),(0,n.kt)("p",null,"First, in your Django settings ",(0,n.kt)("inlineCode",{parentName:"p"},"settings.py"),", you must specify the error message as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FILE_VALIDATOR_ERROR_MESSAGE = "{file} is not valid"\n')),(0,n.kt)("p",null,"To display the current file name in the error message, you must put the ",(0,n.kt)("inlineCode",{parentName:"p"},"{file}")," string in your error message for example : \ud83d\udc47"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FILE_VALIDATOR_ERROR_MESSAGE = "{file} Your custom error message"\n')),(0,n.kt)("p",null,"To display the mimes based on which the file is to be validated, you must include ",(0,n.kt)("inlineCode",{parentName:"p"},"{mimes}")," string in your error message. for example : \ud83d\udc47"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FILE_VALIDATOR_ERROR_MESSAGE = "{mimes} Your custom error message"\n')),(0,n.kt)("p",null,"To display both memes and file name, you can put both in your error message. for example : \ud83d\udc47"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FILE_VALIDATOR_ERROR_MESSAGE = "{file} and {mimes} Your custom error message"\n')))}p.isMDXComponent=!0}}]);