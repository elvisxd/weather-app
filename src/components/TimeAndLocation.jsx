import PropTypes from 'prop-types'

const TimeAndLocation = ({ weather }) => {
  if (!weather) return null

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight text-gray-100">
          {weather.date}
        </p>
      </div>
      <div className="flex items-center justify-center my-6">
        <p className="text-3xl text-gray-100">
          {weather.location}
        </p>
      </div>
    </div>
  )
}

TimeAndLocation.propTypes = {
  weather: PropTypes.shape({
    date: PropTypes.string,
    location: PropTypes.string
  })
}

export default TimeAndLocation