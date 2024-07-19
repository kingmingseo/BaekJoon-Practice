let N = require('fs').readFileSync('dev/stdin').toString().trim();
N= Number(N);
let visited = new Array(N).fill(false);
let arr = [];
let selected = [];
for(let i = 1; i<=N; i++){
  arr.push(i);
}
answer = ''

function dfs(depth){
  if(depth === N){
    for(let item of selected){
      answer += `${arr[item]} `
    }
    answer += '\n'
  }
  for(let i=0; i<arr.length; i++){
    if(visited[i]) continue;

    selected.push(i);
    visited[i] = true;
    dfs(depth+1);
    selected.pop()
    visited[i] = false;
  }
}

dfs(0)
console.log(answer.trim())