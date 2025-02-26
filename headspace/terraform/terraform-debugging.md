# TERRAFORM DEBUGGING

## TF_LOG levels
trace is most verbose
- info, warning, trace, debug, error

`TF_LOG=debug terraform plan`

## Set log file path
avoids the spammy output
`TF_LOG=debug TF_LOG_PATH=/tmp/terraform.log terraform plan`