const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (objeto) => {
  objeto.turno = 'noite'
}

const listObjetos = (object) => {
  console.log(Object.keys(object))
}

const objectSize = (tamanho) => {
  console.log(Object.keys(tamanho).length)
}

const valorObjeto = (valoroso) => {
  console.log(Object.values(valoroso));
}

adicionaTurno(lesson2)

const allLessons = (param1, param2, param3) => {
  var copy = {
    lesson1: param1,
    lesson2: param2,
    lesson3: param3
  }

  // console.log(copy);

  return copy
}



// listObjetos(lesson3)

// objectSize(lesson1)

// valorObjeto(lesson1)
// console.log(Object.entries(lesson2))

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
// Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

let testa = allLessons(lesson1, lesson2, lesson3)

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

  const test = (objeta = testa) => {
    let valorTudo = objeta.lesson1.numeroEstudantes + objeta.lesson2.numeroEstudantes + objeta.lesson3.numeroEstudantes
    console.log(valorTudo)
  }

  test()
  ///////////////////////////////////////////////////////////////////////////////////
  
  // Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto
  const getValueByNumber = (aula,indice) => {
    console.log(Object.values(aula)[indice])
  }

getValueByNumber(lesson1, 0)
// Output: 'Matématica'

/////////////////////////////////////////////////////////////////////////////////////

// Crie uma função que verifique se o par (chave / valor) existe na função. 
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

const verifyPair = (aulas,marcador,palavra) => {
  let verificador = aulas[marcador]

    console.log(verificador === palavra);
}


  verifyPair(lesson3, 'materia', 'Maria Clara')


  // BÔNUS


  //Uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const aulasSelecionada = (ob = testa) => {
  let ind = Object.keys(ob)

  let contador = 0;

for(item in ind) {
  if((ob[ind[item]].materia) === 'Matemática') {
    let valor = ob[ind[item]].numeroEstudantes
    contador += valor
  }
}

console.log(`${contador} alunos foram para aula de ${ob[ind[0]].materia}`)

}

aulasSelecionada()

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora,
//  as aulas que ele ou ela ministrou e o número total de estudantes.

const createReport = (test,pessoa) => {
  let ind = Object.keys(test)
  let novoCurriculo = {}

let nwarray = []
let contador = 0;

for(item in ind) {
  if((testa[ind[item]].professor) === pessoa) {
    let valor = test[ind[item]].materia
    let estudantes = test[ind[item]].numeroEstudantes
    contador += estudantes
    nwarray.push(valor)
  }
}

novoCurriculo.nome = pessoa
novoCurriculo.aulas = nwarray
novoCurriculo.estudantes = contador



console.log(novoCurriculo)

}

createReport(testa,'Maria Clara')