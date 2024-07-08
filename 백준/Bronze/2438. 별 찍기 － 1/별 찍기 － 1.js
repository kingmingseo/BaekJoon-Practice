let input = require('fs').readFileSync('dev/stdin').toString();
input = Number(input)

for(let i=1; i<input+1; i++){
  console.log('*'.repeat(i))
}