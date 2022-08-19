import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import { useInterval } from 'usehooks-ts'
import { Weather } from './types'

/* Step 1 Basic UI
  - [x] show zip codes
  - [x] user can add a zip code
  - [x] user can remove a zip code
*/

/* Step 2 Integrate API
  - [x] fetch initial data for a single zip code
  - [x] convert to single component per zip code
  - [x] only fetch data when zip code added / changed
  - [x] store api data for each zip code in child component
 */

/* Step 3: Improvements
  - [x] show humidity (AQI not available on that api anymore)
  - [x] periodically update api data
  - [ ] prevent double api calls with react 18 useEffect
*/
const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY as string
const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const REFRESH_INTERVAL_MS = 10000

async function getWeatherDataByZip(
  zip: string,
  API_URL = OPEN_WEATHER_API_URL,
  appId = API_KEY,
) {
  const url = new URL(API_URL)
  url.searchParams.append('zip', `${zip},us`)
  url.searchParams.append('appid', appId)
  url.searchParams.append('units', 'imperial')

  const res = await fetch(url)
  return await res.json()
}

interface WeatherData {
  zipcode: string
  [key: string]: any
}

interface ZipCodeWeatherProps {
  zipcode: string
  removeZip: (zipcode: string) => void
}

const ZipCodeWeather: FC<ZipCodeWeatherProps> = (
  props: ZipCodeWeatherProps,
) => {
  const [data, setData] = useState<Weather | null>(null)
  const [error, setError] = useState<string | null>(null)

  const updateWeatherDataByZip = useCallback(async () => {
    const data = await getWeatherDataByZip(props.zipcode)
    if (data?.cod === '404') {
      setError(data.message)
      return
    }
    setData(data)
  }, [props.zipcode])

  useInterval(
    updateWeatherDataByZip,
    error === null ? REFRESH_INTERVAL_MS : null,
  )

  useEffect(() => {
    updateWeatherDataByZip()
  }, [updateWeatherDataByZip])

  return (
    <>
      <button onClick={() => props.removeZip(props.zipcode)}>remove</button>
      {error === null ? (
        <div>
          <h2>Zipcode</h2>
          <p>{props.zipcode}</p>
          <h2>Temp</h2>
          <p>{data?.main?.temp}</p>
          <h2>High</h2>
          <p>{data?.main?.temp_max}</p>
          <h2>Low</h2>
          <p>{data?.main?.temp_min}</p>
          <h2>Humidity</h2>
          <p>{data?.main?.humidity}</p>
        </div>
      ) : (
        <p>invalid zip code</p>
      )}
    </>
  )
}

function WeatherDashboard() {
  const [zipcodes, setZipcodes] = useState<Array<string>>([])
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
            <li key={zip}>
              <ZipCodeWeather zipcode={zip} removeZip={removeZip} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WeatherDashboard
