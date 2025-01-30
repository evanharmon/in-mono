# CURL

## Resources

- [Curl docs](https://curl.se/docs/)

## Send Post with Form Data

remember to URL encode with % symbols where necessary

`curl --data "param1=value1&param2=value2" https://example.com/resource.cgi`

## Send Post Multi-part Form

```console
curl \
    --form "fileupload=@my-file.txt;filename=desired-filename.txt" \
    --form param1=value1 \
    --form param2=value2 \
    https://example.com/resource.cgi
```

## Follow Redirects

also ensures correct file type

`curl -L`

## Insecure Mode

`curl -k`

## Custom Request Method / POST Data

`curl -XPOST -d'{"s":"hello, world"}' localhost:8080/uppercase`

## JSON Data As Payload

use json file

```console
curl -vX POST \
    http://server/api/v1/places.json \
    -d @testplace.json \
    --header "Content-Type: application/json"
```

## Spoof A Referer

```console
curl -v \
    http://example-bucket.s3.amazonaws.com/secret-image.jpg \
    -H 'Referer: http://example.com/good-guy.html'
```

## Use Basic Auth

`curl -v -u Administrator:password localhost:8091`

## Use ENV Variables In Curl

shell does not expand env vars in single quotes - have to use double

```console
curl -u <my-api-token>: \
  -X POST https://api.pushbullet.com/v2/pushes \
  --header 'Content-Type: application/json' \
  --data-binary '{"type": "note", "title": "'"$TR_TORRENT_NAME"'", \
  "body": "'"$TR_TORRENT_NAME completed"'."}'
```

## Use ENV Variables In Curl Without Double Quoting

`curl -u <my-api-token>: -H 'Content-Type: '$TYPE''`


## Curl with a set timeout in seconds
3 second timeout
`curl -m 3 localhost`