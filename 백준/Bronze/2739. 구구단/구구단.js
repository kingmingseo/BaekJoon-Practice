let input = require('fs').readFileSync('dev/stdin').toString();
input = Number(input)
let answer = ''
for(let i =1; i<=8; i++){
  answer += input + ' * ' + i + ' = ' + input*i +'\n'
}
answer += input + ' * ' + 9 + ' = ' + input*9
console.log(answer)