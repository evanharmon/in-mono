# AWS EXAM TIPS SQS

## Message Visibility

- use visibility timeout to reduce chance of picking up twice
- use `ChangeMessageVisibility` on a message with a heartbeat process to prevent re-pick up
- visibility timeout hides message AFTER pickup
- delay queues IMMEDIATELY hides message for period of time

## FIFO

- only handles up to 300 transactions per second and this includes send / receive / delete
- batch calls are max 10 messages!
