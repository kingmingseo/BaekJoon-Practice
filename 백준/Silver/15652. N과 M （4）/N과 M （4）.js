let [N,M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
let selected = [];
let answer = ''

function dfs(depth,start){
  if(depth===M){
    for(let item of selected){
      answer += `${item} `
    }
    answer += '\n'
    return
  }
  for(let i=start; i<=N; i++){
    selected.push(i);
    dfs(depth+1,i)
    selected.pop(i);
  }
}
dfs(0,1)
console.log(answer)