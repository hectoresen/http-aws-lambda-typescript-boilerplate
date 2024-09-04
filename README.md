# AWS Lambda TypeScript Boilerplate

This project is a basic boilerplate for an AWS Lambda function written in TypeScript. It includes a simple Lambda function that responds to HTTP GET requests and returns a JSON object. The project is set up with Jest for testing, and you can run the function locally using the Serverless Framework.

## Project Structure

- `src/handler.ts`: Contains the Lambda function code.
- `test/handler.test.ts`: Contains unit tests for the Lambda function.
- `tsconfig.json`: TypeScript configuration file.
- `jest.config.js`: Jest configuration file for testing.

## Lambda Function

The Lambda function is defined in `src/handler.ts`. It is triggered by an HTTP GET request and returns a JSON response containing a message and the input event data.

### Example Response

```json
{
  "statusCode": 200,
  "body": "{\"message\":\"Hello from Lambda!\",\"input\":{...}}"
}
```


## Running the Project Locally

1. Install dependencies
```bash
npm install
```

2. Build the project
```bash
npm run build
```

3. Run Tests: You can run the Jest tests to ensure the Lambda function behaves as expected.
```bash
npm run test
```