const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
const data = input[1].split(' ').map(number => Number(number))
console.log(Math.min(...data), Math.max(...data))