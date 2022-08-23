import PropTypes from 'prop-types';
import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <li>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          {value}
          {' '}
          {measurementUnit}
        </p>
        <img src={ image } alt={ name } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }).isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
