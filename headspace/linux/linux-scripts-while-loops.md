# LINUX SCRIPTS WHILE LOOPS

## Features
- use when you don't know how many times you'll need to iterate
- use when waiting for a specific condition
- inifinite loops

## While loops

### Read a file line by line
```bash
file="linux-scripts-while-loops.md"
i=0
while IFS= read -r line; do
  echo "Line $i: $line"
  let i+=1 # or ((i++))
done < "$file"
```

or more simply
```bash
while read -r line; do
  echo "line: $line"
done < "myfile.txt"
```

### Inifite loop to check an api

```bash
weather_api="https://api.weather.com/current_conditions"
update_interval=60 # update every 1 minute

i=0
while true; do
    sleep $update_interval # wait for the specified interval
    i=$(($i + 1))
    weather_data=$(curl -s "$weather_api")
    if [ $((i % 10)) -eq 0 ]; then
        echo "Weather update: $(jq '.current_conditions.weather' <<< "$weather_data")"
    fi
done
```

### Menu driven example
```bash
#!/bin/bash

while true; do
    echo "Enter your choice: "
    read -p "Menu : [1] Enter String [2] Print Reversed String [3] Quit " option
    
    case $option in 
        1)
            read -p "Enter a string:" input_string
            ;;
        
        2)
            reversed=$(echo "$input_string" | rev)
            echo "$reversed"
            ;;
        
        3)
            break
            ;;
            
        *)
            echo "Invalid choice. Please try again."
            ;;
    esac
done
```
or

```bash
while true; do
  echo "1. Shutdown"
  echo "2. Restart"
  echo "3. Exit Menu"
  read -p "Enter an option: " choice

  if [ $choice -eq 1 ]; then
    echo "shutting down..."
  elif [ $choice -eq 2 ]; then
    echo "restarting..."
  elif [ $choice -eq 3 ]; then
    break
  else
    continue
  fi

done
```

or a calculator
```bash
while true; do
        echo "1. Add"
        echo "2. Subtract"
        echo "3. Multiply"
        echo "4. Divide"
        echo "5. Quit"

        read -p "Entering a choice: " choice
        if [ $choice -eq 5 ]; then
                break
        fi  

        read -p "Enter number 1: " num_1
        read -p "Enter number 2: " num_2

        if [ $choice -eq 1 ]; then
                echo $(($num_1 + $num_2))
        elif [ $choice -eq 2 ]; then
                echo $(($num_1 - $num_2))
        elif [ $choice -eq 3 ]; then
                echo $(($num_1 * $num_2))
        elif [ $choice -eq 4 ]; then
                if [ $num_2 -eq 0 ]; then
                        echo "Divisor must not be zero."
                else
                        echo $(($num_1 / $num_2))
                fi  
        else
                echo "Invalid input"
                break
        fi  
done
```
