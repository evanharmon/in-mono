# NODE SUPERTEST SUPERAGENT

## Resources

- [Superagent Customized Agent GIST](https://gist.github.com/evanharmon/4ee231389948a4f40d75)

## Follow Redirects

```javascript
request.get('/some.png').redirects(2).end(callback)
```

## HTML Form multipart/form-data

form fields may need to be urlDecoded so the % signs don't exist

```javascript
request
  .post('/upload')
  .field('user[name]', 'Tobi')
  .field('user[email]', 'tobi@learnboost.com')
  .attach('image', 'path/to/tobi.png')
  .end(callback)
```

## HTML Form x-www-urlencoded

```javascript
request
  .post('/login')
  .type('form')
  .send({ username: username })
  .send({ password: password })
  .end(callback)
```

## Use Customized Agent From Superagent

## Test Content-Type

`.expect("content-type", "text/plain")`

## use superagent or supertest with yield

## Promisify call

```javascript
function postAsync(url, data) {
  return new Promise((resolve, reject) => {
    agent
      .post(url)
      .type('form')
      .send(data)
      .end(function (err, res) {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
  })
}
```

## Try / Catch

```javascript
try {
  const res = yield postAsync(url, this.request.body);
}
catch (err) {

}
```

## AVA Style

Do not use `.end()`
