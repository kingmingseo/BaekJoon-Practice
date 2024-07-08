let [a,b] = require('fs').readFileSync('dev/stdin').toString().split(' ')

let answer = ''
answer += Number(a)+Number(b)+'\n'
answer += Number(a)-Number(b)+'\n'
answer += Number(a)*Number(b)+'\n'
answer += parseInt(Number(a)/Number(b))+'\n'
answer += Number(a)%Number(b)

console.log(answer)