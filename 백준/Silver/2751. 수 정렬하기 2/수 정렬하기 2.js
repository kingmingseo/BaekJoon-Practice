let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(a=>Number(a));
input = input.slice(1)
let sortArr = input.sort((a,b)=>a-b);
console.log(sortArr.join('\n'))