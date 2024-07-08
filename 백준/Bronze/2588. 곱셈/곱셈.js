let input= require('fs').readFileSync('dev/stdin').toString().split('\n')
let a = Number(input[0])
let b = input[1]
let answer = ''

for(let i = b.length-1; i>=0; i--){
  answer += a * Number(b[i]) + '\n'
}
answer += a*Number(b)
console.log(answer)

