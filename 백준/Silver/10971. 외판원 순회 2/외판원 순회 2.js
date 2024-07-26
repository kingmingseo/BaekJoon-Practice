let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let visited = new Array(N + 1).fill(false);
let selected = [];
let minValue = 1e9;
let graph = arr.map((a) => a.split(' ').map(Number));
graph.unshift([0]);
for (let i = 1; i <= N; i++) {
    graph[i].unshift(0);
}

function dfs(depth) {
    if (depth === N - 1) {
        let cur = 1;
        let totalCost = 0;

        for (let i = 2; i <= N; i++) {
            let nextNode = selected[i - 2];
            if (graph[cur][nextNode] === 0) {
                return;
            }
            totalCost += graph[cur][nextNode];
            cur = nextNode;
        }
        if (graph[cur][1] === 0) {
            return;
        }
        totalCost += graph[cur][1];
        minValue = Math.min(minValue, totalCost);
    }

    for (let i = 2; i <= N; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1);
        visited[i] = false;
        selected.pop();
    }
}
dfs(0)
console.log(minValue)