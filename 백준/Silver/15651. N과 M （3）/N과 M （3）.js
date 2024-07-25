let [N,M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
let selected =[];
let answer =''

function dfs(depth){
  if(depth===M){
    for(let item of selected){
      answer+=`${item} `
    }
    answer+='\n'
    return
  }
  for(let i=1; i<=N; i++){
    selected.push(i);
    dfs(depth+1)
    selected.pop();
  }
}
dfs(0)
console.log(answer)