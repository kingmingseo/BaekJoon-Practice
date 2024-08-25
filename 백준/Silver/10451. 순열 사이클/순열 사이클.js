let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let temp = input.map(a=>a.split(' ').map(Number))
let testCase = []

for(let i=2; i<temp.length; i++){
  if(i%2===0){
    testCase.push(temp[i])
  }
}

function isCycle(visited, data, nowNode ){

  if(visited[nowNode]){
    return true;
  }
  visited[nowNode] = true;
  if(isCycle(visited,data,data[nowNode])) return true;
  return false;
}

for(let item of testCase){
  let visited = new Array(item.length+1).fill(false)
  item.unshift(0);
  let count = 0
  for(let i =1; i<item.length; i++){
    if(visited[i]) continue
    if(isCycle(visited,item,i)) count++;
  }
  console.log(count)
}

