# AWS Simple Workflow Service (SWF)

task orietned API to coordinate async and sync tasks
updated serverless version of SWF is Step Functions

## Resources

- [AWS SWF Docs](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-welcome.html)
- [AWS SWF Actors](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-actors.html)
- [AWS SWF Workflow Starters](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-actors.html#swf-dev-actors-starters)
- [AWS SWF Deciders](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-actors.html#swf-dev-actors-deciders)
- [AWS SWF Activity Workers](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-actors.html#swf-dev-actors-activities)
- [AWS SWF Workflow Execution Life Cycle](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-workflow-exec-lifecycle.html)
- [AWS SWF Child Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-adv-child-workflows.html)

## Features

- task can be human intervention so supports things like AWS Mechanical Turk
- supports deep nesting
- supports external signals
- child workflows can return data to parent workflows
- task is assigned only once and is NEVER duplicated
- SWF keeps track of all the tasks and events in an application

## Limitations

- runs on EC2 instances
- max execution time 1 year

## Actor Types

- workflow starters
- deciders
- activity workers

## Workflow Starters

Initiates workflow

## Deciders

Control flow of activity tasks in workflow execution - handles failures too

## Activity Workers

carry out the activity tasks

## SWF vs SQS


## Domains
- way to scope separate work flows
- can contain more than one workflow
- workflows in different domains CANNOT talk to each other
