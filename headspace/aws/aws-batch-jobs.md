# AWS BATCH JOBS

## Resources

- [AWS Batch Jobs](https://docs.aws.amazon.com/batch/latest/userguide/jobs.html)
- [AWS Batch Jobs Multi-Node Parallel Jobs](https://docs.aws.amazon.com/batch/latest/userguide/multi-node-parallel-jobs.html)
- [AWS Batch Job Definitions](https://docs.aws.amazon.com/batch/latest/userguide/job_definitions.html)
- [AWS Batch Job Queues](https://docs.aws.amazon.com/batch/latest/userguide/job_queues.html)

## Features


## Limitations

- prefer placegroup cluster mode for multi-node for better networking
- multi-node mode does not work with spot instances

## Job Queues

use AWS SDK to add jobs to job queue