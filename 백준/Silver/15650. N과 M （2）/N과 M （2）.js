let [N, M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
let visited = new Array(N+1).fill(false);
let selected = [];
let answer = ''
function dfs(depth,start){
  if(depth===M){
    for(let item of selected){
      answer+= `${item} `
    }
    answer +='\n'
    return;
  }
  for(let i = start; i<=N; i++){
    if(visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth+1,i);
    visited[i] = false;
    selected.pop()
  }
}
dfs(0,1)
console.log(answer)