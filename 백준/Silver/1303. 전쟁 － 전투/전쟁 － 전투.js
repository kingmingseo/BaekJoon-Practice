let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i < input.length; i++) {
    graph.push(input[i].replace('\r', ''));
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

function bfs(graph, visited, row, col, team) {
    let queue = new Queue();
    visited[row][col] = true;
    let score = 0;
    if (graph[row][col] === team) {
        score += 1;
        queue.enqueue([row, col]);
    }

    while (queue.getLength() != 0) {
        [row, col] = queue.dequeue();
        //상
        if (row - 1 >= 0 && row - 1 < M && col >= 0 && col < N) {
            if (!visited[row - 1][col]) {
                visited[row - 1][col] = true;
                if (graph[row - 1][col] === team) {
                    score += 1;
                    queue.enqueue([row - 1, col]);
                }
            }
        }
        //하
        if (row + 1 >= 0 && row + 1 < M && col >= 0 && col < N) {
            if (!visited[row + 1][col]) {
                visited[row + 1][col] = true;
                if (graph[row + 1][col] === team) {
                    score += 1;
                    queue.enqueue([row + 1, col]);
                }
            }
        }
        //좌
        if (row >= 0 && row < M && col - 1 >= 0 && col - 1 < N) {
            if (!visited[row][col - 1]) {
                visited[row][col - 1] = true;
                if (graph[row][col - 1] === team) {
                    score += 1;
                    queue.enqueue([row, col - 1]);
                }
            }
        }
        //우
        if (row >= 0 && row < M && col + 1 >= 0 && col + 1 < N) {
            if (!visited[row][col + 1]) {
                visited[row][col + 1] = true;
                if (graph[row][col + 1] === team) {
                    score += 1;
                    queue.enqueue([row, col + 1]);
                }
            }
        }
    }

    return score;
}

let myTeamAns = 0;
let enemyAns = 0;

let visited = [];
for (let i = 0; i < M; i++) {
    let temp = new Array(N).fill(false);
    visited.push(temp);
}

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            let enemyScore = bfs(graph, visited, i, j, 'B');
            enemyAns += enemyScore ** 2;
        }
    }
}

visited = [];
for (let i = 0; i < M; i++) {
    let temp = new Array(N).fill(false);
    visited.push(temp);
}

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            let myTeamScore = bfs(graph, visited, i, j, 'W');
            myTeamAns += myTeamScore ** 2;
        }
    }
}

console.log(myTeamAns, enemyAns);
