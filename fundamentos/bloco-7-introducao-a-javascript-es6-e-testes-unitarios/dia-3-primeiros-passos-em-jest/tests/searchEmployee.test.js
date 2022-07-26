const searchEmployee = require('../src/searchEmployee')


describe('Testa a função searchEmployee', () => {
    test('Testa se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function')
    })

    it("Verifica se o Id existe dentro do objeto", () => {
        expect(searchEmployee("8579-6",["Ana","Gates",["UX", "Design"]])).toBeTruthy()
        expect(() => { searchEmployee('9999-9') }).toThrowError(Error)

    })

    it("Verifica se os paramentros passados retornam o objeto da id", () => {
        expect(searchEmployee('8579-6',["Ana","Gates",["UX", "Design"]])).toEqual([{
            firstName: "Ana",
            id: "8579-6",
            lastName: "Gates",
            specialities: ["UX", "Design"]
        }])
    })

})