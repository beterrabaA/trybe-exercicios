let array =['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let geral = []

function maiorNome(nomes) {
let length = 0
    for(let i =0;i < array.length;i++) {
        if(length < array[i].length) {
            length = array[i].length
        }
    }

    for(var j =0; j < nomes.length; j++){
        if(array[j].length === length)
        geral.push(array[j])
    }

    if(geral.length === 1) {
        return geral[0]
    } else {
        return geral
    }
}

console.log(maiorNome(array))