let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
arr = arr.map(Number);
let apt = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];

function nextFloor(n){
  let floor = [];
  let people = 0
  for(let i=0; i<14; i++){
    people += apt[n-1][i]
    floor.push(people)
  }
  return floor
}

for(let i=1; i<=14; i++){
  apt.push(nextFloor(i));
}
let data =[]
let temp =[]
for(let i=0; i<arr.length; i++){
  temp.push(arr[i])
  if(temp.length===2){
    data.push(temp)
    temp =[]
  }
}

for(let i=0; i<data.length; i++){
  let floor = data[i][0]
  let hosu = data[i][1]
  console.log(apt[floor][hosu-1])
}
