let [N,P] = require('fs').readFileSync('dev/stdin').toString().split('\n')
P = P.split(' ').map(Number).sort((a,b)=>a-b)

let waitTime = 0
let answer = 0
for(let i =0; i<P.length; i++){
  waitTime += P[i]
  answer += waitTime
}

console.log(answer)