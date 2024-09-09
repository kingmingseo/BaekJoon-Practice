let input = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((a) => a.split(' ').map(Number));
let line = 0;

// 배열을 사용하는 Queue 클래스
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();  // 배열에서 첫 요소를 제거하고 반환
    }

    getLength() {
        return this.items.length;
    }
}

while (true) {
    let answer = 0;
    let maxRow = input[line][1];
    let maxCol = input[line][0];
    if (maxRow === 0) break;

    let graph = [];
    let visited = [];

    // 그래프 만들기
    for (let i = 0; i < maxRow; i++) {
        line += 1;
        graph.push(input[line]);
        visited.push(new Array(maxCol).fill(false));
    }
    line += 1;

    // BFS 탐색으로 섬 개수 세기
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (graph[i][j] === 1 && !visited[i][j]) {
                bfs(graph, i, j, visited, maxRow, maxCol);
                answer += 1;
            }
        }
    }
    console.log(answer);
}

function bfs(graph, row, col, visited, maxRow, maxCol) {
    let queue = new Queue();
    visited[row][col] = true;
    queue.enqueue([row, col]);

    const dx = [1, -1, 0, 0, 1, -1, 1, -1];
    const dy = [0, 0, 1, -1, 1, - 1, -1, 1];

    while (queue.getLength() !== 0) {
        [row, col] = queue.dequeue();

        for (let i = 0; i < 8; i++) {
            let nextRow = row + dx[i];
            let nextCol = col + dy[i];

            if (nextRow >= 0 && nextRow < maxRow && nextCol >= 0 && nextCol < maxCol && !visited[nextRow][nextCol]) {
                if (graph[nextRow][nextCol] === 1) {
                    visited[nextRow][nextCol] = true;
                    queue.enqueue([nextRow, nextCol]);
                }
            }
        }
    }
}
