import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './MyContext';

function Cars() {
  return (
    <MyContext.Consumer>
            {({clicado,funcao}) => (
        /* renderiza algo utilizando o valor recebido do contexto */
    <div>
      <div>
        <img
          className={clicado.red ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => funcao('red', !clicado.red)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={clicado.blue ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => funcao('blue', !clicado.blue)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={clicado.yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => funcao('yellow', !clicado.yellow)}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
      )}
    </MyContext.Consumer>
  );
}

export default Cars

