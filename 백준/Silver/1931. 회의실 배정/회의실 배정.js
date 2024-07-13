let [N,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let data = arr.map(a=>a.split(' ').map(Number))
let sortData = data.sort(compare)
function compare(a,b){
  if(a[1]===b[1]){
    return a[0] - b[0]
  }
  else{
    return a[1] -b[1]
  }
}

let answer = []
let finishTime = sortData[0][1];
for(let i=1; i<sortData.length; i++){
  if(sortData[i][0]>=finishTime){
    finishTime = sortData[i][1]
    answer.push(sortData[i])
  }
}

console.log(answer.length+1)