"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),d=n(2466);const p="tabList__CuJ",m="tabItem_LNqP";function u(e){const{lazy:t,block:n,defaultValue:i,values:u,groupId:c,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,s.U)(),[N,w]=(0,r.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=c){const e=y[c];null!=e&&e!==N&&v.some((t=>t.value===e))&&w(e)}const S=e=>{const t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==N&&(C(t),w(a),null!=c&&b(c,String(a)))},O=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]??j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]??j[j.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},f)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:O,onClick:S},i,{className:(0,l.Z)("tabs__item",m,i?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},3144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={title:"validator"},s=void 0,d={unversionedId:"middlewares/validator",id:"middlewares/validator",title:"validator",description:"This middleware automatically validates incoming events and outgoing responses against custom",source:"@site/docs/middlewares/validator.md",sourceDirName:"middlewares",slug:"/middlewares/validator",permalink:"/docs/middlewares/validator",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/validator.md",tags:[],version:"current",lastUpdatedAt:1673403655,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{title:"validator"},sidebar:"tutorialSidebar",previous:{title:"sts",permalink:"/docs/middlewares/sts"},next:{title:"warmup",permalink:"/docs/middlewares/warmup"}},p={},m=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"transpileSchema",id:"transpileschema",level:2},{value:"transpileLocale",id:"transpilelocale",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Pre-transpiling example (recommended)",id:"pre-transpiling-example-recommended",level:2},{value:"Transpile during cold-start",id:"transpile-during-cold-start",level:2},{value:"Transpile during cold-start with default messages",id:"transpile-during-cold-start-with-default-messages",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This middleware automatically validates incoming events and outgoing responses against custom\nschemas defined with the ",(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON schema syntax"),"."),(0,r.kt)("p",null,"If an incoming event fails validation a ",(0,r.kt)("inlineCode",{parentName:"p"},"BadRequest")," error is raised.\nIf an outgoing response fails validation a ",(0,r.kt)("inlineCode",{parentName:"p"},"InternalServerError")," error is\nraised."),(0,r.kt)("p",null,"This middleware can be used in combination with\n",(0,r.kt)("a",{parentName:"p",href:"#httperrorhandler"},(0,r.kt)("inlineCode",{parentName:"a"},"httpErrorHandler"))," to automatically return the right\nresponse to the user."),(0,r.kt)("p",null,"It can also be used in combination with ",(0,r.kt)("a",{parentName:"p",href:"#httpContentNegotiation"},(0,r.kt)("inlineCode",{parentName:"a"},"http-content-negotiation"))," to load localized translations for the error messages (based on the currently requested language). This feature uses internally ",(0,r.kt)("a",{parentName:"p",href:"http://npm.im/ajv-ftl-i18n"},(0,r.kt)("inlineCode",{parentName:"a"},"ajv-ftl-i18n"))," module, so reference to this module for options and more advanced use cases. By default the language used will be English (",(0,r.kt)("inlineCode",{parentName:"p"},"en"),"), but you can redefine the default language by passing it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ajvOptions")," options with the key ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultLanguage")," and specifying as value one of the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ajv-i18n#supported-locales"},"supported locales"),"."),(0,r.kt)("p",null,"Also, this middleware accepts an object with plugins to be applied to customize the internal ",(0,r.kt)("inlineCode",{parentName:"p"},"ajv")," instance."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"To install this middleware you can use NPM:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/validator\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/validator\n")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eventSchema")," (function) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): The compiled ajv validator that will be used\nto validate the input (",(0,r.kt)("inlineCode",{parentName:"li"},"request.event"),") of the Lambda handler."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contextSchema")," (function) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): The compiled ajv validator that will be used\nto validate the input (",(0,r.kt)("inlineCode",{parentName:"li"},"request.context"),") of the Lambda handler. Has additional support for ",(0,r.kt)("inlineCode",{parentName:"li"},"typeof")," keyword to allow validation of ",(0,r.kt)("inlineCode",{parentName:"li"},'"typeof":"function"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"responseSchema")," (function) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): The compiled ajv validator that will be used\nto validate the output (",(0,r.kt)("inlineCode",{parentName:"li"},"request.response"),") of the Lambda handler."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i18nEnabled")," (boolean) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"): Option to disable i18n default package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultLanguage")," (string) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"en"),"): When language not found, what language to fallback to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"languages")," (object) (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"): Localization overrides")),(0,r.kt)("p",null,"NOTES:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At least one of ",(0,r.kt)("inlineCode",{parentName:"li"},"eventSchema")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"responseSchema")," is required."),(0,r.kt)("li",{parentName:"ul"},"If you'd like to have the error details as part of the response, it will need to be handled separately. You can access them from ",(0,r.kt)("inlineCode",{parentName:"li"},"request.error.cause"),", the original response can be found at ",(0,r.kt)("inlineCode",{parentName:"li"},"request.error.response"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Important")," Transpiling schemas & locales on the fly will cause a 50-150ms performance hit during cold start for simple JSON Schemas. Precompiling is highly recommended.")),(0,r.kt)("h2",{id:"transpileschema"},"transpileSchema"),(0,r.kt)("p",null,"Transpile JSON-Schema in to JavaScript. Default ajv plugins used: ",(0,r.kt)("inlineCode",{parentName:"p"},"ajv-i18n"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ajv-formats"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ajv-formats-draft2019"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ajv-keywords"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ajv-errors"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema")," (object) (required): JSON-Schema object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ajvOptions")," (object) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): Options to pass to ",(0,r.kt)("a",{parentName:"li",href:"https://ajv.js.org/docs/api.html#options"},"ajv"),"\nclass constructor. Defaults are ",(0,r.kt)("inlineCode",{parentName:"li"},"{ strict: true, coerceTypes: 'array', allErrors: true, useDefaults: 'empty', messages: true }"),".")),(0,r.kt)("h2",{id:"transpilelocale"},"transpileLocale"),(0,r.kt)("p",null,"Transpile Fluent (.ftl) localization file into ajv compatible format. Allows the overriding of the default messages and adds support for multi-language ",(0,r.kt)("inlineCode",{parentName:"p"},"errrorMessages"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ftl")," (string) (required): Contents of an ftl file to be transpiled.")),(0,r.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,r.kt)("p",null,"Example for event validation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport validator from '@middy/validator'\nimport { transpileSchema } from '@middy/validator/transpile'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nconst schema = {\n  type: 'object',\n  required: ['body', 'foo'],\n  properties: {\n    // this will pass validation\n    body: {\n      type: 'string'\n    },\n    // this won't as it won't be in the event\n    foo: {\n      type: 'string'\n    }\n  }\n}\n\nhandler.use(\n  validator({\n    eventSchema: transpileSchema(schema)\n  })\n)\n\n// invokes the handler, note that property foo is missing\nconst event = {\n  body: JSON.stringify({ something: 'somethingelse' })\n}\nhandler(event, {}, (err, res) => {\n  t.is(err.message, 'Event object failed validation')\n})\n")),(0,r.kt)("p",null,"Example for response validation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport validator from '@middy/validator'\nimport { transpileSchema } from '@middy/validator/transpile'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nconst responseSchema = transpileSchema({\n  type: 'object',\n  required: ['body', 'statusCode'],\n  properties: {\n    body: {\n      type: 'object'\n    },\n    statusCode: {\n      type: 'number'\n    }\n  }\n})\n\nhandler.use(validator({ responseSchema }))\n\nhandler({}, {}, (err, response) => {\n  t.not(err, null)\n  t.is(err.message, 'Response object failed validation')\n  expect(response).not.toBe(null)\n  // it doesn't destroy the response so it can be used by other middlewares\n})\n")),(0,r.kt)("h2",{id:"pre-transpiling-example-recommended"},"Pre-transpiling example (recommended)"),(0,r.kt)("p",null,"Run a build script to before running tests & deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env bash\n\n# This is an example, should be customize to meet ones needs\n# Powered by `ajv-cmd`\n# $ ajv --help\n\nbundle () {\n  ajv validate ${1} --valid \\\n    --strict true --coerce-types array --all-errors true --use-defaults empty\n  ajv transpile ${1} \\\n  --strict true --coerce-types array --all-errors true --use-defaults empty \\\n  -o ${1%.json}.js\n}\n\nfor file in handlers/*/schema.*.json; do\n  bundle $file\ndone\n\nlocale () {\n  LOCALE=$(basename ${1%.ftl})\n  ajv ftl ${1} --locale ${LOCALE} -o ${1%.ftl}.js\n}\n\nfor file in handlers/*/*.ftl; do\n  locale $file\ndone\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport validator from '@middy/validator'\nimport eventSchema from './schema.event.js'\nimport en from './en.js'\nimport fr from './fr.js'\n\nexport const handler = middy()\n  .use(\n    validator({\n      eventSchema,\n      languages: { en, fr }\n    })\n  )\n  .handler((event, context) => {\n    return {}\n  })\n")),(0,r.kt)("h2",{id:"transpile-during-cold-start"},"Transpile during cold-start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { readFile } from 'node:fs/promises'\nimport middy from '@middy/core'\nimport validator from '@middy/validator'\nimport { transpileSchema, transpileLocale } from '@middy/validator/transpile'\nimport eventSchema from './schema.event.json'\n\nconst en = transpileLocale(await readFile('./en.ftl'))\nconst fr = transpileLocale(await readFile('./fr.ftl'))\n\nexport const handler = middy()\n  .use(\n    validator({\n      eventSchema: transpileSchema(eventSchema),\n      languages: { en, fr }\n    })\n  )\n  .handler((event, context) => {\n    return {}\n  })\n")),(0,r.kt)("h2",{id:"transpile-during-cold-start-with-default-messages"},"Transpile during cold-start with default messages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { readFile } from 'node:fs/promises'\nimport middy from '@middy/core'\nimport validator from '@middy/validator'\nimport { transpileSchema, transpileLocale } from '@middy/validator/transpile'\nimport { en, fr } from 'ajv-ftl-i18n' // `ajv-i18n` can also be used\nimport eventSchema from './schema.event.json'\n\nexport const handler = middy()\n  .use(\n    validator({\n      eventSchema: transpileSchema(eventSchema),\n      languages: { en, fr }\n    })\n  )\n  .handler((event, context) => {\n    return {}\n  })\n")))}c.isMDXComponent=!0}}]);