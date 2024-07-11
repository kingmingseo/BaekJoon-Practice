let [n,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
arr = arr[0].split(' ').map(Number)
answer = 0
arr.sort((a,b)=>a-b)

for(let i=0; i<arr.length; i++){
  for(let j=0; j<=i; j++){
    answer += arr[j]
  }
}
console.log(answer)