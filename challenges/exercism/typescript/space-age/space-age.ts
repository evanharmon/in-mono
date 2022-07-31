export function age(planet: string, seconds: number): number {
  const EARTH_SECONDS_IN_YEAR = 31557600

  // create conversion table
  // planets closer (lower than 1) will be more years than Earth
  // as they rotate around the sun more often in an earth year
  // SO DIVIDE
  const PlanetConversionTable: Record<string, number> = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  }

  // convert planet seconds to EARTH seconds in year format
  const convertedSeconds = seconds / EARTH_SECONDS_IN_YEAR

  // now with common year format, use conversion table to DIVIDE
  const ageInYears = convertedSeconds / PlanetConversionTable[planet]

  // return value rounded to two decimals
  return parseFloat(ageInYears.toFixed(2))
}
