let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let graph = [0];
for (let i = 1; i <= n; i++) {
    graph.push(Number(input[i]));
}

let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];

for (let x = 1; x <= n; x++) {
  if(!visited[x]) isCycle(x,graph,visited,finished,result);

}

console.log(result.length);
result.sort((a,b)=>a-b);
for(let x of result){
  console.log(x)
}
function isCycle(x, graph, visited, finished, result) {
    visited[x] = true;
    let y = graph[x]; //다음노드
    if (!visited[y]) {
        isCycle(y, graph, visited, finished, result);
    } else if (!finished[y]) {
        while (y != x) {
            result.push(y);
            y = graph[y];
        }
        result.push(x);
    }
    finished[x] = true;
}
