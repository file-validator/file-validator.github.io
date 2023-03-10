"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="\ud83d\udca1 Installation",l={unversionedId:"installation",id:"version-0.x.x/installation",title:"\ud83d\udca1 Installation",description:"Install Stable release",source:"@site/versioned_docs/version-0.x.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.x.x/installation.md",tags:[],version:"0.x.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u25b6\ufe0f Introduction",permalink:"/docs/intro"},next:{title:"\ud83d\udd29 Usage",permalink:"/docs/category/-usage"}},s={},p=[{value:"Install Stable release",id:"install-stable-release",level:2},{value:"From sources",id:"from-sources",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-installation"},"\ud83d\udca1 Installation"),(0,a.kt)("h2",{id:"install-stable-release"},"Install Stable release"),(0,a.kt)("p",null,"In this section we start installing File Validator"),(0,a.kt)("p",null,"To install File Validator, run this command in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install file-validator\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"After installing file validator, we need to install ",(0,a.kt)("strong",{parentName:"p"},"libmagic"),", which you need to install using the following command:"),(0,a.kt)("p",{parentName:"admonition"},"for windows:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"pip install python-magic-bin\n")),(0,a.kt)("p",{parentName:"admonition"},"for Debian/Ubuntu:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install libmagic1\n")),(0,a.kt)("p",{parentName:"admonition"},"for OSX:"),(0,a.kt)("p",{parentName:"admonition"},"When using Homebrew:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"brew install libmagic\n")),(0,a.kt)("p",{parentName:"admonition"},"When using macports:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"port install file\n"))),(0,a.kt)("p",null,"This is the preferred method to install File Validator, as it will always install the most recent stable release"),(0,a.kt)("p",null,"If you don\u2019t have ",(0,a.kt)("a",{parentName:"p",href:"https://pip.pypa.io/"},"pip")," installed, this ",(0,a.kt)("a",{parentName:"p",href:"http://docs.python-guide.org/en/latest/starting/installation/"},"Python installation guide")," can guide you through the process."),(0,a.kt)("h2",{id:"from-sources"},"From sources"),(0,a.kt)("p",null,"The sources for File Validator can be downloaded from the Github repo."),(0,a.kt)("p",null,"You can either clone the public repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone git://github.com/file-validator/file-validator\n")),(0,a.kt)("p",null,"Or download the tarball:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -OJL https://github.com/file-validator/file-validator/tarball/master\n")),(0,a.kt)("p",null,"Once you have a copy of the source, you can install it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python setup.py install\n")))}u.isMDXComponent=!0}}]);