import React from 'react';

const c = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];

class Content extends React.Component {
  render() {
    const m = c.map(({ status, bloco, nome }, i) => (
      <li key={ i }>
        Eu
        {' '}
        {status}
        {' '}
        o conteúdo
        {' '}
        {nome}
        {' '}
        no bloco
        {' '}
        {bloco}
      </li>));
    return <ul>{m}</ul>;
  }
}

export default Content;
