# AWS EXAM TIPS

## Flagging / Skipping

flag and skip the below types of questions and do at the end:

- long question AND long answers

## CORS

- think about what the main origin is and what resource is the CROSS origin

## Data Corruption

- replication does not help avoid this problem
- need incremental backups

## Disaster Recovery

RPO: acceptable data loss
RTO: acceptable downtime
Resiliency: ability to self-heal

## Remediation

watch out for remediation fixes with sns / lambda if a question does NOT mention reverting the change

## DNS

- not a great option for blue / green deployment bc of DNS caching diffs between devices

## Replatforming

- on-premise server with outdated OS to EC2 is MORE than a rehost

## SSL With NO LB

assuming no HSM:

- legacy app on EC2 using an SSL cert WILL NOT be using ACM
- SSL errors can be from expired certs which have to be reissued with FULL cert chain on web app server
- REMEMBER CloudFront to SSL endpoint means endpoint is handling SSL handshake
