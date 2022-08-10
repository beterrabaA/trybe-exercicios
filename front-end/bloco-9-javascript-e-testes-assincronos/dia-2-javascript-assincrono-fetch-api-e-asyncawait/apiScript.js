// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      console.log(data.joke);
let paraNovo = document.createElement('h3')
let conteudoNovo = document.createTextNode(data.joke);
paraNovo.appendChild(conteudoNovo)
divAtual = document.getElementById("jokeContainer");
document.body.insertBefore(paraNovo, divAtual);
    })
//    let paraNovo = document.createElement('p')
 //   let conteudoNovo = document.createTextNode("Olá, cumprimentos!");
//    paraNovo.appendChild(conteudoNovo)
//    divAtual = document.getElementById("jokeContainer");
//document.body.insertBefore(paraNovo, divAtual);
};

window.onload = () => fetchJoke();