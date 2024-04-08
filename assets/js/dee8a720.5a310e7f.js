"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,c=s["".concat(d,".").concat(u)]||s[u]||k[u]||i;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1111:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},l="Validated File Field",o={unversionedId:"django/models/validated_file_field",id:"version-1.X.X/django/models/validated_file_field",title:"Validated File Field",description:"Using ValidatedFilefield you can perform file validation operations at the model level.",source:"@site/versioned_docs/version-1.X.X/django/models/validated_file_field.md",sourceDirName:"django/models",slug:"/django/models/validated_file_field",permalink:"/docs/django/models/validated_file_field",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.X.X/django/models/validated_file_field.md",tags:[],version:"1.X.X",lastUpdatedBy:"pre-commit-ci[bot]",lastUpdatedAt:1712614950,formattedLastUpdatedAt:"Apr 8, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"File Size Validator",permalink:"/docs/django/models/file_size_validator"},next:{title:"Customizing Errors",permalink:"/docs/django/customizing_errors"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Size conversion table",id:"size-conversion-table",level:2},{value:"How Use ValidatedFilefield?",id:"how-use-validatedfilefield",level:2}],m={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validated-file-field"},"Validated File Field"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatedFilefield")," you can perform file validation operations at the model level."),(0,r.kt)("p",null,"Before we go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Validatedfilefield")," tutorial, let's first get acquainted with ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatedFilefield")," parameters"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"libraries"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"list"),"  ",(0,r.kt)("inlineCode",{parentName:"td"},"optional")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value of libraries should be a list of libraries with which you want to perform the validation operation. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Example")," :     ",(0,r.kt)("inlineCode",{parentName:"td"},'libraries=["filetype","python_magic", "filetype"]')," ",(0,r.kt)("br",null)," defaults If you do not select any library, it will perform the validation operation with ",(0,r.kt)("inlineCode",{parentName:"td"},"django")," by default, Supported libraries for validation operations: ",(0,r.kt)("inlineCode",{parentName:"td"},"python_magic"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pure_magic"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"filetype"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"mimetypes"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"default")," ",(0,r.kt)("br",null)," If you use ",(0,r.kt)("inlineCode",{parentName:"td"},"all"),", validation operations will be performed with all libraries and if you use ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),", validation operations will only be done with ",(0,r.kt)("inlineCode",{parentName:"td"},"Django"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptable_mimes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The mimes you want the file to be checked based on. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"  example"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"acceptable_mimes=['audio/mpeg', 'video/mp4']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptable_types"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The types you want the file to be checked based on. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"  example"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"acceptable_types=['audio', 'video']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_upload_file_size"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int"),"    ",(0,r.kt)("inlineCode",{parentName:"td"},"optional")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If you want the file size to be checked, the file size must be in bytes, ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"}," example"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"max_upload_file_size=1048576"),"  (1MB) ",(0,r.kt)("br",null)," defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"None")))))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Returns:"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"If the mime list is ",(0,r.kt)("strong",{parentName:"td"}," empty"),", raised a ",(0,r.kt)("inlineCode",{parentName:"td"},"value error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"If the library you entered is not supported, raised a",(0,r.kt)("inlineCode",{parentName:"td"}," value error"),", ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Supported library:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"filetype"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"mimetypes"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pure_magic"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"python_magic"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"if file not valid raises ",(0,r.kt)("inlineCode",{parentName:"td"},"ValidationError"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"At least one of the parameters of ",(0,r.kt)("inlineCode",{parentName:"td"},"acceptable_mimes")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"acceptable_types")," must be filled else ",(0,r.kt)("inlineCode",{parentName:"td"},"EmptyParametersException")," error occurs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"If the type you enter in ",(0,r.kt)("inlineCode",{parentName:"td"},"acceptable_types")," is not supported by the file-validator library, it will cause ",(0,r.kt)("inlineCode",{parentName:"td"},"TypeNotSupportedException")," error, supported types are ",(0,r.kt)("inlineCode",{parentName:"td"},"audio"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"video"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"font")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"archive")))))),(0,r.kt)("h2",{id:"size-conversion-table"},"Size conversion table"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To choose the size you want the files to be validated based on, you can take help from the table below or enter your\ndesired size in bytes:"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Bytes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1048576 B - 1024",(0,r.kt)("strong",{parentName:"td"},"2 B - 2"),"20 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.5 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2621440 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5242880 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10485760 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20971520 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"50 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"52428800 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"104857600 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"250 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"262144000 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500 MB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"524288000 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 GB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1073741824 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2 GB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2147483648 B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"}))))),(0,r.kt)("h2",{id:"how-use-validatedfilefield"},"How Use ValidatedFilefield?"),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatedFilefield")," you must act as follows:"),(0,r.kt)("p",null,"1.First, import the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatedFilefield")," to your Django model as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from django.db import models\nfrom file_validator.models import ValidatedFileField\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"In the next step we have to give it to our model as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from django.db import models\nfrom file_validator.models import ValidatedFileField\n\n\nclass TestFileModel(models.Model):\n    test_file = ValidatedFileField(\n        libraries=[\"all\"],  # => validation operations will be performed with all libraries\n        acceptable_mimes=['audio/mpeg', 'video/mp4'],  # => The mimes you want the file to be checked based on.\n        acceptable_types=['audio', 'video'],  # => The types you want the file to be checked based on.\n        max_upload_file_size=10485760  # => 10 MB\n    )\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Finally run with the following commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python manage.py makemigrations\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python manage.py migrate\n")),(0,r.kt)("p",null,"Done \u2705"),(0,r.kt)("p",null,"From now on, get the files safely from users."))}s.isMDXComponent=!0}}]);