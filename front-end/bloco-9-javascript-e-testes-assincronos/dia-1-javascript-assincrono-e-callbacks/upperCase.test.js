const upperCase = require('./upperCase')

describe('Testes da função assíncrona upperCase', () => { 
    test("Testando uppeCase que recebe como parâmetro 'banana'", (done) => {
        upperCase('banana', (result) => {
          try {
            expect(result).toBe('BANANA');
            done();
          } catch (error) {
            done(error);
          }
        });
      });

      it("Testando uppeCase que recebe como parâmetro 'celular'", (done) => {
        upperCase('celular', (resultado) => {
          try {
            expect(resultado).toBe('CELULAR');
            done();
          } catch (error) {
            done(error);
          }
        });
      });
 })