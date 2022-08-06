// attempt 1: hard mode without many helper functions or pre-slicing of string
export class Matrix {
  // create matrix (array of arrays) from string
  matrix: Array<Array<number>>

  constructor(s: string) {
    this.matrix = [new Array()]
    // example:
    // "9 8 7 \n 5 3 2 \n 6 6 7"
    // iterate over string
    // make sure to start new outer array for each newline

    // GOTCHA 1: gross it could be a space
    // GOTCHA 2: crap, have to keep track of word boundaries
    // GOTCHA 3: crap, have to wait UNTIL word boundary to add word to matrix
    // rewrite entire for loop

    let tempWordBuffer = ''
    // example: '1 2\n10 20'
    for (let i = 0; i < s.length; i++) {
      // build up temp array with chars
      // do not add to matrix until word boundary like a space or newline

      const char = s[i]
      // console.log(
      //   'char',
      //   char,
      //   'tempWordBuffer',
      //   tempWordBuffer,
      //   'matrix',
      //   this.matrix,
      // )
      if (char !== ' ' && char !== '\n') {
        // it's a character, add it to temp buffer
        tempWordBuffer = tempWordBuffer + char
        // GOTCHA have to check for end of string as well
        if (i === s.length - 1) {
          this.matrix[this.matrix.length - 1].push(parseInt(tempWordBuffer))
        }

        continue // continue immediately to next iteration
      }

      // reached end of word
      // add to matrix current sub array
      this.matrix[this.matrix.length - 1].push(parseInt(tempWordBuffer))

      // check if newline. New sub array has to be created
      if (char === '\n') {
        this.matrix.push(new Array())
      }

      // finally, reset tempWordBuffer
      tempWordBuffer = ''
    }
    // console.log(this.matrix)
  }

  get rows(): Array<Array<number>> {
    // example Matrix:
    // [1,2,3]
    // [4,5,6]
    // example output [1,2,3,4,5,6]
    // read it like a spreadsheet from left to right, then next row, etc
    const rowsOutput: Array<Array<number>> = [new Array()]
    // GOTCHA: can't use for of bc extra array will be added at end
    // for (let row of this.matrix) {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let cell of this.matrix[i]) {
        rowsOutput[rowsOutput.length - 1].push(cell)
      }
      // CREATE new empty sub array
      // very annoying - tests expect number of sub arrays to be the same
      // tests should really be calling the method with a index argument

      // avoid adding empty array at end
      if (i < this.matrix.length - 1) {
        rowsOutput.push(new Array())
      }
    }
    return rowsOutput
  }
  // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 8, 7, 6 ] ]
  get columns(): Array<Array<number>> {
    // CREATE new empty sub array
    // very annoying - tests expect number of sub arrays to be the same
    // tests should really be calling the method with a index argument
    // rowsOutput[rowsOutput.length - 1].push(new Array())
    // example Matrix:
    // [1,2,3]
    // [4,5,6]
    // example output [1,4,2,5,3,6]
    const colOutput: Array<Array<number>> = [new Array()]
    // assuming all sub arrays are same length
    // const colLength = this.matrix.length
    const matrixLength = this.matrix.length
    const rowLength = this.matrix[0].length

    // iterate over columns
    for (let col = 0; col < rowLength; col++) {
      // iterate over rows adding colIdx value
      // GOTCHA don't check for rowlength - may not be a square - check matrix length
      for (let row = 0; row < matrixLength; row++) {
        // add to new array with colIdx value of row
        const currRow = this.matrix[row]
        colOutput[colOutput.length - 1].push(currRow[col])
      }

      // don't add new sub arrays unnecessarily!
      if (col < rowLength - 1) {
        colOutput.push(new Array())
      }
    }
    return colOutput
  }
}
