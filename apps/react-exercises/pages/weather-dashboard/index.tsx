import { useState } from 'react'

/*
  Step 1 Basic UI
    - [x] show zip codes
    - [ ] user can add a zip code
    - [ ] user can remove a zip code
*/

function WeatherDashboard() {
  const [zipcodes, setZipcodes] = useState<Array<string>>(['29464', '12112'])

  return (
    <>
      <div>
        <h1>Weather Dashboard</h1>
      </div>
      <div>
        <ul>
          {zipcodes.map(zip => (
            <>
              <li>{zip}</li>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WeatherDashboard
