const myFizzBuzz = require('../src/myFizzBuzz')

describe('A função myFizzBuzz(num) recebe um número num e retorna o parametro esperado',() => {
    test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado',() => {
        expect(myFizzBuzz(45)).toBe('fizzbuzz')
    })

    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado',() => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })

    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado',() => {
        expect(myFizzBuzz(25)).toBe('buzz')
    })

    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado',() => {
        expect(myFizzBuzz('e')).toBeFalsy()
    })
})