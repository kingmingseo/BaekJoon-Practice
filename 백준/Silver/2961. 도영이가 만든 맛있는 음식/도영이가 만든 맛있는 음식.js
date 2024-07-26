let [N,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);
arr = arr.map(a=>a.split(' ').map(Number))
let visited = new Array(N).fill(false);
let minValue =1e9
let selected = []
let answer = []
function dfs(depth){
  if(depth===N){
    let sour = 1;
    let bitter =0;
    let taste = 0;
    for(let item of selected){
        sour *= arr[item][0]
        bitter += arr[item][1]
    }
    if(sour>bitter){
      taste = sour - bitter
    }
    else{
      taste = bitter - sour
    }
    minValue = Math.min(minValue,taste)
    return;
  }
  for(let i=0; i<arr.length; i++){
    if(visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth+1)
    visited[i] = false;
    selected.pop()
  }
}

for(let i=0;i<N; i++){
  dfs(i)
}
console.log(minValue)