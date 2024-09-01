import React, { useState, useEffect } from 'react'
import TopButtons from "./components/TopButtons"
import Inputs from "./components/inputs"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast"
import { getFormattedWeatherData } from "./services/weatherService"
import Footer from './components/Footer'

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])

  const getWeather = async (city, lat, lon) => {
    try {
      const data = await getFormattedWeatherData(city, lat, lon)
      setWeather(data)
      // Aquí debes obtener y establecer los datos de pronóstico
      const forecastData = data.forecast // Asegúrate de que `data.forecast` contenga los datos de pronóstico
      setForecast(forecastData)
    } catch (error) {
      console.error("Error fetching weather data: ", error)
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        getWeather(null, latitude, longitude)
      },
      (error) => {
        console.error("Error getting location: ", error)
        // Fallback to a default location if user denies geolocation
        getWeather('Florida')
      }
    )
  }, [])

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-tr shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons onCitySelect={getWeather} />
      <Inputs getWeather={getWeather} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast forecastData={forecast} />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App