---
title: Streamify Response
position: 5
---

Middy also supports streamed responses.

> You can progressively stream response payloads through Lambda function URLs, including as an Amazon CloudFront origin, along with using the AWS SDK or using Lambda’s invoke API. You can not use Amazon API Gateway and Application Load Balancer to progressively stream response payloads, but you can use the functionality to return larger payloads. (https://aws.amazon.com/blogs/compute/introducing-aws-lambda-response-streaming/)

1. Set `streamifyResponse: true` into middy options
2. Return using an HTTP event response with the body as a string or ReadableStream.
3. - API Gateway: If you're getting a `500` status code. Be sure to set your integration to `HTTP_PROXY` over `LAMBDA_PROXY` and enable Function URL on the lambda.
   - Function URLs: If receiving no content and non-200 status code are being converted to `200`. Be sure to set `Invoke Mode` to `RESPONSE_STREAM` over `BUFFERED`.

```javascript
import middy from '@middy/core'
import { createReadableStream } from '@datastream/core'

export const handler = middy({ streamifyResponse: true }).handler(
  (event, context) => {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/csv'
      },
      body: createReadableStream('...') // or string
    }
  }
)
```
