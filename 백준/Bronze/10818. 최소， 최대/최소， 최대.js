let [n, m] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

m = m.split(' ').map(Number)

let min = Math.min(...m)
let max = Math.max(...m)
console.log(min,max)