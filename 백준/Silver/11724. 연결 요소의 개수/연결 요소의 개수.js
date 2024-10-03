let input = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((data) => data.replace('\r', '').split(' ').map(Number));
let [N, M] = input.shift();
let graph = Array.from({ length: N + 1 }, () => []);

for (let [u, v] of input) {
    graph[u].push(v);
    graph[v].push(u);
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
        const deleteItem = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return deleteItem;
    }

    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

function dfs(visited, graph, now) {
    visited[now] = true;

    for (let item of graph[now]) {
        if (!visited[item]) {
            dfs(visited, graph, item);
        }
    }
}

let visited = new Array(N + 1).fill(false);
let answer = 0;

for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        answer++;
        dfs(visited, graph, i);
    }
}

console.log(answer);
