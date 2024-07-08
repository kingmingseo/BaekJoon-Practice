let [n, ...arr] = require('fs').readFileSync('dev/stdin').toString().split('\n');
arr = arr[0].split(' ')
let max= arr[0];
let min = arr[0];

for(let item of arr){
  if (max < Number(item)){
    max = Number(item)
  }
  if (min > Number(item)){
    min = Number(item)
  }
}

console.log(min,max)