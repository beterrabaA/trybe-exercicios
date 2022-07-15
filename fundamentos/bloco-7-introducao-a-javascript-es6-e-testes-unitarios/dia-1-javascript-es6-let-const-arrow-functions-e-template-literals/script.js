const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const minhaFuncao = (array) => {
 console.log(array.sort((a,b) => {
   return a - b
 }));
}

minhaFuncao(oddsAndEvens) // será necessário alterar essa linha 😉