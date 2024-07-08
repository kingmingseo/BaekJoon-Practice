let [a,b] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

b = b.split('').map(Number).reduce((a,b)=>a+b,0)

console.log(b)
