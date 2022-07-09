# AWS RDS AURORA MULTI-MASTER CLUSTERS

for automated HA between regions use multi-master

## Resources

- [AWS RDS Aurora Multi-Master Clusters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html)


## Features

- all DB instances can perform write operations
- no failover mechanism necessary

## Limitations

- fast DDL mechanism not available
- cannot use SERIALIZABLE transation isolation level

## Connections

connections happen against the instance endpoints not a single endpoint