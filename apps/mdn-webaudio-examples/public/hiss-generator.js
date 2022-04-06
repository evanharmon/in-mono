class HissGeneratorProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
  }

  static get parameterDescriptors() {
    return [
      {
        name: 'gain',
        defaultValue: 0.2,
        minValue: 0,
        maxValue: 1,
      },
    ]
  }

  process(inputList, outputList, parameters) {
    const gain = parameters.gain[0]
    const sourceLimit = Math.min(inputList.length, outputList.length)

    for (let inputNum = 0; inputNum < sourceLimit; inputNum++) {
      let input = inputList[inputNum]
      let output = outputList[inputNum]
      let channelCount = Math.min(input.length, output.length)

      for (let channel = 0; channel < channelCount; channel++) {
        let sampleCount = input[channel].length

        for (let i = 0; i < sampleCount; i++) {
          let sample = input[channel][i]
          let rnd = 2 * (Math.random() - 0.5) // convert to -1 to 1 range

          sample = sample + rnd * gain

          if (sample > 1.0) {
            sample = 1.0
          } else if (sample < -1.0) {
            sample = -1.0
          }

          output[channel][i] = sample
        }
      }
    }

    return true
  }
}

registerProcessor('hiss-generator', HissGeneratorProcessor)
