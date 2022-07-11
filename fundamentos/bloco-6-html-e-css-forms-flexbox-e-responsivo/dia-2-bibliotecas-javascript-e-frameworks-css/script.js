const botaoSubmmit = document.querySelector('.butao');
const inputName = document.querySelector('#userName')
const inputEmail = document.querySelector('#userEmail')
const saidaNome = document.getElementById('userInner')
const saidaEmail = document.getElementById('emailInner')
const inputCheck1 = document.getElementById('check1')
const inputCheck2 = document.getElementById('check2')
const saidaCheck1 = document.getElementById('saidaCheck1')
const saidaCheck2 = document.getElementById('saidaCheck2')

function saidaTotal(event) {
    event.preventDefault()
    saidaNome.innerHTML = inputName.value
    saidaEmail.innerHTML = inputEmail.value
    saidaCheck1.innerHTML = inputCheck1.value
    saidaCheck2.innerHTML = inputCheck2.value
}

botaoSubmmit.addEventListener('click',saidaTotal)