# LINUX SCRIPTS CASE STATEMENTS

## Features
- default match is `*)`
- statements end in `;;`

## Best practices
- `;;` is best placed indented on a newline for readability

## Case statement with number matching

```bash
while true; do
  echo "1. Shutdown"
  echo "2. Restart"
  echo "3. Exit Menu"
  read -p "Enter an option: " choice

  case $choice in
    1) echo "shutting down..."
      ;;
    2) echo "restarting..."
      ;;
    3) break
      ;;
    *) continue
      ;;
  esac

done
```

## Case statement with string matching

```bash
while true; do
  echo "1: Shutdown"
  echo "2: Restart"
  echo "3: Exit Menu"
  
  read -p "Enter an option (shutdown/restart/exit): " choice

  case $choice in
    "shutdown")
      echo "shutting down..."
      ;;
    "restart")
      echo "restarting..."
      ;;
    "exit"|"Exit"|"EXIT") # Adding multiple cases for different capitalizations.
      break
      ;;
    *)
      echo "Invalid option, please try again."
      continue
      ;;
  esac

done
```