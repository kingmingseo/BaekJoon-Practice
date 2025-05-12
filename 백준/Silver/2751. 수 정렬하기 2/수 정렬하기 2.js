const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number)
let data = input.slice(1)

data = data.sort((a,b)=>a-b)
console.log(data.join('\n').trim())