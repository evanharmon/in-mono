// attempt 1
// FAIL - has to handle a string of MANY dna strands
// export function toRna(dnaNucleotide: string): string {
//   // data object for DNA
//   const DNA = ['G', 'C', 'T', 'A']
//   const RNA = ['C', 'G', 'A', 'U']

//   // take given DNA strand and look up equivalent RNA complement
//   const dnaIdx = DNA.indexOf(dnaNucleotide) // DOH watch out indexOf can return -1
//   console.log(dnaIdx)
//   if (dnaIdx === -1) throw Error('dnaStrand not found! Spooky')

//   // const rnaStrand = DNA[dnaIdx] // DOH
//   const rnaStrand = RNA[dnaIdx]

//   return rnaStrand
// }

// attempt 2
// handle input of many nueclotides
export function toRna(dnaNucleotides: string): string {
  const RnaComplement: Record<string, string> = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  }

  // keep it simple for single char
  // handle invalid DNA input
  if (dnaNucleotides.length === 1) {
    const complement = RnaComplement[dnaNucleotides]
    if (typeof complement === 'undefined') {
      throw new Error('Invalid input DNA.')
    }
    return RnaComplement[dnaNucleotides]
  }

  // store string to build up multichar complement
  // handle invalid DNA input
  let complementString = ''
  for (let i = 0; i < dnaNucleotides.length; i++) {
    const complement = RnaComplement[dnaNucleotides[i]]
    if (typeof complement === 'undefined') {
      throw new Error('Invalid input DNA.')
    }
    complementString = complementString + complement
  }

  return complementString
}
