let input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');
let answer =0;

for (let item of input){
  answer += item**2
}

console.log(answer%10)