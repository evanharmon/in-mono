# LINUX SCRIPTS FUNCTIONS

## Features
- helps dry out code in scripts
- `shift` removes the first argument from args passed to function

## Limitations
- order matters! declare functions before calling them in bottom main section

## Best practices
- name functions with underscores
- use the `function` keyword even tho its not required
= try to avoid functions with side effects

## Typical comment block

```bash
########################################################################
# Function: function_name
#
# Description:
#   A brief explanation of the function's purpose.
#
# Usage:
#   How to call the function and any specific requirements.
#
# Arguments:
#   $1: Description of the first argument.
#   $2: Description of the second argument, and so on.
#
# Returns:
#   Description of the return value or exit status.
#
# Globals modified:
#   List any global variables that the function modifies.
#
# Example:
#   A simple example of how to use the function.
########################################################################
function function_name {
  # Function implementation
  return 0
}
```
## Return statement
used to return exit status only - has to return a number

## Local variables
variables can be declared to only be accessible within the scope of the function

`local folder_to_list="$1"`

## Recipes

### Add numbers

```bash
# Define another function named 'add_numbers' that takes two arguments
function add_numbers() {
    # Calculate the sum of the two numbers and store it in a variable
    local sum=$(( $1 + $2 ))
    
    # Echo the result to the terminal
    echo "The sum is: ${sum}"
}

add_numbers
```

## Check if file exists
```bash
function check_file_exists() {
    # Get the first argument passed into the function and assign it to a variable for convenience
    local file_path="$1"
    
    # Check if the file exists, based on its name
    if [ -e "$file_path" ]; then
        echo "The file $file_path exists!"
    else
        echo "The file $file_path does not exist."
    fi
    
    # Exit with a status code indicating success (0) or failure (-1)
    return 0
}

check_file_exists /path/to/example/file.txt
```
