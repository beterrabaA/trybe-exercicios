const sum = require('./sum')

describe("Verifica o retorno da função 'sum'", () => {
    test('A soma de 4 e 5 deve retornar 9', () => {
        expect(sum(4,5)).toBe(9)
    })

    it('A soma de 0 e 0 deve retornar 9', () => {
        expect(sum(0,0)).toBe(0)
    })

    it("A soma de 4 e '5'  deve retornar um erro", () => {
        expect(() => { sum(4,'5') }).toThrowError(new Error('parameters must be numbers'))
    })
})