import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');

const enemy = {
  id: 1,
  name: 'Chapolin Colorado',
  source: 'Chaves',
  defensePoints: 30,
};

it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(31);

  const { success } = attackEnemy(2, 20, enemy);

  expect(success).toBeTruthy();
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(29);

  const { success } = attackEnemy(2, 20, enemy);

  expect(success).toBeFalsy();
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(30);

  const { success } = attackEnemy(2, 20, enemy);

  expect(success).toBeFalsy();
});
