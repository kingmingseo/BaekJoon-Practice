let [N, M, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);
M = Number(M);
arr = arr.map((a) => a.split(' ').map(Number));
let graph = [[]];
for (let i = 0; i <= 100; i++) {
    graph.push([]);
}

for (let i = 0; i < arr.length; i++) {
    let nowCom = arr[i][0];
    let connectCom = arr[i][1];
    graph[connectCom].push(nowCom);
    graph[nowCom].push(connectCom);
}

let visited = new Array(N + 1).fill(false);

function dfs(nowCom) {
    for (let item of graph[nowCom]) {
        if (visited[item]) continue;
        visited[item] = true;
        dfs(item);
    }
}
dfs(1);

const trueCount = visited.filter((value) => value === true).length;
if (trueCount === 0) {
    console.log(0);
} else {
    console.log(trueCount - 1);
}
