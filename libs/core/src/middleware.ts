// import middy from '@middy/core';
// import {
//   Callback,
//   Context,
//   APIGatewayProxyEvent,
//   APIGatewayProxyResult,
// } from 'aws-lambda';
// import httpEventNormalizer from '@middy/http-event-normalizer';

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
