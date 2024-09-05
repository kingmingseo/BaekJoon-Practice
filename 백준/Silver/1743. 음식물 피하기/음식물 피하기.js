let input = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((a) => a.split(' ').map(Number));
let [N, M, K] = input[0];
let graph = [];
let visited = [];

for (let i = 0; i < N; i++) {
    visited.push(new Array(M).fill(false));
    graph.push(new Array(M).fill('.'));
}

for (let i = 1; i < input.length; i++) {
    let [row, col] = input[i];
    graph[row - 1][col - 1] = '#';
}

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }

    peek() {
        return this.items[this.headIndex];
    }

    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

function bfs(graph, visited, row, col) {
    let queue = new Queue();
    visited[row][col] = true;
    queue.enqueue([row, col]);
    let count = 1;
    while (queue.getLength() !== 0) {
        let [row, col] = queue.dequeue();
        for (let i = 0; i < 4; i++) {
            let nextRow = row + dx[i];
            let nextCol = col + dy[i];

            if (nextRow >= 0 && nextRow < N && nextCol >= 0 && nextCol < M) {
                // 범위 안에 들어왔을때
                if (!visited[nextRow][nextCol] && graph[nextRow][nextCol] === '#') {
                    visited[nextRow][nextCol] = true;
                    queue.enqueue([nextRow, nextCol]);
                    count += 1;
                  
                }
            }
        }
    }

    return count;
}
let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (!visited[i][j] && graph[i][j] === '#') {
            let temp = bfs(graph, visited, i, j);
            answer = Math.max(temp, answer);
        }
    }
}
console.log(answer);
