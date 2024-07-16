let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [N,arr,M] = input
N= Number(N);
arr = arr.split(' ').map(Number);
M = Number(M);

let end = arr.reduce((a,b)=>Math.max(a,b))
let start = 1;
let result = 0;

while(start<=end){
  let mid = Math.floor((start+end)/2);
  let total = 0;
  for(let x of arr){
    total += Math.min(mid,x);
  }
  if(total<=M){
    result = mid
    start = mid+1
  }
  else{
    end = mid-1;
  }
}

console.log(result)