let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
N = Number(N)
arr = arr.map(Number)
let selected = []

function dfs(N,goal){
  if(N===goal){
    answer +=1;
    return 
  }
  else if(N > goal){
    return
  }
  for(let i=1; i<=3; i++){
    selected.push(i)
    dfs(N+i,goal)
    selected.pop()
  }
}

for(let i=0; i<N; i++){
  answer = 0
  dfs(0, arr[i])
  console.log(answer)
}