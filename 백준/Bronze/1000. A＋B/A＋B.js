let [a,b] = require('fs').readFileSync('dev/stdin').toString().split(' ')
console.log(Number(a)+Number(b))