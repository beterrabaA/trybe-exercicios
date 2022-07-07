function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
    
  };
  
  createDaysOfTheWeek();

  let botaoFeriado = document.getElementById('btn-holiday')
  botaoFeriado.addEventListener('click',mudaCorFeriado)
  let botaoSextaFeira = document.getElementById('btn-friday')
  botaoSextaFeira.addEventListener('click',mudaSexta)



  const listDay = document.getElementById('days')
  let totalDays = document.getElementsByClassName('day')

  const innerDay = listDay.appendChild(document.createElement('li'))
  innerDay.setAttribute('class','day')

  for (let i = 2; i < 34; i++) {
  const listDay = document.getElementById('days')
  const innerDay = listDay.appendChild(document.createElement('li'))
  innerDay.setAttribute('class','day')
  innerDay.innerText = i -2
  totalDays[0].innerText = 29
  totalDays[1].innerText = 30
}



function mudaCorFeriado() {
  for(let g = 2;g < totalDays.length;g++) {
    const diaTexto = totalDays[g]
    if(diaTexto.innerHTML === '24') {
      diaTexto.classList.add('holiday')
    } else if(diaTexto.innerHTML === '25') {
      diaTexto.classList.add('holiday')
    }  else if(diaTexto.innerHTML === '31') {
      diaTexto.classList.add('holiday')
    } 
    }
    botaoFeriado.addEventListener('click',removeCorFeriado)
}

function removeCorFeriado() {
  location.reload()
}

function mudaSexta() {
  for (let f = 5; f < totalDays.length; f +=7) {
    const element = totalDays[f];
    element.classList.add('friday')
  }
let sextas = document.getElementsByClassName('friday')
  for (let d = 0; d< sextas.length; d++) {
   const elemento = sextas[d];
    elemento.innerHTML = 'Sextou'
  }
  botaoSextaFeira.addEventListener('click',removeSexta)
}

function removeSexta() {
  location.reload()
}
adicionaTarefa()
function adicionaTarefa() {
  const listTarefa = document.querySelector('.my-tasks')
  const innerList = listTarefa.appendChild(document.createElement('span'))
  innerList.innerHTML ='Projetos'
}

