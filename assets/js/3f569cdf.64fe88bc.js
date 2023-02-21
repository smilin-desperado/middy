"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[3775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:n,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(7462),n=r(7294),l=r(6010),o=r(2466),u=r(6550),i=r(1980),s=r(7392),c=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,s]=f({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),h=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var h=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==u&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":u===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(w,(0,a.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),l=r(4866),o=r(5162);const u={title:"warmup"},i=void 0,s={unversionedId:"middlewares/warmup",id:"middlewares/warmup",title:"warmup",description:"Warmup middleware that helps to reduce the cold-start issue. Compatible by default with serverless-plugin-warmup, but it can be configured to suit your implementation.",source:"@site/docs/middlewares/warmup.md",sourceDirName:"middlewares",slug:"/middlewares/warmup",permalink:"/docs/middlewares/warmup",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/warmup.md",tags:[],version:"current",lastUpdatedAt:1676996719,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{title:"warmup"},sidebar:"tutorialSidebar",previous:{title:"validator",permalink:"/docs/middlewares/validator"},next:{title:"ws-json-body-parser",permalink:"/docs/middlewares/ws-json-body-parser"}},c={},p=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Warmup middleware that helps to reduce the ",(0,n.kt)("a",{parentName:"p",href:"https://serverless.com/blog/keep-your-lambdas-warm/"},"cold-start issue"),". Compatible by default with ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/serverless-plugin-warmup"},(0,n.kt)("inlineCode",{parentName:"a"},"serverless-plugin-warmup")),", but it can be configured to suit your implementation."),(0,n.kt)("p",null,"This middleware allows you to specify a schedule to keep Lambdas that always need to be very responsive warmed-up. It does this by regularly invoking the Lambda, but will terminate early to avoid the actual handler logic from being run."),(0,n.kt)("p",null,"If you use ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/serverless-plugin-warmup"},(0,n.kt)("inlineCode",{parentName:"a"},"serverless-plugin-warmup")),' the scheduling part is done by the plugin and you just have to attach the middleware to your "middyfied" handler. If you don\'t want to use the plugin you have to create the schedule yourself and define the ',(0,n.kt)("inlineCode",{parentName:"p"},"isWarmingUp")," function to define whether the current event is a warmup event or an actual business logic execution."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important:")," AWS recently announced Lambda ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/about-aws/whats-new/2019/12/aws-lambda-announces-provisioned-concurrency/"},"Provisioned Concurrency"),". If you have this enabled, you do not need this middleware."),(0,n.kt)("p",null,"To update your code to use Provisioned Concurrency see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/compute/new-for-aws-lambda-predictable-start-up-times-with-provisioned-concurrency/"},"AWS Console")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://serverless.com/blog/aws-lambda-provisioned-concurrency/"},"Serverless")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html"},"Terraform"))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"To install this middleware you can use NPM:"),(0,n.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/warmup\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/warmup\n")))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isWarmingUp"),": a function that accepts the ",(0,n.kt)("inlineCode",{parentName:"li"},"event")," object as a parameter\nand returns ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," if the current event is a warmup event and ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," if it's a regular execution. The default function will check if the ",(0,n.kt)("inlineCode",{parentName:"li"},"event")," object has a ",(0,n.kt)("inlineCode",{parentName:"li"},"source")," property set to ",(0,n.kt)("inlineCode",{parentName:"li"},"serverless-plugin-warmup"),".")),(0,n.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const middy = require('@middy/core')\nconst warmup = require('@middy/warmup')\n\nconst isWarmingUp = (event) => event.isWarmingUp === true\n\nconst originalHandler = (event, context, cb) => {\n  /* ... */\n}\n\nconst handler = middy(originalHandler)\n  .use(warmup({ isWarmingUp }))\n")))}f.isMDXComponent=!0}}]);