import React, { useState } from 'react'

const Inputs = ({ getWeather }) => {
  const [city, setCity] = useState('')

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleClick = () => {
    if (city) {
      getWeather(city)
    }
  }

  return (
    <div className="flex justify-center my-6">
      <div className="flex items-center w-full max-w-md space-x-4">
        <input
          type="text"
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter city name"
          value={city}
          onChange={handleChange}
        />
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleClick}
        >
          Get Weather
        </button>
      </div>
    </div>
  )
}

export default Inputs