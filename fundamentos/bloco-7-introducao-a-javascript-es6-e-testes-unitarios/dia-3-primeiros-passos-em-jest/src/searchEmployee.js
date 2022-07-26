// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  let identificação = professionalBoard.some((lement) => {
    return lement.id === id
  })

  let persona = professionalBoard.filter((lement) => {
    return lement.id === id

  })

  let volumeTest = [{}]
  volumeTest[0].id = id
  volumeTest[0].firstName = detail[0]
  volumeTest[0].lastName = detail[1]
  volumeTest[0].specialities = detail[2]

  console.log(JSON.stringify(volumeTest) === JSON.stringify(persona))

  if (identificação) return persona
  if (!identificação) throw new Error('ID não identificada')
};

module.exports = searchEmployee