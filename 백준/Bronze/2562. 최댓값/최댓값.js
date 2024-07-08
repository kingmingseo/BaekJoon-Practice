let input = require('fs').readFileSync('dev/stdin').toString().split('\n')
let max = -1
let number = 0
for (let i=1; i<=9; i++){
  if(max<Number(input[i-1])){
    number = i;
    max = Number(input[i-1])
  }
}
console.log(`${max}
${number}`)