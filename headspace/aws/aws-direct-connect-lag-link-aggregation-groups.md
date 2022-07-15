# AWS DIRECT CONNECT Link Aggregation Groups (LAG)

## Resources

- [AWS Direct Connect Link Aggregation Groups](https://docs.aws.amazon.com/directconnect/latest/UserGuide/lags.html)

## Features

- group multiple DX connections to increase bandwidth
- easier to manage as one logical connection

## Limitations

- Multi-chassis lag (MLAG) not supported
- only for dedicated connections
- all connections must use same bandwidth
- max connections: two 100G, or four with total speed below 100G
- all must terminate at same AWS DX endpoint
