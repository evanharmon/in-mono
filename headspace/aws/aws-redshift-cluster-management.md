# AWS REDSHIFT CLUSTER MANAGEMENTS

## Resources

- [AWS Redshift Cluster Management](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html)

## Types of Nodes

- leader: query planning and result aggregation
- computer: performs queries and passes results to leader

## Nodes

### Single Node

160gb

### Leader Node (Multi-Node)

Communicator
manages client connections and receives queries

### Compute Node (Multi-Node)

store data and perform queries/computations
up to 128 compute nodes