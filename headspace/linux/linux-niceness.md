# LINUX NICENESS

## Features
set a nice level (priority) for a process
- default is zero
- can already be running or a new process
- affects scheduling decisions
- helps resolve conflicts on resource contention
- all child processes inherit the nice value of their parent

## Limitations
- normal user can only start with a nice value of `0` to `19`
- have to use `renice` to set high priority without running as sudo
- regular users cannot lower a nice value using `renice`

## High priority
lower niceness values. `-10` to `-20`.
Gives more CPU time / memory resources

- preempt lower-priority processes
- ensures process gets resources needed

## Low priority
higher niceness values `0` to `19`.
Gives fewer resources.
- can be suspended or terminated

## Nice commands

### Run process with priority
```bash
# lower priority
nice -n 10 my_command
# change to higher priority
nice my_command
renice 10 <my_process_id>
# use root to lower process niceness
renice -10 <my_process_id>
```

## Renice commands

### Change priority of a running process

```bash
# higher priority - set to 2
renice +2 <my_process_id>
```
