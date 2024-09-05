let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [R, C, K] = input[0].split(' ').map(Number);

let graph = [];
for (let i = 1; i <= R; i++) {
    let temp = input[i].replace('\r', '');
    graph.push(temp);
}

let visited = [];
let selected = [];
let answer = 0;
for (let i = 0; i < R; i++) {
    visited.push(new Array(C).fill(false));
}

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

function dfs(graph, visited, row, col) {
    visited[row][col] = true;
    selected.push([row, col]);
    if (selected.length === K) {
        if (col === C - 1 && row === 0) {
            answer += 1;
            selected.pop();
            visited[row][col] = false;
            return;
        }
        selected.pop();
        visited[row][col] = false;
        return;
    }

    for (let i = 0; i < 4; i++) {
        let nextRow = row + dx[i];
        let nextCol = col + dy[i];
        if (nextRow >= 0 && nextRow < R && nextCol >= 0 && nextCol < C) {
            if (graph[nextRow][nextCol] !== 'T' && visited[nextRow][nextCol] == false) {
                dfs(graph, visited, nextRow, nextCol);
            }
        }
    }
    selected.pop();
    visited[row][col] = false;
}

dfs(graph, visited, R - 1, 0);
console.log(answer);
