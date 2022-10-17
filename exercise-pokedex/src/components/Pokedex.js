import React from 'react';
import lista from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <>
        <h1>Pokédex</h1>
        <ul className="pokedex">
          {lista.map((e) => <Pokemon pokemon={ e } key={ e.id } />)}
        </ul>
      </>
    );
  }
}

export default Pokedex;
