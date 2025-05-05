const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(line=>line.trim())

const A = Number(input[0]);
const B = input[1];

for (let i=2; i>=0; i--){
  console.log(A * Number(B[i]))
}

console.log(A*Number(B))

