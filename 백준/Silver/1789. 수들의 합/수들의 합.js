let input = require('fs').readFileSync('dev/stdin').toString()
input = Number(input)
answer = 0
let i = 1;
while(input >= 0){
  input -= i;
  answer +=1
  i+=1 
}
console.log(answer-1)

