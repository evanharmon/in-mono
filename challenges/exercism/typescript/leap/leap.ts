// attempt 1 success
// export function isLeap(year: number): boolean {
//   // 1996 is a leap year
//   // 1900 is not a leap year

//   // first rule: only a leap year if divisible by 4
//   // return early when possible when not a leap year
//   if (year % 4 !== 0) return false

//   // second & third rule: not a leap year if divisible by 100
//   // unless also divisible by 400
//   if (year % 100 !== 0) return true

//   if (year % 400 === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// attempt 2: without looking at above
export function isLeap(year: number): boolean {
  // 1996 is a leap year
  // 1900 is not a leap year

  // rule 1 is a hard rule, exit early if false
  // 1: leap years are divisible by 4
  if (year % 4 !== 0) return false

  // so far a leap year

  // rule 2 also needs to check rule 3
  // 2: leap year except if divisible by 100
  // 3: unless rule 2 is true AND divisible by 400
  // meaning we can exit early if rule 2 not true as no rule 3 check needed
  if (year % 100 !== 0) return true

  // rule 2 true, only a leap year if rule 3 is true as well
  if (year % 400 === 0) {
    return true
  } else {
    return false
  }
}
