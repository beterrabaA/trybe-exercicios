const a = (Math.random() * 101).toFixed(0)
const b = (Math.random() * 101).toFixed(0)
const c = (Math.random() * 101).toFixed(0)

if(a  % 2 !== 0 || b %2 !== 0 || c & 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

console.log(a,b,c)