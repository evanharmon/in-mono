# AWS S3 COST SAVING TIPS

## Select

use S3 Select and Glacier select to retrieve parts of an s3 object.

savings:
- network transit costs
- CPU costs

## Lifecycle Rules

delete objects where possible and move to cheaper tiers

savings:
- storage costs

## Compression

use compression where possible. Downside is `select` features may not work
depending on compression / file type