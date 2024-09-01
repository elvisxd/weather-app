const API_KEY = '169847be9483f491e46e5e50d1030900'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

const getWeatherData = async (city, lat, lon) => {
  const url = lat && lon 
    ? `${API_URL}?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    : `${API_URL}?q=${city},us&APPID=${API_KEY}&units=metric`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const getFormattedWeatherData = async (city, lat, lon) => {
  const data = await getWeatherData(city, lat, lon)
  if (!data || !data.sys || !data.main || !data.weather) {
    throw new Error("Invalid data from weather API")
  }
  const formattedData = {
    location: `${data.name}, ${data.sys.country}`,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    visibility: data.visibility,
    windSpeed: data.wind.speed,
    windDeg: data.wind.deg,
    weather: {
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    },
    clouds: data.clouds.all,
    date: new Date(data.dt * 1000).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    })
  }
  return formattedData
}

export { getFormattedWeatherData }