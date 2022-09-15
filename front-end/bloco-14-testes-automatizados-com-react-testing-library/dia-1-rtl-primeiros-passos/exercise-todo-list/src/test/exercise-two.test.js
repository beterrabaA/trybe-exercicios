import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const inputList = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByText('Adicionar');
    // interagir com os elementos
    userEvent.type(inputList, listTodo[0]);
    userEvent.click(buttonAdd);
    userEvent.type(inputList, listTodo[1]);
    userEvent.click(buttonAdd);
    userEvent.type(inputList, listTodo[2]);
    userEvent.click(buttonAdd);
    // testes
    expect(screen.getByText(listTodo[0])).toBeInTheDocument();
    expect(screen.getByText(listTodo[1])).toBeInTheDocument();
    expect(screen.getByText(listTodo[2])).toBeInTheDocument();
    expect(inputList).toHaveValue('');
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="Pegar a farda no Inferninho" />);

    expect(screen.getByText('Pegar a farda no Inferninho')).toBeInTheDocument();
  });
});
