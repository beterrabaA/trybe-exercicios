// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma 
// nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada
//  pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo 
//  da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const newEmployees = (retornado) => {
    const employees = {
      id1: retornado[0], // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: retornado[1], // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: retornado[2], // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const idsEmail = (array) => {
    return array 

  }

let fucRet = newEmployees(idsEmail(['Pedro Guerra','Luiza Drumond','Carla Paiva']))

let keys = Object.keys(fucRet)

for(key of keys) {
  let prefEmail = (fucRet[key]).split(' ').join('_').toLowerCase()
  console.log({Nome:fucRet[key], email:`${prefEmail}@trybe.com`})

}