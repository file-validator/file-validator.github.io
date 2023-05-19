"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6018],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),f=n,u=c["".concat(d,".").concat(f)]||c[f]||m[f]||i;return a?r.createElement(u,l(l({ref:t},p),{},{components:a})):r.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},686:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1},l="Validated File Field",o={unversionedId:"django/forms/validated_file_field",id:"version-1.X.X/django/forms/validated_file_field",title:"Validated File Field",description:"Using ValidatedFilefield can you say which type of files are allowed",source:"@site/versioned_docs/version-1.X.X/django/forms/validated_file_field.md",sourceDirName:"django/forms",slug:"/django/forms/validated_file_field",permalink:"/docs/django/forms/validated_file_field",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.X.X/django/forms/validated_file_field.md",tags:[],version:"1.X.X",lastUpdatedBy:"pre-commit-ci[bot]",lastUpdatedAt:1684536306,formattedLastUpdatedAt:"May 19, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Forms",permalink:"/docs/category/forms"},next:{title:"Models",permalink:"/docs/category/models"}},d={},s=[{value:"Parameters",id:"parameters",level:2},{value:"How Use ValidatedFilefield?",id:"how-use-validatedfilefield",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validated-file-field"},"Validated File Field"),(0,n.kt)("p",null,"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"ValidatedFilefield")," can you say which type of files are allowed"),(0,n.kt)("p",null,"Before we go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Validatedfilefield")," tutorial, let's first get acquainted with ",(0,n.kt)("inlineCode",{parentName:"p"},"ValidatedFilefield")," parameters"),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"accept"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The accept attribute takes as its value a comma-separated list of one or more file types, or unique file type specifiers, ",(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept"},"describing which file types to allow. See this guide for more familiarity"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"custom_css_class"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:"left"},"A custom class to customize input")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"multiple"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If you want to upload multiple files, set up to True"))))),(0,n.kt)("h2",{id:"how-use-validatedfilefield"},"How Use ValidatedFilefield?"),(0,n.kt)("p",null,"To use ",(0,n.kt)("inlineCode",{parentName:"p"},"ValidatedFilefield")," you must act as follows:"),(0,n.kt)("p",null,"1.First, import the ",(0,n.kt)("inlineCode",{parentName:"p"},"ValidatedFilefield")," to your Django forms as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from django import forms\nfrom file_validator.forms import ValidatedFileField\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"In the next step we have to give it to our form as follows:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from django import forms\nfrom file_validator.forms import ValidatedFileField\n\nclass TestForm(forms.Form):\n    test_file = ValidatedFileField(\n        accept='image/*', # => accept attribute\n        custom_css_class='your-custom-css-class', # => custom css class\n        multiple=True # => for upload Multiple Files\n    )\n\n")))}c.isMDXComponent=!0}}]);