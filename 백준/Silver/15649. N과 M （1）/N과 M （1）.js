let [N, M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
let arr = []
let selected = [];
let visited = new Array(N).fill(false);
let answer = ''
for (let i=1; i<=N; i++) arr.push(i);

function dfs(depth){
  if(depth === M){
    for(let item of selected){
      answer += `${arr[item]} `
    }
    answer +='\n'
    return
  }
  for(let i=0; i<arr.length; i++){
    if(visited[i]) continue
    selected.push(i);
    visited[i] = true;
    dfs(depth+1);
    selected.pop();
    visited[i]=false;
  }
}
dfs(0)
console.log(answer)