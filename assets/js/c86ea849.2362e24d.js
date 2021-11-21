"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[5876],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92815:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],l={title:"Upgrading From Rojo 6"},s=void 0,p={unversionedId:"upgrade",id:"version-v7/upgrade",isDocsHomePage:!1,title:"Upgrading From Rojo 6",description:"While Rojo 7 is mostly backwards compatible with Rojo 6, it has a couple important breaking changes to be aware of.",source:"@site/versioned_docs/version-v7/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/docs/v7/upgrade",editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v7/upgrade.md",tags:[],version:"v7",frontMatter:{title:"Upgrading From Rojo 6"},sidebar:"version-v7/tutorialSidebar",previous:{title:"Rojo Alternatives",permalink:"/docs/v7/rojo-alternatives"}},c=[{value:"Explicit Properties in Project/Meta Files",id:"explicit-properties-in-projectmeta-files",children:[],level:2},{value:"Project File Composition Instance Names",id:"project-file-composition-instance-names",children:[],level:2}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While Rojo 7 is mostly backwards compatible with Rojo 6, it has a couple important breaking changes to be aware of."),(0,r.kt)("h2",{id:"explicit-properties-in-projectmeta-files"},"Explicit Properties in Project/Meta Files"),(0,r.kt)("p",null,"Rojo has support for specifying properties in project files as well as ",(0,r.kt)("inlineCode",{parentName:"p"},".meta.json")," files. There are two ways to write properties in these files, the explicit syntax and implicit syntax."),(0,r.kt)("p",null,"Rojo's ",(0,r.kt)("strong",{parentName:"p"},"implicit syntax")," has not changed. In Both Rojo 6 and 7, you can write properties like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "cool-skateboard",\n    "tree": {\n        "$className": "Part",\n        "$properties": {\n            "Material": "Wood",\n            "Size": [2, 0.5, 6],\n            "Color": [1, 0, 0],\n            "CFrame": [\n                0, 10, 0,\n                1, 0, 0,\n                0, 1, 0,\n                0, 0, 1\n            ]\n        }\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's strongly recommended to use the implicit syntax when possible! It's shorter, easier to read, and more future-proof."))),(0,r.kt)("p",null,"Rojo also has a more ",(0,r.kt)("strong",{parentName:"p"},"explicit syntax")," for specifying property values. This syntax should be used only for a couple reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using an new enum value that Rojo doesn't know about."),(0,r.kt)("li",{parentName:"ul"},"Writing a property with a different value type than what Rojo expects.")),(0,r.kt)("p",null,"In Rojo 6, this same model using the ",(0,r.kt)("strong",{parentName:"p"},"explicit property syntax")," would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "cool-skateboard",\n    "tree": {\n        "$className": "Part",\n        "$properties": {\n            "Material": {\n                "Type": "Enum",\n                "Value": 512\n            },\n            "Size": {\n                "Type": "Vector3",\n                "Value": [2, 0.5, 6]\n            },\n            "Color": {\n                "Type": "Color3",\n                "Value": [1, 0, 0]\n            },\n            "CFrame": {\n                "Type": "CFrame", \n                "Value": [\n                    0, 10, 0,\n                    1, 0, 0,\n                    0, 1, 0,\n                    0, 0, 1\n                ]\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"This format has changed in Rojo 7. The same model with Rojo 7's explicit property syntax would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "cool-skateboard",\n    "tree": {\n        "$className": "Part",\n        "$properties": {\n            "Material": {\n                "Enum": 512\n            },\n            "Size": {\n                "Vector3": [2, 0.5, 6]\n            },\n            "Color": {\n                "Color3": [1, 0, 0]\n            },\n            "CFrame": {\n                "CFrame": {\n                    "position": [0, 10, 0],\n                    "orientation": [\n                        1, 0, 0,\n                        0, 1, 0,\n                        0, 0, 1\n                    ]\n                }\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"In Rojo 7, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," fields were folded together to reduce the amount of typing. Some types like ",(0,r.kt)("inlineCode",{parentName:"p"},"CFrame")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorSequence")," had fields added or renamed."),(0,r.kt)("p",null,"Since the release of Rojo 6, it has been feasible to use ",(0,r.kt)("inlineCode",{parentName:"p"},"rbxm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"rbxmx")," files for models instead of typing properties by hand. For more complicated models, this is recommended."),(0,r.kt)("h2",{id:"project-file-composition-instance-names"},"Project File Composition Instance Names"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature has not been released in any Rojo 7 prereleases yet."))),(0,r.kt)("p",null,"Rojo discovers ",(0,r.kt)("inlineCode",{parentName:"p"},".project.json")," files in your tree and reads them to allow you to compose project files together."),(0,r.kt)("p",null,"How Rojo chooses the name of the top level instance from nested projects has changed in Rojo 7. The names of the top level instance "),(0,r.kt)("p",null,"Given a project named ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.project.json")," with these contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "bar",\n    "tree": {\n        "$className": "Folder"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rojo 6 will create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Folder")," named ",(0,r.kt)("inlineCode",{parentName:"li"},"bar")),(0,r.kt)("li",{parentName:"ul"},"Rojo 7 will create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Folder")," named ",(0,r.kt)("inlineCode",{parentName:"li"},"foo"))),(0,r.kt)("p",null,"Rojo 7 uses the root of the project's file name, while Rojo 6 always uses the name given in the project file."),(0,r.kt)("p",null,"For another example, consider a project file in a folder. Its path is ",(0,r.kt)("inlineCode",{parentName:"p"},"folder/default.project.json")," with these contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "bar",\n    "tree": {\n        "$className": "Folder"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rojo 6 will create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Folder")," named ",(0,r.kt)("inlineCode",{parentName:"li"},"bar")),(0,r.kt)("li",{parentName:"ul"},"Rojo 7 will create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Folder")," named ",(0,r.kt)("inlineCode",{parentName:"li"},"folder"))),(0,r.kt)("p",null,"When the project file's name is ",(0,r.kt)("inlineCode",{parentName:"p"},"default.project.json"),", it acts much like ",(0,r.kt)("inlineCode",{parentName:"p"},"init.lua"),". The instance's name comes from the parent folder instead of the project file."))}d.isMDXComponent=!0}}]);