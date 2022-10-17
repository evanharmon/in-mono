# CODE CHALLENGES LEAP YEAR

# Resources

- [Microsoft explains leap years](https://learn.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year)

## Rules

typical rules for a year being a leap year

```
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
```

microsoft explanation:

additional rule is easier thought of as:
`must also be divisible by 100 AND 400 if divisible by 100`

```
1. If year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
2. If year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
3. If year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
4. The year is a leap year (it has 366 days).
5. The year is not a leap year (it has 365 days).
```

## Example Calculations

1996

`1996 % 4 == 0` evenly divisible by 4
`1996 % 100 == 96` not evenly divisible by 100 so IS a leap year

2100

`2100 % 4 = 0` evenly divisible by 4
`2100 % 100 = 0` evenly divisible by 100 so may NOT be a leap year
`2100 % 400 = 0` evenly divisible by 400 as well so IS leap year

## One liner explained

`year % 4 == 0 and year % 100 == 0 and year % 400 == 0`
this is WRONG because the 100 / 400 ruleset must exist TOGETHER

`year % 4 == 0 and (year % 100 == 0 and year % 400 == 0)`
this is still WRONG for a year like 1996.
A leap year not divisible by 100 doesn't need to be divisible by 400

`year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)`
key to remember: `or` operator returns True if either condition is True

evaluation:

2100 % 4 = 0 && (2100 % 100 = 0 || 2100 % 400 = 100)
True && (False || True)
True && True
True
