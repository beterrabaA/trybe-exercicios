const hydrate = (frase) => {
    let numbers = frase.replace(/[^0-9]/g, '');
    let arrayStr = numbers.split('');
    let contador = 0
    for (i of arrayStr) {
        let final = parseInt(i)
        contador += final
    }
    if(contador === 1) return `${contador} copo de água`
    return `${contador} copos de água`
}

module.exports = hydrate
