let graph = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((a) => a.split(' ').map(Number));

let [maxRow, maxCol] = graph.shift();
let visited = [];
for (let i = 0; i < maxRow; i++) {
    visited.push(new Array(maxCol).fill(false));
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
        let deleteItem = this.items[this.headIndex];
        delete this.items[this.headIndex]
        this.headIndex++;
        return deleteItem;
    }

    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

function bfs(graph, visited, row, col) {
    visited[row][col] = true;
    let queue = new Queue();
    queue.enqueue([row, col]);
    let size = 1;

    while (queue.getLength() !== 0) {
        [row, col] = queue.dequeue();
        for (let i = 0; i < 4; i++) {
            let nextRow = row + dx[i];
            let nextCol = col + dy[i];

            if (nextRow >= 0 && nextRow < maxRow && nextCol >= 0 && nextCol < maxCol && !visited[nextRow][nextCol]) {
                visited[nextRow][nextCol] = true;
                if (graph[nextRow][nextCol] === 1) {
                    queue.enqueue([nextRow,nextCol]);
                    size ++;
                }
            }
        }
    }

    return size;
}

let pictureCount = 0;
let maxSize = 0;
for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxCol; j++) {
        if (!visited[i][j] && graph[i][j] === 1) {
            pictureCount += 1;
            maxSize = Math.max(bfs(graph, visited, i, j),maxSize);
        }
    }
}

console.log(pictureCount);
console.log(maxSize)
