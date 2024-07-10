let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [n,m]=input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number).sort((a,b)=>a-b)[m-1]

console.log(arr)
