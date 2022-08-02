// attempt 1
export function isPangram(s: string): boolean {
  // sentence using every letter of the alphabet at least once

  // idea 1:
  // use a set
  // iterate, check if letter, add to set
  // check if set contains 26 items

  const container = new Set<string>()

  for (const c of s) {
    const rgx = /[a-z]/g
    // OOPS lowercase first otherwise might add caps to set
    const lowerC = c.toLowerCase()
    if (lowerC.match(rgx) !== null) {
      container.add(lowerC)
    }
  }

  // a little brittle because relies on regex
  const check = container.size === 26

  return check
}
