export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export const colorCode = (color: string): number => {
  // return the array index of color band
  const colorBand = COLORS.indexOf(color)
  return colorBand
}

// bad bad bad - declare before calling
// export const COLORS = undefined
