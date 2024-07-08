let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
input = input.map(Number)
let temp = new Set()

for (let i = 0; i<10; i++){
  temp.add(input[i]%42)
}

console.log(temp.size)