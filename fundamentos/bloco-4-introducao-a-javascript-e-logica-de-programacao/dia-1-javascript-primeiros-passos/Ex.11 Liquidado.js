let salarioBruto = 4500
let salarioDescontadoINSS;
let salarioLiquido;
let aliquota;
let valorIR;
let parcela;

if(salarioBruto < 1556.94) {
    salarioDescontadoINSS = salarioBruto*0.92
} else if(salarioBruto <= 2594.92) {
    salarioDescontadoINSS = salarioBruto*0.91
} else if (salarioBruto <= 5189.82){
    salarioDescontadoINSS = salarioBruto*0.89
} else if(salarioBruto > 5189.82){
    salarioDescontadoINSS = salarioBruto - 570.88
}


console.log(salarioDescontadoINSS);

if(salarioDescontadoINSS <= 1903.98) {
    salarioLiquido = salarioDescontadoINSS
} else if(salarioDescontadoINSS <= 2826.65) {
    aliquota = salarioDescontadoINSS*0.075
    parcela = 142.80
}else if(salarioDescontadoINSS <= 3751.05) {
    aliquota = salarioDescontadoINSS*0.15
    parcela = 354.80
} else if(salarioDescontadoINSS <= 4664.68) {
    aliquota = salarioDescontadoINSS*0.225
    parcela = 636.13
} else if(salarioDescontadoINSS > 4664.68) {
    aliquota = salarioDescontadoINSS*0.275
    parcela = 869.36
}

valorIR = aliquota - parcela
salarioLiquido = salarioDescontadoINSS - valorIR
console.log(aliquota);
console.log(parcela);
console.log(salarioLiquido)