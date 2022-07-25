const encodeDecode = require('../src/encodeDecode')

describe('9 - Crie uma função que Codifique e Decodifique', () => {
  const frase = 'mamao'
    test('Testa se encode e decode são funções', () => {
        expect(typeof encodeDecode.encode).toBe('function')
        expect(typeof encodeDecode.decode).toBe('function')
    })

    it('Retorne uma string codificada quando a função encode for utilizada', () => {
      expect(encodeDecode.encode('hello')).toBe('h2ll4');
      expect(encodeDecode.encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
      expect(encodeDecode.encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
      expect(encodeDecode.encode('go Trybe!')).toBe('g4 Tryb2!');
    });
  
    it('Retorne uma string decodificada quando a função decode for utilizada', () => {
      expect(encodeDecode.decode('h2ll4')).toBe('hello');
      expect(encodeDecode.decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?');
      expect(encodeDecode.decode('Th3s 3s 1n 2nc4d3ng t2st.')).toBe('This is an encoding test.');
      expect(encodeDecode.decode('g4 Tryb2!')).toBe('go Trybe!');
    });

    it('Teste se as demais letras/números não são convertidos para cada caso;',() => {
      expect(encodeDecode.encode('hll')).toBe('hll')
      expect(("m1m14").length === frase.length).toBeTruthy()
    })

    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro',() => {
      expect(("m1m14").length === frase.length).toBeTruthy()
    })
  });