# AWS OPEN SEARCH

formerly known as elastic search

## Resources

- [AWS OpenSearch Docs](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html)
- [AWS OpenSearch Dashboards](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/dashboards.html)
- [AWS OpenSearch Load Streaming Data](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html)

## Streaming Data Sources

supports:
- S3
- Kinesis Data Streams
- Kinesis Data Firehose
- DynamoDB
- CloudWatch
- IoT

## Limitations

- have to provision and manage own servers

## Upload data via CURL

/usersdata/ represents index
```console
curl -XPOST \
  --data-binary @bulk_movies.json \
  'http://search-movies-hash.us-west-1.es.amazonaws.com/usersdata/_bulk'
```

## Search via CURL

/usersdata/ represents index
```console
curl \
  'https://search-eh-elasticsearch-hash.us-east-1.es.amazonaws.com/usersdata/_search?q=*&pretty'
```

## Mapping

- create elastic search records AFTER mapping is created... otherwise
- you will chase your tail wondering how you got non-nested mappings for a new
index

## Search All Docs Across All Types Within An Index

```console
curl -XGET 'http://localhost:9200/twitter/_search?q=user:kimchy'
```

## Search Within Specific Type

```console
curl -XGET 'http://localhost:9200/twitter/tweet,user/_search?q=user:kimchy'
```
