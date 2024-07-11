let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let data = input.map(a=>a.split(' ').map(Number))
let [N,K] = data[0]

let change = K;
let answer = 0;
for(let i=N; i>=1; i--){
  let coin = data[i][0]
  answer += Math.floor(change / coin)
  change = change%coin;
}

console.log(answer)