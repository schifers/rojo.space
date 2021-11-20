"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[2057],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58758:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:4},p="Project Format",s={unversionedId:"project-format",id:"project-format",isDocsHomePage:!1,title:"Project Format",description:"Project File",source:"@site/docs/project-format.md",sourceDirName:".",slug:"/project-format",permalink:"/docs/v7/project-format",editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/docs/project-format.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Porting an Existing Game",permalink:"/docs/v7/getting-started/existing-game"},next:{title:"Sync Details",permalink:"/docs/v7/sync-details"}},c=[{value:"Project File",id:"project-file",children:[],level:2},{value:"Instance Description",id:"instance-description",children:[],level:2},{value:"Instance Property Value",id:"instance-property-value",children:[],level:2},{value:"Example Projects",id:"example-projects",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"project-format"},"Project Format"),(0,i.kt)("h2",{id:"project-file"},"Project File"),(0,i.kt)("p",null,"Rojo projects are JSON files that have the ",(0,i.kt)("inlineCode",{parentName:"p"},".project.json")," extension. They have the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": A string indicating the name of the project. This name is used when building the project into a model or place file.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tree"),": An ",(0,i.kt)("a",{parentName:"li",href:"#instance-description"},"Instance Description")," describing the root instance of the project.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"servePort"),": The port that ",(0,i.kt)("inlineCode",{parentName:"li"},"rojo serve")," should listen on. Passing ",(0,i.kt)("inlineCode",{parentName:"li"},"--port")," will override this setting.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")),(0,i.kt)("li",{parentName:"ul"},"Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"34872")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"servePlaceIds"),": A list of place IDs that this project may be live-synced to. This feature can help prevent overwriting the wrong game with source from Rojo.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")),(0,i.kt)("li",{parentName:"ul"},"Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"null")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"globIgnorePaths"),": A list of globs of paths to ignore.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")),(0,i.kt)("li",{parentName:"ul"},"Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"))))),(0,i.kt)("h2",{id:"instance-description"},"Instance Description"),(0,i.kt)("p",null,"Instance Descriptions correspond one-to-one with the actual Roblox Instances in the project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$className"),": The ClassName of the Instance being described.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional if ",(0,i.kt)("inlineCode",{parentName:"strong"},"$path")," is specified or if the instance is a Roblox service.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$path"),": The path on the filesystem to pull files from into the project.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional if ",(0,i.kt)("inlineCode",{parentName:"strong"},"$className")," is specified.")),(0,i.kt)("li",{parentName:"ul"},"Paths are relative to the folder containing the project file."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$properties"),": Properties to apply to the instance. Values should be ",(0,i.kt)("a",{parentName:"li",href:"#instance-property-value"},"Instance Property Values"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ignoreUnknownInstances"),": Whether instances that Rojo doesn't know about should be deleted.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")),(0,i.kt)("li",{parentName:"ul"},"Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"$path")," is specified, otherwise ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,i.kt)("p",null,"All other fields in an Instance Description are turned into instances whose name is the key. These values should also be Instance Descriptions!"),(0,i.kt)("h2",{id:"instance-property-value"},"Instance Property Value"),(0,i.kt)("p",null,"There are two kinds of property values on instances, ",(0,i.kt)("strong",{parentName:"p"},"implicit")," and ",(0,i.kt)("strong",{parentName:"p"},"explicit"),"."),(0,i.kt)("p",null,"In the vast majority of cases, you should be able to use ",(0,i.kt)("strong",{parentName:"p"},"implicit")," property values. To use them, just use a value that's the same shape as the type that the property has:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"MyPart": {\n    "$className": "Part",\n    "$properties": {\n        "Size": [3, 5, 3],\n        "Color": [0.5, 0, 0.5],\n        "Anchored": true,\n        "Material": "Granite"\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vector3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Color3")," properties can just be arrays of numbers, as can types like ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CFrame"),", and more!"),(0,i.kt)("p",null,"Enums can be set to a string containing the enum variant. Rojo will raise an error if the string isn't a valid variant for the enum."),(0,i.kt)("p",null,"There are some cases where this syntax for assigning properties ",(0,i.kt)("em",{parentName:"p"},"doesn't")," work. In these cases, Rojo requires you to use the ",(0,i.kt)("strong",{parentName:"p"},"explicit")," property syntax."),(0,i.kt)("p",null,"Some reasons why you might need to use an ",(0,i.kt)("strong",{parentName:"p"},"explicit")," property:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using exotic property types like ",(0,i.kt)("inlineCode",{parentName:"li"},"BinaryString")),(0,i.kt)("li",{parentName:"ul"},"Using properties added to Roblox recently that Rojo doesn't know about yet")),(0,i.kt)("p",null,"The shape of explicit property values is defined by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LPGhatguy/rbx-dom"},"rbx-dom")," library, so it uses slightly different conventions than the rest of Rojo."),(0,i.kt)("p",null,"Each value should be an object with the following required fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),": The type of property to represent.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LPGhatguy/rbx-tree#property-type-coverage"},"Supported types can be found here"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Value"),": The value of the property.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The shape of this field depends on which property type is being used. ",(0,i.kt)("inlineCode",{parentName:"li"},"Vector3")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Color3")," values are both represented as a list of numbers, while ",(0,i.kt)("inlineCode",{parentName:"li"},"BinaryString")," expects a base64-encoded string, for example.")))),(0,i.kt)("p",null,"Here's the same object, but with explicit properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"MyPart": {\n    "$className": "Part",\n    "$properties": {\n        "Size": {\n            "Type": "Vector3",\n            "Value": [3, 5, 3]\n        },\n        "Color": {\n            "Type": "Color3",\n            "Value": [0.5, 0, 0.5]\n        },\n        "Anchored": {\n            "Type": "Bool",\n            "Value": true\n        },\n        "Material": {\n            "Type": "Enum",\n            "Value": 832\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"example-projects"},"Example Projects"),(0,i.kt)("p",null,"This project bundles up everything in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory. It'd be suitable for making a plugin or model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "AwesomeLibrary",\n  "tree": {\n    "$path": "src"\n  }\n}\n')),(0,i.kt)("p",null,"This project describes the layout you might use if you were making the next hit simulator game, ",(0,i.kt)("em",{parentName:"p"},"Sisyphus Simulator"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Sisyphus Simulator",\n  "globIgnorePaths": ["**/*.spec.lua"],\n  "tree": {\n    "$className": "DataModel",\n\n    "HttpService": {\n      "$className": "HttpService",\n      "$properties": {\n        "HttpEnabled": true\n      }\n    },\n\n    "ReplicatedStorage": {\n      "$className": "ReplicatedStorage",\n      "$path": "src/ReplicatedStorage"\n    },\n\n    "StarterPlayer": {\n      "$className": "StarterPlayer",\n\n      "StarterPlayerScripts": {\n        "$className": "StarterPlayerScripts",\n        "$path": "src/StarterPlayerScripts"\n      }\n    },\n\n    "Workspace": {\n      "$className": "Workspace",\n      "$properties": {\n        "Gravity": 67.3\n      },\n\n      "Terrain": {\n        "$path": "Terrain.rbxm"\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);