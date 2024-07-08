let [n, ...arr] = require('fs').readFileSync('dev/stdin').toString().split('\n')
let answer = ''

for(let i=0; i<n; i++){
  let [a,b] = arr[i].split(' ')
  answer += Number(a) + Number(b)+ '\n'
}

console.log(answer)


