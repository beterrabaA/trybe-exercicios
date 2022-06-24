const a = 45
const b = 100
const c = 35
let result = true

let soma = (a+b+c)

if(a > 0 && b > 0 && c >0) {
    if(soma === 180) {
        console.log(true)
    } else {
        console.log(false)
    }
}else {
    console.log(false)
}