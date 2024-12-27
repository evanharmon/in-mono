# ETCD HIGH AVAILABILITY

## Resources

- [Etcd RAFT](https://github.com/etcd-io/raft)

## Features

- only leader manager handles writes 
- follower managers forward write requests to leader
- reads spread out across follower managers
- leader distributes new writes to follower managers

## Recommendations

- use 3 or 5 managers for quorum
- use odd number of managers
- even number of managers can lead to failed quorum on network segmentation
- more than 5 managers usually isn't necessary

## Writes consensus
uses RAFT protocol

- leader manager considers a write successful once it successfully writes to majority of managers

quorom (majority) is `N/2 + 1`. (use floor for non-whole numbers)

Recommended # of managers is 3 because `2/2 + 1 = 2`. So 2 managers isn't much better than 1.
If a single manager went down, etcd can't write.

## Leader
uses RAFT protocol for consensus to determine leader

leader election - first wins:
- random timers kicked off on each manager
- when timer finished, manager sends a message to other managers requesting to be leader
- other managers respond with their vote

leader role continuing:
- leader sends out messages to other manages stating it will continue to be the leader

on connectivity issues / expiring of leader continuation:
- managers initiate re-election process
- new leader is selected

## Configuration
other managers are passed in via:
`--initial-cluster peer-1=${PEER1_IP}:2380,peer-2=${PEER2_IP}:2380`