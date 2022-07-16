const funcao1 = (nome) => {
    return console.log(`Tryber ${nome} aqui`)
}

const funcao2 = (param1,param2,param3) => {
    funcao1('Lucas');
    return console.log(`Minhas três principais habilidades são:
${param1}
${param2}
${param3}`)
}

funcao2('JavaScript','HTML','CSS')