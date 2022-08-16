import React from 'react'

const textJSX = "Hello, JSX"

const skills = ['Varrer a casa','Limpar os móveis','Lavar a louça','Abastecer o carro','Cortar a energia do vizinho','Estacionar em local proibido'] // adicione mais habilidades aqui
const listaTarefa = skills.map((tarefa) => <li>{tarefa}</li>) // cria um array de tags <li>

const Task = (value) => {
    return (
      <ul>{listaTarefa}</ul>
    );
  }

export default Task