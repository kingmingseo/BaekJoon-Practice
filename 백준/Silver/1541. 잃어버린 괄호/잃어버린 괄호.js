let input = require('fs').readFileSync('dev/stdin').toString().trim().split('-').map(line => line.split('+'))

//계산을 위해 숫자로 변환
input = input.map(arr => arr.map(Number))
input = input.map(arr => arr.reduce((a, b)=>a+b))

let answer = input.reduce((a,b)=>a-b)
console.log(answer)