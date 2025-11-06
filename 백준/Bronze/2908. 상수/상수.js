let input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')

let A = Number(input[0].split('').reverse().join(''))
let B = Number(input[1].split('').reverse().join(''))

console.log(Math.max(A,B))