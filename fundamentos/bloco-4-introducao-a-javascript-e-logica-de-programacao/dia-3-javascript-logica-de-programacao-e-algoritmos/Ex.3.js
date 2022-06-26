let array = ['java', 'javascript', 'python', 'html', 'css'];
let best = array.sort()
let maior;

for(let i = 0;i< array.length - 1;i++) {
    if(array[i] < array[[i + 1]]) {
        maior = array[i]
    }
}

console.log(maior);
console.log(best[0]);