"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||l;return r?a.createElement(c,o(o({ref:t},p),{},{components:r})):a.createElement(c,o({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const l={title:"Upgrade 2.x -> 3.x",sidebar_position:100},o=void 0,i={unversionedId:"upgrade/2-3",id:"upgrade/2-3",title:"Upgrade 2.x -> 3.x",description:"Version 3.x of Middy no longer supports Node.js versions 12.x. You are highly encouraged to move to Node.js 16.x.",source:"@site/docs/upgrade/2-3.md",sourceDirName:"upgrade",slug:"/upgrade/2-3",permalink:"/docs/upgrade/2-3",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/upgrade/2-3.md",tags:[],version:"current",lastUpdatedAt:1673403655,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:100,frontMatter:{title:"Upgrade 2.x -> 3.x",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Upgrade 3.x -> 4.x",permalink:"/docs/upgrade/3-4"},next:{title:"Upgrade 1.x -> 2.x",permalink:"/docs/upgrade/1-2"}},s={},d=[{value:"Notable changes",id:"notable-changes",level:2},{value:"Core",id:"core",level:2},{value:"Util",id:"util",level:2},{value:"Middleware",id:"middleware",level:2},{value:"cloudwatch-metrics",id:"cloudwatch-metrics",level:3},{value:"do-not-wait-for-empty-event-loop",id:"do-not-wait-for-empty-event-loop",level:3},{value:"error-logger",id:"error-logger",level:3},{value:"event-normalizer",id:"event-normalizer",level:3},{value:"http-content-encoding",id:"http-content-encoding",level:3},{value:"http-content-negotiation",id:"http-content-negotiation",level:3},{value:"http-cors",id:"http-cors",level:3},{value:"http-error-handler",id:"http-error-handler",level:3},{value:"http-event-normalizer",id:"http-event-normalizer",level:3},{value:"http-header-normalizer",id:"http-header-normalizer",level:3},{value:"http-json-body-parser",id:"http-json-body-parser",level:3},{value:"http-multipart-body-parser",id:"http-multipart-body-parser",level:3},{value:"http-partial-response",id:"http-partial-response",level:3},{value:"http-response-serializer",id:"http-response-serializer",level:3},{value:"http-router",id:"http-router",level:3},{value:"http-security-headers",id:"http-security-headers",level:3},{value:"http-urlencode-body-parser",id:"http-urlencode-body-parser",level:3},{value:"http-urlencode-path-parser",id:"http-urlencode-path-parser",level:3},{value:"input-output-logger",id:"input-output-logger",level:3},{value:"rds-signer",id:"rds-signer",level:3},{value:"s3-key-normalizer",id:"s3-key-normalizer",level:3},{value:"s3-object-response",id:"s3-object-response",level:3},{value:"secrets-manager",id:"secrets-manager",level:3},{value:"service-discovery",id:"service-discovery",level:3},{value:"sqs-json-body-parser",id:"sqs-json-body-parser",level:3},{value:"sqs-partial-batch-failure",id:"sqs-partial-batch-failure",level:3},{value:"ssm",id:"ssm",level:3},{value:"sts",id:"sts",level:3},{value:"validator",id:"validator",level:3},{value:"warmup",id:"warmup",level:3},{value:"ws-json-body-parser",id:"ws-json-body-parser",level:3},{value:"ws-response",id:"ws-response",level:3},{value:"ws-router",id:"ws-router",level:3},{value:"Notes",id:"notes",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Version 3.x of Middy no longer supports Node.js versions 12.x. You are highly encouraged to move to Node.js 16.x.\nWith the Node.js version change all packages are now ECMAScript Modules along side CommonJS Modules."),(0,n.kt)("h2",{id:"notable-changes"},"Notable changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New WebSocket middlewares"),(0,n.kt)("li",{parentName:"ul"},"HTTP & WebSocket Routers!"),(0,n.kt)("li",{parentName:"ul"},"Better error handling"),(0,n.kt)("li",{parentName:"ul"},"Timeout error handling"),(0,n.kt)("li",{parentName:"ul"},"Errors now use ",(0,n.kt)("inlineCode",{parentName:"li"},"{ cause }")," for better context")),(0,n.kt)("h2",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onError")," middleware stack order reversed to match ",(0,n.kt)("inlineCode",{parentName:"li"},"after")," ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you only use ",(0,n.kt)("inlineCode",{parentName:"li"},"@middy/*")," middlewares no change should be required"),(0,n.kt)("li",{parentName:"ul"},"This change has trickle down effects on middlewares with ",(0,n.kt)("inlineCode",{parentName:"li"},"onError")," (see below for details)"),(0,n.kt)("li",{parentName:"ul"},"If you're handling errors yourself here are some things to review:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Attach near the end so it is triggered first (likely already done)"),(0,n.kt)("li",{parentName:"ul"},"Remove ",(0,n.kt)("inlineCode",{parentName:"li"},"return response"),", this will short circuit the response and block later middleware from modifying the response"))))),(0,n.kt)("li",{parentName:"ul"},"lambdaHandler now passes ",(0,n.kt)("inlineCode",{parentName:"li"},"{signal}")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"AbortController")," to allow for ending lambda early to handle timeout errors"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"plugin")," argument now supports:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"internal"),": Allow the use of ",(0,n.kt)("inlineCode",{parentName:"li"},"new Proxy()")," for smarter triggering in advanced use cases."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeoutEarlyInMillis"),": When before lambda timeout to trigger early exit. Default ",(0,n.kt)("inlineCode",{parentName:"li"},"5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeoutEarlyResponse"),": Function to throw a custom error or return a pre-set value. Default ",(0,n.kt)("inlineCode",{parentName:"li"},"() => { throw new Error('Timeout') }")))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("inlineCode",{parentName:"li"},".handler()")," method to allow easier understanding of the execution cycle"),(0,n.kt)("li",{parentName:"ul"},"Deprecate ",(0,n.kt)("inlineCode",{parentName:"li"},"applyMiddleware()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"__middlewares")," ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h2",{id:"util"},"Util"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"getInternal")," error now includes ",(0,n.kt)("inlineCode",{parentName:"li"},"cause")," set to an array of Errors"),(0,n.kt)("li",{parentName:"ul"},"Catch when ",(0,n.kt)("inlineCode",{parentName:"li"},"X-Ray")," is applied outside of handler invocation scope"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"normalizeHttpResponse")," now takes ",(0,n.kt)("inlineCode",{parentName:"li"},"request")," and mutates response ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"getCache")," will return ",(0,n.kt)("inlineCode",{parentName:"li"},"{}")," instead of ",(0,n.kt)("inlineCode",{parentName:"li"},"undefined")," when not found ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h2",{id:"middleware"},"Middleware"),(0,n.kt)("h3",{id:"cloudwatch-metrics"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/cloudwatch-metrics"},"cloudwatch-metrics")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"do-not-wait-for-empty-event-loop"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/do-not-wait-for-empty-event-loop"},"do-not-wait-for-empty-event-loop")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"error-logger"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/error-logger"},"error-logger")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"event-normalizer"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/event-normalizer"},"event-normalizer")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add support for all missing AWS events"),(0,n.kt)("li",{parentName:"ul"},"Refactored for performance improvements")),(0,n.kt)("h3",{id:"http-content-encoding"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-content-encoding"},"http-content-encoding")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[New]"," Applies ",(0,n.kt)("inlineCode",{parentName:"li"},"brotli"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"gzip"),", ands ",(0,n.kt)("inlineCode",{parentName:"li"},"deflate")," compression to response body")),(0,n.kt)("h3",{id:"http-content-negotiation"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-content-negotiation"},"http-content-negotiation")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add in ",(0,n.kt)("inlineCode",{parentName:"li"},"defaultToFirstLanguage")," to allow fallback to a safe language to use")),(0,n.kt)("h3",{id:"http-cors"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-cors"},"http-cors")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onError")," will not modify response unless error has been handled"),(0,n.kt)("li",{parentName:"ul"},"Small refactor for performance improvements")),(0,n.kt)("h3",{id:"http-error-handler"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-error-handler"},"http-error-handler")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No longer returns the response to short circuit the middleware stack to allow for easier use now that ",(0,n.kt)("inlineCode",{parentName:"li"},"onError")," is called in reverse order.")),(0,n.kt)("h3",{id:"http-event-normalizer"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-event-normalizer"},"http-event-normalizer")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Option ",(0,n.kt)("inlineCode",{parentName:"li"},"payloadFormatVersion")," no longer needed"),(0,n.kt)("li",{parentName:"ul"},"Will now throw error if not an http event ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h3",{id:"http-header-normalizer"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-header-normalizer"},"http-header-normalizer")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modified so that all headers are set to lowercase when ",(0,n.kt)("inlineCode",{parentName:"li"},"canonical:false")," ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h3",{id:"http-json-body-parser"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-json-body-parser"},"http-json-body-parser")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"http-multipart-body-parser"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-multipart-body-parser"},"http-multipart-body-parser")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Change default charset from ",(0,n.kt)("inlineCode",{parentName:"li"},"binary"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"latin1")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"utf-8"),". ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h3",{id:"http-partial-response"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-partial-response"},"http-partial-response")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"http-response-serializer"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-response-serializer"},"http-response-serializer")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," option to ",(0,n.kt)("inlineCode",{parentName:"li"},"defaultContentType")," to improve maintainability ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onError")," will not modify response unless error has been handled")),(0,n.kt)("h3",{id:"http-router"},(0,n.kt)("a",{parentName:"h3",href:"/docs/routers/http-router"},"http-router")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[New]"," Allow re-routing of events to different handlers")),(0,n.kt)("h3",{id:"http-security-headers"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-security-headers"},"http-security-headers")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onError")," will not modify response unless error has been handled"),(0,n.kt)("li",{parentName:"ul"},"Complete rewrite of options and inclusion of new HTML only headers ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h3",{id:"http-urlencode-body-parser"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-urlencode-body-parser"},"http-urlencode-body-parser")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"http-urlencode-path-parser"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-urlencode-path-parser"},"http-urlencode-path-parser")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"input-output-logger"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/input-output-logger"},"input-output-logger")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add in new option to mask instead of omit a path.")),(0,n.kt)("h3",{id:"rds-signer"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/rds-signer"},"rds-signer")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deprecated ",(0,n.kt)("inlineCode",{parentName:"li"},"setToEnv")," option due to possible security misuse ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h3",{id:"s3-key-normalizer"},"s3-key-normalizer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deprecated in favour of ",(0,n.kt)("a",{parentName:"li",href:"/docs/middlewares/event-normalizer"},(0,n.kt)("inlineCode",{parentName:"a"},"event-normalizer")),", v2.x compatible with v3")),(0,n.kt)("h3",{id:"s3-object-response"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/s3-object-response"},"s3-object-response")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"secrets-manager"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/secrets-manager"},"secrets-manager")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deprecated ",(0,n.kt)("inlineCode",{parentName:"li"},"setToEnv")," option due to possible security misuse ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h3",{id:"service-discovery"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/service-discovery"},"service-discovery")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[New]"," Allow easy access to discoveryInstances")),(0,n.kt)("h3",{id:"sqs-json-body-parser"},"sqs-json-body-parser"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deprecated in favour of ",(0,n.kt)("a",{parentName:"li",href:"/docs/middlewares/event-normalizer"},(0,n.kt)("inlineCode",{parentName:"a"},"event-normalizer")),", v2.x compatible with v3")),(0,n.kt)("h3",{id:"sqs-partial-batch-failure"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/sqs-partial-batch-failure"},"sqs-partial-batch-failure")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete rewrite to take advantage of ",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/about-aws/whats-new/2021/11/aws-lambda-partial-batch-response-sqs-event-source/"},"https://aws.amazon.com/about-aws/whats-new/2021/11/aws-lambda-partial-batch-response-sqs-event-source/"),", will no longer throw an error if any message fails ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h3",{id:"ssm"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/ssm"},"ssm")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deprecated ",(0,n.kt)("inlineCode",{parentName:"li"},"setToEnv")," option ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]"))),(0,n.kt)("h3",{id:"sts"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/sts"},"sts")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"validator"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/validator"},"validator")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Change where errors are stored, from ",(0,n.kt)("inlineCode",{parentName:"li"},"request.error.details")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"request.error.cause")," ",(0,n.kt)("strong",{parentName:"li"},"[Breaking Change]")),(0,n.kt)("li",{parentName:"ul"},"Add new options ",(0,n.kt)("inlineCode",{parentName:"li"},"eventSchema"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"contextSchema"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"responseSchema"),". ",(0,n.kt)("inlineCode",{parentName:"li"},"inputSchema")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"outputSchema")," become aliases.")),(0,n.kt)("h3",{id:"warmup"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/warmup"},"warmup")),(0,n.kt)("p",null,"No change"),(0,n.kt)("h3",{id:"ws-json-body-parser"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/ws-json-body-parser"},"ws-json-body-parser")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[New]"," Parse body from WebSocket event")),(0,n.kt)("h3",{id:"ws-response"},(0,n.kt)("a",{parentName:"h3",href:"/docs/middlewares/ws-response"},"ws-response")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[New]"," Post responses to WebSocket API Gateway")),(0,n.kt)("h3",{id:"ws-router"},(0,n.kt)("a",{parentName:"h3",href:"/docs/routers/ws-router"},"ws-router")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[New]"," Allow re-routing of events to different handlers")),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("p",null,"If you still need ",(0,n.kt)("inlineCode",{parentName:"p"},"setToEnv")," you can do something like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"middy(lambdaHandler)\n  .use(/*...*/)\n  .before(async (request) => {\n    const values = await getInternal(['NODE_ENV'], request)\n    process.env.NODE_ENV = values.NODE_ENV\n  })\n")))}u.isMDXComponent=!0}}]);