let [n,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

arr = arr[0].split(' ').map(Number)
let highScore = arr.reduce((a,b)=>Math.max(a,b))
let sum = 0;

for (let i =0; i<n; i++){
  sum+=arr[i]/highScore*100
}

console.log(sum/n)