// attempt 1
// export function hey(message: string): string {
//   // check how Bob is being talked to
//   // uppercase check should not include numbers

//   // sanitize message for:
//   // non-whitespace chars
//   // trimmed start / end
//   const sanitizedMessage = message.trim().replace(/[\s]/g, '')

//   // only check uppercase for alpha chars
//   const alphabetOnlyMessage = message.replace(/[\W\d]/g, '')
//   const isYelling =
//     alphabetOnlyMessage.length > 0 &&
//     alphabetOnlyMessage === alphabetOnlyMessage.toUpperCase()
//   const isQuestion = sanitizedMessage.endsWith('?')

//   // check for all caps
//   // different response if lowercase question
//   if (isYelling && !isQuestion) {
//     return 'Whoa, chill out!'
//   } else if (isYelling && isQuestion) {
//     return "Calm down, I know what I'm doing!"
//   } else if (!isYelling && isQuestion) {
//     return 'Sure.'
//   }

//   // falback answers
//   switch (sanitizedMessage) {
//     case '':
//       return 'Fine. Be that way!'
//     default:
//       return 'Whatever.'
//   }
// }

// attempt 2
// passed all tests on first run
export function hey(message: string): string {
  // should handle beginning / trailing whitespace?
  const sanitizedMessage = message.trim()

  // responses
  const emptyMessage = 'Fine. Be that way!'
  const regularQuestion = 'Sure.'
  const regularMessageFallback = 'Whatever.'
  const yelledMessage = 'Whoa, chill out!'
  const yelledQuestion = "Calm down, I know what I'm doing!"

  // handle simple empty message first
  if (sanitizedMessage === '') return emptyMessage

  // bob responds differently if asked a question
  const isQuestion = sanitizedMessage.endsWith('?')

  // bob responds diff if yelled at with caps
  // needs to only look at chars for all CAPS without mutating message
  // [X] ignore numerics, whitespace chars, non alpha chars
  // [X] don't check uppercase on messages with no alphas
  // regex helpers: '\W' non-word chars, '\s' whitespace chars, '\D' non-digit
  // example yelling: '1, 2, 3 FINE. '
  // example not yelling: '1, 2, 3!'
  const alphaCharsFilteredMessage = sanitizedMessage.replace(/[\d\s\W]/g, '')
  const isYelling =
    alphaCharsFilteredMessage.length > 0 &&
    alphaCharsFilteredMessage === alphaCharsFilteredMessage.toUpperCase()

  // handle simple question and respond early
  if (!isYelling && isQuestion) return regularQuestion

  // handle yelling cases
  if (isYelling) {
    return isQuestion ? yelledQuestion : yelledMessage
  }

  // fallback
  return regularMessageFallback
}
