const forecastData = [
    { id: 1, day: 'Monday', temp: '22°C', icon: '01d' },
    { id: 2, day: 'Tuesday', temp: '24°C', icon: '02d' },
    { id: 3, day: 'Wednesday', temp: '26°C', icon: '03d' },
    { id: 4, day: 'Thursday', temp: '28°C', icon: '04d' },
    { id: 5, day: 'Friday', temp: '30°C', icon: '01d' },
    { id: 6, day: 'Saturday', temp: '32°C', icon: '02d' },
    { id: 7, day: 'Sunday', temp: '34°C', icon: '03d' },
  ]
  const Forecast = () => {
    return (
      <div className="mt-8">
        <div className="flex flex-wrap justify-between space-x-1">
          {forecastData.map((day) => (
            <div key={day.id} className="flex flex-col items-center text-white p-2 rounded-lg w-1/4 sm:w-1/6 md:w-1/8 lg:w-1/10 xl:w-1/12">
              <p className="text-xs font-semibold">{day.day}</p>
              <img src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="weather icon" className="w-10 h-10" />
              <p className="text-xs">{day.temp}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Forecast
  