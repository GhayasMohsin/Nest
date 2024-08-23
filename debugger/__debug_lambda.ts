import * as fs from 'fs';
const { v4: uuidv4 } = require('uuid');
import { Context } from 'aws-lambda';
// import { handler } from '@app/base';

const lambdaContext = {
    callbackWaitsForEmptyEventLoop: true,
    functionVersion: '$LATEST',
    functionName: 'test-function',
    memoryLimitInMB: '128',
    logGroupName: '/aws/lambda/test-function',
    logStreamName: '2021/03/09/[$LATEST]abcdef123456abcdef123456abcdef123456',
    invokedFunctionArn: 'arn:aws:lambda:us-west-2:123456789012:function:test-function',
    awsRequestId: uuidv4()
  } as Context;

async function run(){
    let inputFileName  = process.argv[2]
    let eventObject = JSON.parse(fs.readFileSync(`debugger/inputs/api-gateway-event.json`, 'utf-8').toString())
    let inputObject = JSON.parse(fs.readFileSync(`src/employee/inputs/${inputFileName}.json`, 'utf-8').toString())
    eventObject.body = eventObject.isBase64Encoded ? Buffer.from(JSON.stringify(inputObject)).toString('base64') : JSON.stringify(inputObject)
    let handl = await import('../libs/base/src/functions/app')
    console.log(handl)   
}

run()