const fatoral = (numero) => {
    let count = 1
    for (let i = 1; i <= numero; i++) {
        count *= i
    }
    console.log(count) 
}

fatoral(5)