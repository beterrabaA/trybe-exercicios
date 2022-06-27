const array = [2, 3, 6, 7, 10, 1];
let maior;

for(let i = 0;i < array.length;i++) {
    if(array[i] > array[i+1]){
        maior = i
    }
}

console.log(maior)

