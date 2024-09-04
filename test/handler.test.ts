import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';
import { hello } from '../src/handler';

describe('hello function', () => {
  it('should return a 200 status and the correct message', async () => {
    // Crea un mock del evento
    const event: APIGatewayProxyEvent = {
      httpMethod: 'GET',
      queryStringParameters: {
        name: 'Hector',
        age: '32',
      },
      headers: {
        'Content-Type': 'application/json',
      },
      pathParameters: null,
      stageVariables: null,
      body: null,
      isBase64Encoded: false,
      path: '/hello',
      resource: '/hello',
      multiValueHeaders: {},
      multiValueQueryStringParameters: null,
      requestContext: {
        accountId: '',
        apiId: '',
        authorizer: null,
        protocol: 'HTTP/1.1',
        httpMethod: 'GET',
        identity: {
          accessKey: null,
          accountId: null,
          apiKey: null,
          apiKeyId: null,
          caller: null,
          cognitoAuthenticationProvider: null,
          cognitoAuthenticationType: null,
          cognitoIdentityId: null,
          cognitoIdentityPoolId: null,
          principalOrgId: null,
          sourceIp: '127.0.0.1',
          user: null,
          userAgent: 'jest',
          userArn: null,
          clientCert: null,
        },
        path: '/hello',
        stage: 'dev',
        requestId: 'test-request',
        requestTimeEpoch: 0,
        resourceId: '',
        resourcePath: '',
      },
    } as any;

    const context: Context = {} as any;

    const result = await hello(event, context, () => {}) as APIGatewayProxyResult;

    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body.message).toBe('Hello from Lambda!');

    expect(body.input).toStrictEqual(event);
  });
});
