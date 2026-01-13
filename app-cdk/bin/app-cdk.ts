
import * as cdk from 'aws-cdk-lib/core';
import { AppCdkStack } from '../lib/app-cdk-stack';
import { PipelineCdkStack } from '../lib/pipeline-cdk-stack'

const app = new cdk.App();
new AppCdkStack(app, 'AppCdkStack', {
  
});

const testCdkStack = new AppCdkStack(app, 'test', {});

const pipelineCdkStack = new PipelineCdkStack(app, 'pipeline-stack', {});

