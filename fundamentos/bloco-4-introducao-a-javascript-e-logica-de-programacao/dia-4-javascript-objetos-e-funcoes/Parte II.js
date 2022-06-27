var palavra = 'banana'
var splitado = palavra.split('').reverse().join('')

function verificaPalindrome(palavra,splitado) {
    var palavra = 'arara'
    var splitado = palavra.split('').reverse().join('')
    if(palavra === splitado) {
        return true
    } else {
        return false
    }

}



console.log(verificaPalindrome());