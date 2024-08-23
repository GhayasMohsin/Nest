// import middy from '@middy/core';
// import {
//   Callback,
//   Context,
//   APIGatewayProxyEvent,
//   APIGatewayProxyResult,
// } from 'aws-lambda';
// import httpEventNormalizer from '@middy/http-event-normalizer';

// // import { initApp } from 'src/main';
// // import { BaseModule } from './base.module';
// // import { Shared } from 'src/employee/shared-service';

// // const appPromise = initApp(BaseModule);

// export declare type AsyncProxyHandler = (
//   event: APIGatewayProxyEvent,
//   context: Context,
//   callback?: Callback<APIGatewayProxyResult>,
// ) => Promise<APIGatewayProxyResult | object | void>;
// export declare type AsyncMiddyifedProxyHandler = middy.MiddyfiedHandler<
//   APIGatewayProxyEvent,
//   APIGatewayProxyResult | object | void
// >;

// export class BaseWrapper {
//   static wrapperHandler(
//     handler: AsyncProxyHandler,
//   ): AsyncMiddyifedProxyHandler {
//     return middy(handler).use(httpEventNormalizer());
//   }
// }

// // export class BaseHandler {
// //   static handler = BaseWrapper.wrapperHandler(async (event, context) => {
// //     const app = await appPromise;
// //     return await app.get(Shared).sendEvent(event);
// //   });
// // }


// import { initApp } from 'src/main';
// // import { BaseWrapper } from './base.controller';
// import { BaseModule } from './base.module';
// import { Shared } from 'src/employee/shared-service';

// const appPromise = initApp(BaseModule);

// // export const handler = BaseWrapper.wrapperHandler(async (event, context) => {
// //   const app = await appPromise;
// //   return await app.get(Shared).sendEvent(event);
// // });


// export const handler = async (event, context) => {
//   console.log(event.body)
//   const app = await appPromise;
//   return await app.get(Shared).sendEvent(event);
// }

// const { v4: uuidv4 } = require('uuid');

// let evnt = {
//   resource: "/",
//   path: "/",
//   httpMethod: "POST",
//   headers: {
//     Accept: "*/*",
//     "Accept-Encoding": "gzip, deflate, br",
//     Authorization: "Bearer token",
//     "CloudFront-Forwarded-Proto": "https",
//     "CloudFront-Is-Desktop-Viewer": "true",
//     "CloudFront-Is-Mobile-Viewer": "false",
//     "CloudFront-Is-SmartTV-Viewer": "false",
//     "CloudFront-Is-Tablet-Viewer": "false",
//     "CloudFront-Viewer-ASN": "131471",
//     "CloudFront-Viewer-Country": "PK",
//     "Content-Type": "application/json",
//     Host: "adc.aprilairedev.net",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//     Via: "1.1 50e461b059c65812f6d9298225ac4e9a.cloudfront.net (CloudFront)",
//     "X-Amz-Cf-Id": "qH66mDsIKiwpbjt7KPnctbD4-Zt1_FaSJVbSIw132Acbmy0DZrf0fw==",
//     "X-Amzn-Trace-Id": "Root=1-6635ac66-056404604bf8484a5f15b221",
//     "X-Forwarded-For": "103.47.181.92, 15.158.24.16",
//     "X-Forwarded-Port": "443",
//     "X-Forwarded-Proto": "https",
//   },
//   multiValueHeaders: {
//     accept: [
//       "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     ],
//     "accept-encoding": [
//       "gzip, deflate, br",
//     ],
//     "accept-language": [
//       "en-US,en;q=0.9",
//     ],
//     cookie: [
//       "s_fid=7AABXMPL1AFD9BBF-0643XMPL09956DE2; regStatus=pre-register;",
//     ],
//     Host: [
//       "70ixmpl4fl.execute-api.ca-central-1.amazonaws.com",
//     ],
//     "sec-fetch-dest": [
//       "document",
//     ],
//     "sec-fetch-mode": [
//       "navigate",
//     ],
//     "sec-fetch-site": [
//       "none",
//     ],
//     "upgrade-insecure-requests": [
//       "1",
//     ],
//     "User-Agent": [
//       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
//     ],
//     "X-Amzn-Trace-Id": [
//       "Root=1-5e66d96f-7491f09xmpl79d18acf3d050",
//     ],
//     "X-Forwarded-For": [
//       "52.255.255.12",
//     ],
//     "X-Forwarded-Port": [
//       "443",
//     ],
//     "X-Forwarded-Proto": [
//       "https",
//     ],
//   },
//   queryStringParameters: null,
//   multiValueQueryStringParameters: null,
//   pathParameters: null,
//   stageVariables: null,
//   requestContext: {
//     resourceId: "2gxmpl",
//     resourcePath: "/",
//     httpMethod: "POST",
//     extendedRequestId: "JJbxmplHYosFVYQ=",
//     requestTime: "10/Mar/2020:00:03:59 +0000",
//     path: "/Prod/",
//     accountId: "123456789012",
//     protocol: "HTTP/1.1",
//     stage: "Prod",
//     domainPrefix: "70ixmpl4fl",
//     requestTimeEpoch: 1583798639428,
//     requestId: "77375676-xmpl-4b79-853a-f982474efe18",
//     identity: {
//       cognitoIdentityPoolId: null,
//       accountId: null,
//       cognitoIdentityId: null,
//       caller: null,
//       sourceIp: "52.255.255.12",
//       principalOrgId: null,
//       accessKey: null,
//       cognitoAuthenticationType: null,
//       cognitoAuthenticationProvider: null,
//       userArn: null,
//       userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
//       user: null,
//     },
//     domainName: "70ixmpl4fl.execute-api.us-east-2.amazonaws.com",
//     apiId: "70ixmpl4fl",
//     authorizer: {
//       claims: {
//         sub: "601a6011-0950-42a7-a150-c18335febbed",
//         linkedWith: "adc",
//         iss: "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_EbGN8GJLE",
//         version: "2",
//         client_id: "3n5q20l4vl76loqps8tn4te6lf",
//         origin_jti: "8211d24f-274d-4d82-8f99-fcb0e0e70769",
//         event_id: "548484b6-1cf9-4519-b3fd-8bd44df1e4ad",
//         token_use: "access",
//         scope: "openid profile email",
//         auth_time: "1693313794",
//         exp: "Tue Aug 29 13:56:34 UTC 2023",
//         iat: "Tue Aug 29 12:56:34 UTC 2023",
//         jti: "fc90badb-5ab9-4191-9bdc-91e8b455e05d",
//         username: "601a6011-0950-42a7-a150-c18335febbed",
//       },
//       scopes: null,
//     },
//   },
//   body: "eyJyZXF1ZXN0SWQiOiI3ZTFlMTFlYy1hOGJlLTQ4YWItYTRiOC0xNGE5MGZjZTNmM2YiLCJpbnB1dHMiOlt7Im9wZXJhdGlvbiI6ImNvbW1hbmQiLCJldmVudE5hbWUiOiJDUkVBVEVfRU1QTE9ZRUUiLCJwYXlsb2FkIjp7Im5hbWUiOiJNdWhhbW1hZCBJYnJhaGltIiwiZGVzaWduYXRpb24iOiJTZW5pb3IgU29mdHdhcmUgRW5naW5lZXIiLCJkZXBhcnRtZW50IjoiTUFYIiwicmVwb3J0aW5nTWFuYWdlciI6IlNhYWQgU2FsbWFuIn19XX0=",
//   isBase64Encoded: true,
// }
// const lambdaContext = {
//   callbackWaitsForEmptyEventLoop: true,
//   functionVersion: '$LATEST',
//   functionName: 'test-function',
//   memoryLimitInMB: '128',
//   logGroupName: '/aws/lambda/test-function',
//   logStreamName: '2021/03/09/[$LATEST]abcdef123456abcdef123456abcdef123456',
//   invokedFunctionArn: 'arn:aws:lambda:us-west-2:123456789012:function:test-function',
//   awsRequestId: uuidv4()
// }


// handler(evnt, lambdaContext)