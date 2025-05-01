# LINUX AWK

## Features
Aho, Weinberger, and Kernighan's tool for:
- text manipulation, pattern matching, data extraction

## Command format
`awk options 'selection_criteria {action}' input-file > output-file`

## Print
```sh
# data
cat << EOF > products.txt
Vendor	Product	    Price
Samsung	GalaxyS23	  899
Samsung	GalaxyTab	  499
Google	Pixel7	    599
Google	Chromebook	349
Samsung	GalaxyS22	  699
EOF
```

```sh
# Print entire file
awk '{print}' myfile.txt
# Print first two columns
awk '{print $1, $2}' data.txt
# Find lines where third column is greater than or equal to 599, print entire line
awk '$3 >= 599 {print $0}' products.txt
```

## Printf

### Text specifiers
- `%d` integer
- `%s` string
- `\n` newline

### Modifiers
- `%` min width
- `%5s` positive min width, right justified
- `%-5s` negative min width, left justified

```sh
# Cleanly formatted table
awk 'BEGIN {print "Vendor	 Product    Price"} NR>1 {printf "%-8s %-12s %2d\n", $1, $2, $3}' products.txt
```

## Number of records NR variable
keeps track of current line number

```sh
# Print every line but skip header
awk 'NR > 1 {print}' products.txt
# Print third line
awk 'NR == 3 {print}' products.txt
# Print custom format, skip header
awk 'NR >1 {print "Vendor:", $1, "* Product:", $2, "* Price:", $3}' products.txt
# Print line number, skipping header
awk 'NR > 1 {printf "Vendor %d: %s\n", NR-1, $0}' products.txt
```

## Pattern matching

```sh
# Match
awk '/Google/ {print}' products.txt
```

## Calculations using END

```sh
# Skip header and calculate average price
awk 'NR>1 {sum+=$3; count++} END {print "Average Price:", sum/count}' products.txt
```
