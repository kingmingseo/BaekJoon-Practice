const input = require('fs').readFileSync('dev/stdin').toString().trim()
let answer = ''

for(let i=1; i<=input; i++){
  answer += '*'.repeat(i)
  answer += '\n'  
}

console.log(answer.trim())