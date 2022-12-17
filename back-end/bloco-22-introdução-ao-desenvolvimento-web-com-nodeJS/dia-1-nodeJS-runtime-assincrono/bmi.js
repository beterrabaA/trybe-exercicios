var readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat("What's your weight? ")
const altura = readlineSync.questionFloat("What's your height? ")

async function calculadoraImc(height, weight) {
    const resultado = weight / (height * height)
    if (resultado < 18.5) {
        console.log('Abaixo do peso (magreza)')
    } else if (resultado > 18.5 && resultado <= 24.9) {
        console.log('Peso normal')
    } else if (resultado > 24.9 && resultado <= 29.9) {
        console.log('Acima do peso (sobrepeso)')
    } else if (resultado > 29.9 && resultado <= 34.9) {
        console.log('Obesidade grau I')
    } else if (resultado > 34.9 && resultado <= 39.9) {
        console.log('Obesidade grau II');
    } else if(resultado > 39.9) {
        console.log('Obesidade graus III e IV');
    }
    console.log(resultado);
    return resultado
}

calculadoraImc(altura, peso)
