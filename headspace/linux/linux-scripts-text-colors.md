# LINUX SCRIPTS TEXT COLORS

## Bold colors
```bash
RED="\033[1;31m"
YELLOW="\033[1;33m"
GREEN="\033[1;32m"
BLUE="\033[1;34m"
NC="\033[0m"
```

## Non-bold colors
```bash
RED="\033[91m"
YELLOW="\033[93m"
GREEN="\033[92m"
BLUE="\033[94m" 
NC="\033[0m"
```

## Simple print and reset with colors
```bash
# Print in green and reset
echo -e "\033[92m My Message \033[0m"
# Using color vars
echo -e "$GREEN My Message $NC"
# Print all scripts args - using 
echo -e "${msg}" "$@" "${NC}"
```

### Print a color and echo all arguments
- `tput`: maniuplates terminal
- `setaf 2`: sets text to ansi green
- `$@`: expands all arguments passed to function
- `tput sgr0` resets text color to default

```bash
function green_echo() {
  tput setaf 2 && echo "$@" && tput sgr0
}
green_echo "-------- TEST --------"
```
or the more simple:
```bash
green_echo() {
  echo -e "\033[92m$@\033[0m"
}
```

### Print echo in colors for scripts

```bash
green_echo() {
  echo -e "\033[92m$@\033[0m"
}

yellow_echo() {
  echo -e "\033[93m$@\033[0m"
}

red_echo() {
  echo -e "\033[91m$@\033[0m"
}
```

or even better
```bash
function print_color() {
    local color=$1
    # remove color from args now that it's set
    shift
    local msg=""

    # using non-bold letters
    case $color in
        red)
            msg=$RED
            ;;
        yellow)
            msg=$YELLOW
            ;;
        green)
            msg=$GREEN
            ;;
        blue)
            msg=$BLUE
            ;;
        *)
            echo "Invalid color: $color" >&2
            return 1
            ;;
    esac

    # Print message with all remaining args and reset color
    echo -e "${msg}" "$@" "${NC}"
}
```