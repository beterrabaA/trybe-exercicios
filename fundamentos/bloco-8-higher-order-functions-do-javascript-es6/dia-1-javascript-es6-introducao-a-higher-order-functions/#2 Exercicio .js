// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como 
// parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser
//  uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = () => {
    return (Math.random() * (5)).toFixed(0)
}

const verificaSorteio = (funct,numeroDoSorteio) => {
    let nume = parseFloat(funct())
  return nume  === numeroDoSorteio ? console.log("Parabéns você ganhou") : console.log("Tente novamente");
}


const print = (callback) => console.log(callback())

verificaSorteio(sorteio,3)