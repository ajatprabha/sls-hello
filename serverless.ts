import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
    service: 'aws-nodejs-typescript',
    frameworkVersion: '2',
    custom: {
        esbuild: {
            bundle: true,
            target: 'es2020',
            minify: process.env.NODE_ENV == 'production'
        },
    },
    plugins: ['serverless-esbuild'],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
            NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
        },
        lambdaHashingVersion: '20201221',
    },
    // import the function via paths
    functions: { hello },
};

module.exports = serverlessConfiguration;
