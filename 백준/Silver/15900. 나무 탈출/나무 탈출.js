const fs = require('fs');

let treeInfo = fs.readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((a) => a.split(' ').map(Number));

let N = treeInfo.shift()[0];
let tree = Array.from({ length: N + 1 }, () => []);

for (let item of treeInfo) {
    let startNode = item[0];
    let endNode = item[1];

    tree[startNode].push(endNode);
    tree[endNode].push(startNode);
}

let distances = new Array(N + 1).fill(-1);

function dfs(node, parent, distance) {
    distances[node] = distance;
    for (let child of tree[node]) {
        if (child !== parent) {
            dfs(child, node, distance + 1);
        }
    }
}

// 루트(노드 1)에서 DFS 시작
dfs(1, -1, 0);

// 거리가 홀수인 리프 노드 개수 세기
let oddLeafCount = 0;
for (let i = 2; i <= N; i++) {
    if (tree[i].length === 1 && distances[i] % 2 === 1) {
        oddLeafCount++;
    }
}

if (oddLeafCount % 2 === 1) {
    console.log('Yes');
} else {
    console.log('No');
}