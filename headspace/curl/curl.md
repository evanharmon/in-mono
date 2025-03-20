# CURL

## Resources

- [Curl docs](https://curl.se/docs/)

## Send post with form data

remember to URL encode with % symbols where necessary

`curl --data "param1=value1&param2=value2" https://example.com/resource.cgi`

## Send post multi-part form

```bash
curl \
    --form "fileupload=@my-file.txt;filename=desired-filename.txt" \
    --form param1=value1 \
    --form param2=value2 \
    https://example.com/resource.cgi
```

## Follow redirects

also ensures correct file type

`curl -L`

## Insecure mode

`curl -k`

## Custom request method / POST data

`curl -XPOST -d'{"s":"hello, world"}' localhost:8080/uppercase`

## JSON data as payload

use json file

```bash
curl -vX POST \
    http://server/api/v1/places.json \
    -d @testplace.json \
    --header "Content-Type: application/json"
```

## Spoof a referer

```bash
curl -v \
    http://example-bucket.s3.amazonaws.com/secret-image.jpg \
    -H 'Referer: http://example.com/good-guy.html'
```

## Use basic auth

`curl -v -u Administrator:password localhost:8091`

## Use ENV variables in curl

shell does not expand env vars in single quotes - have to use double

```bash
curl -u <my-api-token>: \
  -X POST https://api.pushbullet.com/v2/pushes \
  --header 'Content-Type: application/json' \
  --data-binary '{"type": "note", "title": "'"$TR_TORRENT_NAME"'", \
  "body": "'"$TR_TORRENT_NAME completed"'."}'
```

## Use ENV variables in curl without double quoting

`curl -u <my-api-token>: -H 'Content-Type: '$TYPE''`


## Curl with a set timeout in seconds
3 second timeout
`curl -m 3 localhost`