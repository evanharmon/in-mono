import { ChangeEvent, useState } from 'react'

/*
  Step 1 Basic UI
    - [x] show zip codes
    - [x] user can add a zip code
    - [x] user can remove a zip code
*/

function WeatherDashboard() {
  const [zipcodes, setZipcodes] = useState<Array<string>>(['29464', '12112'])
  const [inputVal, setInputVal] = useState<string>('')

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setInputVal(e.target.value)
  }

  function addZip() {
    // avoid adding dupes
    if (zipcodes.find(i => i === inputVal)) return

    setZipcodes(prevState => [...prevState, inputVal])
    setInputVal('') // clear input
  }

  function removeZip(zipcode: string) {
    setZipcodes(prevState => prevState.filter(i => i !== zipcode))
  }

  return (
    <>
      <div>
        <h1>Weather Dashboard</h1>
      </div>
      <div>
        <button onClick={addZip}>add</button>
        <input type='text' value={inputVal} onChange={onChangeHandler} />
      </div>
      <div>
        <ul>
          {zipcodes.map(zip => (
            <>
              <li>
                <p>{zip}</p>
                <button onClick={() => removeZip(zip)}>remove</button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WeatherDashboard
