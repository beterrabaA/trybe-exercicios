let palavra = 'refrigerante'
let separador = palavra.split('')
let tudoJunto = '';
for(let i = separador.length-1;i >= 0;i--) {
    tudoJunto += separador[i]
}


console.log(tudoJunto)