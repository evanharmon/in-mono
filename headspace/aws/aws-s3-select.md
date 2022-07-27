# AWS S3 SELECT

## Resources

- [AWS S3 Select](https://docs.aws.amazon.com/AmazonS3/latest/userguide/selecting-content-from-objects.html)
- [AWS S3 Select CLI DOCS](https://docs.aws.amazon.com/cli/latest/reference/s3api/select-object-content.html)
- [AWS S3 Select Query Docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-glacier-select-sql-reference-select.html)
- [AWS S3 Select General Reference](https://docs.aws.amazon.com/AmazonS3/latest/API/API_SelectObjectContent.html)

## Features

- supports CSV, JSON, Parquet
- supports compressed CSV / JSON with GZIP or BZIP2
- supports server-side encrypted objects

## Limitations

## Example CLI JSON Query

```console
aws s3api select-object-content \
  --bucket bucket \
  --key large-file.json \
  --expression-type SQL \
  --expression "SELECT * FROM S3Object LIMIT 1000 OFFSET 1000" \
  --input-serialization '{"JSON": {"Type": "LINES"}}' \
  --output-serialization '{"JSON": {}}' \
  --out-file out.txt
```
