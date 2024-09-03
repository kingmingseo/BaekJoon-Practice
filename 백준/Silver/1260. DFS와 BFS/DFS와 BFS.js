let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
input = input.map((a) => a.split(' ').map(Number));
let length = input[0][0] + 1;
let startNode = input[0][2];
let graph = Array.from({ length: length }, () => []);

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

for (let i = 1; i < input.length; i++) {
    let startNode = input[i][0];
    let endNode = input[i][1];
    graph[startNode].push(endNode);
    graph[endNode].push(startNode);
}

for (let i = 0; i < graph.length; i++) {
    graph[i].sort((a, b) => a - b);
}

function bfs(graph, start, visited) {
    let queue = new Queue();
    queue.enqueue(start);
    visited[start] = true;

    while (queue.getLength() != 0) {
        let nowNode = queue.dequeue();
        bfsAns += nowNode + ' ';

        for (let item of graph[nowNode]) {
            if (!visited[item]) {
                queue.enqueue(item);
                visited[item] = true;
            }
        }
    }
}

function dfs(graph, start, visited) {
    visited[start] = true;
    dfsAns += start + ' ';

    for (let item of graph[start]) {
        if (!visited[item]) {
            dfs(graph, item, visited);
        }
    }
}
let visited = new Array(length).fill(false);
dfsAns = '';
dfs(graph, startNode, visited); // 시작 노드로 DFS 실행
console.log(dfsAns.trim()); // trim()을 사용하여 출력 형식을 깔끔하게 유지

visited = new Array(length).fill(false);
bfsAns = '';
bfs(graph, startNode, visited);
console.log(bfsAns.trim());
