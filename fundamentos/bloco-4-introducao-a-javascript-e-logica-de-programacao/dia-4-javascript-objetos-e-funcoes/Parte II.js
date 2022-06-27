function menorQue(){
const array = [2, 4, 6, 7, 10, 0, -3];
let maior;
let menor;

for(let i = 0;i < array.length;i++) {
    if(array[i] > array[i+1]){
    } else {
        menor = i
    }
}

return menor
}

console.log(menorQue());
