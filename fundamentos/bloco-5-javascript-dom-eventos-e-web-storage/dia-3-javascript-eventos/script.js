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

  if(innerDay.innerText = i -2 === 24) {
    innerDay.innerText = i -2
    innerDay.classList.add('holiday')
  }else if (innerDay.innerText = i -2 === 25) {
    innerDay.innerText = i -2
    innerDay.classList.add('holiday')
  }else if (innerDay.innerText = i -2 === 31) {
    innerDay.innerText = i -2
    innerDay.classList.add('holiday')
  } else {
    innerDay.innerText = i -2
    innerDay.setAttribute('class','day')
  }
  }

for (let f = 5; f < totalDays.length; f +=7) {
  const element = totalDays[f];
  element.classList.add('friday')
}