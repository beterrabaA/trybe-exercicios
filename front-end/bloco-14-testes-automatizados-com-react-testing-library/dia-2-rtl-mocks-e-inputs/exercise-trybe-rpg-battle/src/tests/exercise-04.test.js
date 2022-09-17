import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisção para a API', async () => {
  const boneco = [
    { id: 1, name: 'Daenerys', source: 'Game of Thrones', defensePoints: 40 },
    { id: 2, name: 'John Snow', source: 'Game of Thrones', defensePoints: 30 },
    { id: 3, name: 'Pikachu', source: 'Pokémon', defensePoints: 20 },
    { id: 4, name: 'Charmander', source: 'Pokémon', defensePoints: 10 },
    { id: 5, name: 'Legolas', source: 'Lord of The Rings', defensePoints: 15 },
    { id: 6, name: 'Frodo', source: 'Lord of The Rings', defensePoints: 7 }];

  global.fetch = jest.fn(async () => ({
    json: async () => boneco,
  }));

  render(<App />);

  const namedBoneco = await screen.findByRole('heading', { name: /daenerys/i });

  expect(namedBoneco).toBeInTheDocument();
});
