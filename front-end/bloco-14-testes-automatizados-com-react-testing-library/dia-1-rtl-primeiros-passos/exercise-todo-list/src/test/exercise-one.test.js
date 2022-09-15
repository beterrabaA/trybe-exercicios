import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    const buttonAdd = screen.getByText('Adicionar');
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveProperty('type', 'button');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const JuditeTask = 'Pegar maçãs na casa da Judite';
    const inputList = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByText('Adicionar');
    // interagir com os elementos
    userEvent.type(inputList, JuditeTask);
    userEvent.click(buttonAdd);
    // fazer os testes
    expect(inputList).toHaveValue('');
    expect(screen.getByText('Pegar maçãs na casa da Judite')).toBeInTheDocument();
    expect(inputList).toHaveValue('');
  });
});
