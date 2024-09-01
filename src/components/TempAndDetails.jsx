
import PropTypes from 'prop-types';

const TempAndDetails = ({ weather }) => {
  if (!weather) {
    return null
  }

  const details = [
    { id: 1, title: 'Feels Like', value: `${weather.feelsLike}°C`, icon: '🌡️' },
    { id: 2, title: 'Humidity', value: `${weather.humidity}%`, icon: '💧' },
    { id: 3, title: 'Pressure', value: `${weather.pressure} hPa`, icon: '⚖️' },
    { id: 4, title: 'Visibility', value: `${weather.visibility} m`, icon: '👁️' },
    { id: 5, title: 'Wind Speed', value: `${weather.windSpeed} m/s`, icon: '🌬️' },
    { id: 6, title: 'Wind Direction', value: `${weather.windDeg}°`, icon: '🧭' }
  ]

  const detailsHorizontal = [
    { id: 1, title: 'Min Temp', value: `${weather.tempMin}°C`, icon: '🌡️' },
    { id: 2, title: 'Max Temp', value: `${weather.tempMax}°C`, icon: '🌡️' },
    { id: 3, title: 'Clouds', value: `${weather.clouds}%`, icon: '☁️' }
  ]

  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{weather.weather.main}</p>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <img src={`http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`} className="w-20" alt="weather icon" />
        <p className="text-5xl text-gray-100">{weather.temperature}°C</p>

        <div className="flex flex-col space-y-3 items-start mt-0">
          {details.map((detail) => (
            <div key={detail.id} className="flex font-light mb-2 text-sm items-center justify-center text-gray-100">
              {detail.icon}
              <p className="text-sm ml-2">{detail.title}</p>
              <p className="text-sm ml-2">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-around py-6">
        {detailsHorizontal.map((detail) => (
          <div key={detail.id} className="flex flex-col items-center text-gray-100 m-2">
            {detail.icon}
            <p className="text-lg">{detail.title}</p>
            <p className="text-sm">{detail.value}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TempAndDetails