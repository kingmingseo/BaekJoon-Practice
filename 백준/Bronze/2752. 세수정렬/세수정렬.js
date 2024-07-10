let n = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')

console.log(n.sort((a,b)=>a-b).join(' '))