const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
//retornar 6 repostas certas

let contador = 0

const pontucao = (param1, param2) => {
    let contador = 0
    let farelo = param1.find((element, i) => {
        if (element === param2[i]) contador += 1
        if (element !== param2[i]) contador -= 0.5
    })
    return contador
}


const comparaNota = (gabarito, respostas, funct) => {
    return funct(gabarito,respostas)
}

console.log(comparaNota(RIGHT_ANSWERS,STUDENT_ANSWERS,pontucao))