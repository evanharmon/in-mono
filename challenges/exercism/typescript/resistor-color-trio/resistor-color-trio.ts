// attempt 1
// export function decodedResistorValue(r: Array<string>): string {
//   // build hashmap of color band values
//   const colorCodes: Record<string, number> = {
//     black: 0,
//     brown: 1,
//     red: 2,
//     orange: 3,
//     yellow: 4,
//     green: 5,
//     blue: 6,
//     violet: 7,
//     grey: 8,
//     white: 9,
//   }

//   // iterate through resister array band colors
//   // concatenate values
//   let bandVals = 0
//   for (let i = 0; i < 2; i++) {
//     const appendVal = colorCodes[r[i]]
//     bandVals = parseInt(`${bandVals}${appendVal}`)
//   }

//   // calculate modifier
//   let modifierBand = colorCodes[r[2]]
//   if (modifierBand === 0) {
//     return `${bandVals} ohms`
//   }

//   // 200 * 10**(2-1) = 20000
//   // red black brown = 20 1
//   let modifierVal = modifierBand === 1 ? 10 : 10 ** modifierBand
//   const totalOhms = bandVals * modifierVal
//   console.log(
//     'bandVals',
//     bandVals,
//     'modifierBand',
//     modifierBand,
//     'modifierVal',
//     modifierVal,
//     'totalOhms',
//     totalOhms,
//   )
//   if (totalOhms / 1000 > 1) {
//     const converted = totalOhms / 1000
//     console.log('converted', converted)
//     return `${converted} kiloohms`
//   } else {
//     return `${totalOhms} ohms`
//   }
// }

// re-code attempt 1
export function decodedResistorValue(r: Array<string>): string {
  // build hashmap of color band values
  const colorCodes: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }

  // concatenate first two bands
  let concatBands = ''
  // `0`, `02`
  for (let i = 0; i < 2; i++) {
    const bandVal = colorCodes[r[i]]
    concatBands = `${concatBands}${bandVal}`
  }

  // convert concat string back to number
  const twoBandsVal = parseInt(concatBands)

  const modifierBand = colorCodes[r[2]]
  // exit early for band 0 as resistance will be in ohms
  if (modifierBand === 0) {
    return `${twoBandsVal} ohms`
  }

  // handle case for modifier band 1 meaning just a single zero added to ohms
  if (modifierBand === 1) {
    return `${twoBandsVal}0 ohms`
  }

  // use modifierBand as exponential to calculate total ohms
  // 2 0 2 = 20 * 100 = 20 * 10^2
  const totalOhms = twoBandsVal * 10 ** modifierBand

  // check if ohms can be converted to kiloohms
  // otherwise return as ohms
  if (totalOhms / 1000) {
    return `${totalOhms / 1000} kiloohms`
  } else {
    return `${totalOhms} ohms`
  }
}
