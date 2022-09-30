import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moveCarAction } from './redux/actions';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <main>
      <section>
        <img
          className={ redCar ? 'car-right' : 'car-left' }
          src={ carRed }
          alt="red car"
        />
        <button
          onClick={ () => moveCar('red', !redCar) }
          type="button"
        >
          move
        </button>
      </section>
      <section>
        <img
          className={ blueCar ? 'car-right' : 'car-left' }
          src={ carBlue }
          alt="blue car"
        />
        <button
          onClick={ () => moveCar('blue', !blueCar) }
          type="button"
        >
          move
        </button>
      </section>
      <section>
        <img
          className={ yellowCar ? 'car-right' : 'car-left' }
          src={ carYellow }
          alt="yellow car"
        />
        <button
          onClick={ () => moveCar('yellow', !yellowCar) }
          type="button"
        >
          move
        </button>
      </section>
    </main>
  );
}

Cars.propTypes = {
  redCar: PropTypes.bool.isRequired,
  blueCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
  moveCar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow,
});

const mapDispatchToProps = (dispatch) => ({
  moveCar: (...paylaod) => dispatch(moveCarAction(...paylaod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
