import React from 'react';
import { arrayOf } from 'prop-types';

import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  state = {
    numerador: 0,
    typeredFilter: '',
  };

  setador = (listTem) => {
    this.setState((antNum) => ({
      numerador: (antNum.numerador + 1) % listTem.length,
    }));
  };

  filtrador = (typeredFilter) => {
    this.setState(() => ({
      typeredFilter,
    }));
  };

  listaFiltrada = () => {
    const { pokemonList } = this.props;
    const { typeredFilter } = this.state;
    return pokemonList.filter((e) => {
      if (typeredFilter === '') return e.type;
      return e.type === typeredFilter;
    });
  };

  render() {
    const { numerador } = this.state;
    const ftPok = this.listaFiltrada();
    return (
      <>
        <h1> Pokédex </h1>
        <div>
          <button type="button" onClick={ () => this.filtrador('') }>Alls</button>

          <button
            type="button"
            onClick={ () => this
              .filtrador('Electric') }
          >
            Electric

          </button>
          <button type="button" onClick={ () => this.filtrador('Fire') }>Fire</button>
          <button type="button" onClick={ () => this.filtrador('Bug') }>Bug</button>
          <button type="button" onClick={ () => this.filtrador('Poison') }>Poison</button>
          <button
            type="button"
            onClick={ () => this
              .filtrador('Psychic') }
          >
            Psychic

          </button>
          <button type="button" onClick={ () => this.filtrador('Normal') }>Normal</button>
          <button type="button" onClick={ () => this.filtrador('Dragon') }>Dragon</button>
        </div>
        <div className="pokedex">
          <Pokemon pokemon={ ftPok[numerador] } />
          <div>
            <button
              type="button"
              onClick={ () => this
                .setador(ftPok) }
            >
              Próximo pokémon

            </button>
          </div>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
