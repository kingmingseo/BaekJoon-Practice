let [N,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

arr= arr.map(Number);
arr.sort((a,b)=>a-b)

let julsaAvg = Math.round(N*0.15)

let total = 0
for(let i=0; i<arr.length; i++){
  if(i<julsaAvg || arr.length-julsaAvg-1<i){
    continue
  }
  else{
    total += arr[i]
  }
}
if(total ===0){
  console.log(0)
}
else{
  console.log(Math.round(total/(N-julsaAvg*2)))
}
