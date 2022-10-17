import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import MyContext from './MyContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = ({ signalColor, changeSignal }) => {
  return (
    <MyContext.Consumer>
    {({clicado,funcao,funcSinal}) => (
    <div>
      <div className="button-container">
        <button onClick={() => funcSinal('red')} type="button">
          Red
        </button>
        <button onClick={() => funcSinal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => funcSinal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(clicado.color)} alt="" />
    </div>
          )}
          </MyContext.Consumer>
  );
};

export default TrafficSignal;


