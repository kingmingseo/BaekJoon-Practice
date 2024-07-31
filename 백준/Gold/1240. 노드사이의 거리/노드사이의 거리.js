const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number); // 노드의 개수(N), 쿼리의 개수(M)

// 트리 정보 입력받기
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < n; i++) {
    const [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

function dfs(x, dist) {
    if (visited[x]) return; // 각 노드는 한 번만 방문
    visited[x] = true; // 방문 처리
    distance[x] = dist;
    for (const [y, cost] of graph[x]) {
        dfs(y, dist + cost);
    }
}

for (let i = 0; i < m; i++) {
    const [x, y] = input[n + i].split(' ').map(Number);
    visited = new Array(n + 1).fill(false);
    distance = new Array(n + 1).fill(-1);
    dfs(x, 0); // 노드 X에서 출발했을 때의 모든 노드까지의 거리 계산
    console.log(distance[y]); // Y까지의 최단 거리 출력
}
