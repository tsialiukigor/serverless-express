# Deploy a REST API using Serverless, Express, and Node.js

The template for move a monolith in lambda. The statistics for just the express server:

| Time (ms)                               | Memory usage (Mb) |
| --------------------------------------- | ----------------- |
| Called start: ~280ms. Warm start: ~18ms | 85Mb              |

## Installation

Install aws-client on the local machine:

```sh
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html
```

Configure a profile:

```sh
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html
```

Install dependencies:

```sh
npm ci
```

## Development

For the local development:

```sh
npm start
```

Deploy your lambda functions:

```sh
npm run deploy:all
```

Deploy the specific lambda function:

```sh
npm run deploy:express-server
```

> Note: The function must be already deployed, it's used for cases when we need to redeploy the specific function

Remove all deployed functions:

```sh
npm run remove:all
```
