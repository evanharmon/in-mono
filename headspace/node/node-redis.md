# NODE REDIS

## Resources

- [Nodejs Redis Github](https://github.com/NodeRedis/node_redis)
- [Nodejs Redis Docs](http://redis.js.org/)

## Client Setup

```javascript
const rclient = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  auth_pass: config.redis.pass,
})
```

## Write To Redis Via Lambda

```javascript
const client = await init_client(endpoint, port)
const hsetAsync = promisify(client.hset).bind(client)
const res = await hsetAsync(
  id,
  event.input.process.id,
  event.input.process.status,
)
```
