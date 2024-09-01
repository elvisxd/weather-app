const cities = [
  { id: 1, name: 'New York' },
  { id: 2, name: 'Los Angeles' },
  { id: 3, name: 'Chicago' },
  { id: 4, name: 'Houston' },
  { id: 5, name: 'Phoenix' },
]

import PropTypes from 'prop-types';

const TopButtons = ({ onCitySelect }) => {
  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button
          key={city.id}
          className='px-4 py-2 text-white rounded-md hover:from-cyan-600 hover:to-blue-600'
          onClick={() => onCitySelect(city.name)}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

TopButtons.propTypes = {
  onCitySelect: PropTypes.func.isRequired,
};



export default TopButtons