import rollDice from '../service/rollDice';

it('Testa o retorno da função `rollDice` com "Math.random()" mockado ', () => {
  Math.random = jest.fn().mockReturnValue(0.8);

  expect(rollDice()).toBe(16);
  expect(Math.random).toHaveBeenCalledTimes(1);
});
