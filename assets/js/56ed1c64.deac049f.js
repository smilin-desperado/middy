"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4097],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={title:"All AWS Events",position:1},i=void 0,s={unversionedId:"events/intro",id:"events/intro",title:"All AWS Events",description:"Middy is built to help with all AWS Events that can connect with AWS Lambda.",source:"@site/docs/events/01-intro.md",sourceDirName:"events",slug:"/events/intro",permalink:"/docs/events/intro",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/01-intro.md",tags:[],version:"current",lastUpdatedAt:1673403655,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:1,frontMatter:{title:"All AWS Events",position:1},sidebar:"tutorialSidebar",previous:{title:"AWS Event Examples",permalink:"/docs/category/aws-event-examples"},next:{title:"Alexa",permalink:"/docs/events/alexa"}},d={},l=[{value:"Middlewares that can benefit any Lambda",id:"middlewares-that-can-benefit-any-lambda",level:2},{value:"Need secrets? We have you covered there too",id:"need-secrets-we-have-you-covered-there-too",level:2},{value:"How about configs? We have you covered there as well",id:"how-about-configs-we-have-you-covered-there-as-well",level:2}],c={toc:l};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Middy is built to help with all AWS Events that can connect with AWS Lambda."),(0,a.kt)("h2",{id:"middlewares-that-can-benefit-any-lambda"},"Middlewares that can benefit any Lambda"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport cloudWatchMetricsMiddleware from '@middy/cloudwatch-metrics'\nimport errorLoggerMiddleware from '@middy/error-logger'\nimport inputOutputLoggerMiddleware from '@middy/input-output-logger'\nimport validatorMiddleware from 'validator'\nimport warmupMiddleware from 'warmup'\n\nimport eventSchema from './eventSchema.json' assert { type: 'json' }\nimport responseSchema from './responseSchema.json' assert { type: 'json' }\n\nconst handler = middy()\n  .use(warmupMiddleware())\n  .use(cloudWatchMetricsMiddleware())\n  .use(inputOutputLoggerMiddleware())\n  .use(errorLoggerMiddleware())\n  .use(validatorMiddleware({ eventSchema, responseSchema }))\n  .handler(async (event, context, { signal }) => {\n    // ...\n  })\n")),(0,a.kt)("h2",{id:"need-secrets-we-have-you-covered-there-too"},"Need secrets? We have you covered there too"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport { getInternal } from '@middy/util'\nimport rdsSignerMiddleware from '@middy/rds-signer'\nimport secretsManagerMiddleware from '@middy/secrets-manager'\nimport ssmMiddleware from '@middy/ssm'\nimport stsMiddleware from '@middy/sts'\n\nexport const handler = middy()\n  .use(\n    rdsSignerMiddleware({\n      fetchData: {\n        rdsSigner: {\n          region: process.env.AWS_REGION,\n          hostname: process.env.RDS_HOSTNAME,\n          username: 'iam_role',\n          database: 'database',\n          port: 5555\n        }\n      }\n    })\n  )\n  .use(\n    secretsManagerMiddleware({\n      fetchData: {\n        secretsManager: '/dev/service_name/key_name'\n      }\n    })\n  )\n  .use(\n    ssmMiddleware({\n      fetchData: {\n        ssm: '/dev/service_name/key_name'\n      }\n    })\n  )\n  .use(\n    stsMiddleware({\n      fetchData: {\n        sts: {\n          RoleArn: '.../role'\n        }\n      }\n    })\n  )\n  .before(async (request) => {\n    request.context.secrets = await getInternal(true, request)\n  })\n  .handler(async (event, context, { signal }) => {\n    // context.secrets = { rdsSigner, secretsManager, ssm, sts }\n  })\n")),(0,a.kt)("h2",{id:"how-about-configs-we-have-you-covered-there-as-well"},"How about configs? We have you covered there as well"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport { getInternal } from '@middy/util'\nimport appConfigMiddleware from '@middy/appconfig'\nimport s3Middleware from '@middy/s3'\nimport dynamoDBMiddleware from '@middy/dynamodb'\nimport ssmMiddleware from '@middy/ssm'\n\nexport const handler = middy()\n  .use(\n    appConfigMiddleware({\n      fetchData: {\n        appConfig: {\n          Application: '...',\n          ClientId: '...',\n          Configuration: '...',\n          Environment: '...'\n        }\n      }\n    })\n  )\n  .use(\n    s3Middleware({\n      fetchData: {\n        s3: {\n          Bucket: '...',\n          Key: '...'\n        }\n      }\n    })\n  )\n  .use(\n    dynamoDBMiddleware({\n      fetchData: {\n        dynamodb: {\n          TableName: '...',\n          Key: { '...' }\n        }\n      }\n    })\n  )\n  .use(\n    ssmMiddleware({\n      fetchData: {\n        ssm: '/dev/service_name/key_name'\n      }\n    })\n  )\n  .before(async (request) => {\n    request.context.configs = await getInternal(true, request)\n  })\n  .handler(async (event, context, { signal }) => {\n    // context.configs = { appConfig, dynamodb, s3, ssm }\n  })\n")))}m.isMDXComponent=!0}}]);