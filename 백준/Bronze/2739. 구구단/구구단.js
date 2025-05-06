const input = require('fs').readFileSync('dev/stdin').toString().trim()

let answer = ''
for (let i = 1; i < 10; i++) {
  answer += `${input} * ${i} = ${Number(input) * i}\n`
}

console.log(answer.trim())