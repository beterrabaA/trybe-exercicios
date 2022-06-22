let numbers = [5,9,3,19,70,8,100,2,35,27]
let soma = 0;

for(let i = 0;i < numbers.length;i++) {
    soma += numbers[i]
}

let resultado = soma/(numbers.length)

if(resultado > 20) {
console.log("Maior que 20")
} else {
    console.log("Menor que 20");
}