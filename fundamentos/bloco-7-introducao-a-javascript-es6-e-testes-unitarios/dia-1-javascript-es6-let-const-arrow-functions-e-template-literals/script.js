const maiorPalavra = (frase) => {
    let sepa = frase.split(' ')
    console.log(sepa.sort((a,b) => {
        return a.length - b.length
    })[sepa.length -1])
}

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu')