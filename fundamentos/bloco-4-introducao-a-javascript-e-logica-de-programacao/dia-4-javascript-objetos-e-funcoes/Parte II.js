let array =[2, 3, 2, 5, 8, 2, 3];
let counts = {}

array.forEach((count) => {
    counts[count]= (counts[count] || 0) +1;
})

const maxValue = Math.max(...Object.values(counts))
//console.log(Object.keys(counts));
const num = Object.keys(counts).find((key) => counts[key] === maxValue)
console.log(num);