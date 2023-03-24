"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[401],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),c=n,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||l;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:3},i="File Size Validator",o={unversionedId:"django/models/file_size_validator",id:"version-1.X.X/django/models/file_size_validator",title:"File Size Validator",description:"You can use Filesizevalidator for when you just want to validate the file size",source:"@site/versioned_docs/version-1.X.X/django/models/file_size_validator.md",sourceDirName:"django/models",slug:"/django/models/file_size_validator",permalink:"/docs/django/models/file_size_validator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.X.X/django/models/file_size_validator.md",tags:[],version:"1.X.X",lastUpdatedBy:"Reza Shakeri",lastUpdatedAt:1679645189,formattedLastUpdatedAt:"Mar 24, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Django File Validator",permalink:"/docs/django/models/django_file_validator"},next:{title:"Validated File Field",permalink:"/docs/django/models/validated_file_field"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Size conversion table",id:"size-conversion-table",level:2},{value:"How Use FileSizeValidator?",id:"how-use-filesizevalidator",level:2}],m={toc:p};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"file-size-validator"},"File Size Validator"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"Filesizevalidator")," for when you just want to validate the ",(0,n.kt)("strong",{parentName:"p"},"file size")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"max_upload_file_size"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"int")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If you want the file size to be checked, the file size must be in bytes, ",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},"example"),": ",(0,n.kt)("inlineCode",{parentName:"td"},"max_upload_file_size=1048576"),"  (1MB)"))))),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Returns:"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"If everything is OK, it will return None, otherwise it will return a ",(0,n.kt)("inlineCode",{parentName:"td"},"ValidationError"),"."))))),(0,n.kt)("h2",{id:"size-conversion-table"},"Size conversion table"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To choose the size you want the files to be validated based\non, you can take help from the table below or enter your\ndesired size in bytes:"),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Bytes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1048576 B - 1024",(0,n.kt)("strong",{parentName:"td"},"2 B - 2"),"20 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2.5 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2621440 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"5242880 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"10485760 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"20 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"20971520 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"50 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"52428800 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"100 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"104857600 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"250 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"262144000 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"500 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"524288000 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1073741824 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2147483648 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"center"}))))),(0,n.kt)("h2",{id:"how-use-filesizevalidator"},"How Use FileSizeValidator?"),(0,n.kt)("p",null,"To use FileSizeValidator you must act as follows:"),(0,n.kt)("p",null,"1.First, import the ",(0,n.kt)("inlineCode",{parentName:"p"},"FileSizeValidator")," to your Django model as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from django.db import models\nfrom file_validator.models import FileSizeValidator\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"In the next step we have to give it to our model as follows:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from django.db import models\nfrom file_validator.models import FileSizeValidator\n\nclass TestFileModel(models.Model):\n    test_file = models.FileField(\n        validators=[\n            FileSizeValidator(\n                max_upload_file_size=10485760  # => 10 MB\n            )\n        ]\n    )\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Finally run with the following commands:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python manage.py makemigrations\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python manage.py migrate\n")),(0,n.kt)("p",null,"Done \u2705"),(0,n.kt)("p",null,"From now on, get the files safely from users."))}s.isMDXComponent=!0}}]);