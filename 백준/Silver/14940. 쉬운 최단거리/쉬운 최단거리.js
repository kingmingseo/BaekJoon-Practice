let input = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((a) => a.replace('\r', ''));
var [maxRow, maxCol] = input.shift().split(' ').map(Number);
let graph = [];
for (let item of input) {
    graph.push(item.split(' '));
}

let visited = [];
let walkGraph = [];
for (let i = 0; i < maxRow; i++) {
    visited.push(new Array(maxCol).fill(false));
    walkGraph.push(new Array(maxCol).fill(-1));
}

let dy = [0, 0, 1, -1];
let dx = [1, -1, 0, 0];

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
        const deleteItem = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;

        return deleteItem;
    }

    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

function bfs(visited, row, col, graph) {
    let queue = new Queue();
    graph[row][col] = 0;
    walkGraph[row][col] = 0;
    queue.enqueue([row, col]);
    visited[row][col] = true;

    while (queue.getLength() !== 0) {
        let [nowRow, nowCol] = queue.dequeue();
        for (let i = 0; i < 4; i++) {
            let nextRow = nowRow + dy[i];
            let nextCol = nowCol + dx[i];

            if (nextRow >= 0 && nextRow < maxRow && nextCol >= 0 && nextCol < maxCol && graph[nextRow][nextCol] == 1 ) {
                if (!visited[nextRow][nextCol]) {
                    visited[nextRow][nextCol] = true;
                    queue.enqueue([nextRow, nextCol]);
                    walkGraph[nextRow][nextCol] = walkGraph[nowRow][nowCol] + 1;
                }
            }
        }
    }
}

let [startRow,startCol] = [0,0]
let wallPoint = []
for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
        if (graph[i][j] == 2) {
            [startRow,startCol] = [i, j];
        }

        else if(graph[i][j] == 0){
            wallPoint.push([i,j])
        }
    }
}


bfs(visited, startRow, startCol, graph);

for(let [x,y] of wallPoint){
    walkGraph[x][y] = 0
}
for (let item of walkGraph) {
    console.log(item.join(' '));
}
