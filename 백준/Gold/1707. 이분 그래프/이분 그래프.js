let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(data => data.split(' ').map(Number));

class Queue {
  constructor() {
    this.headIndex = 0;
    this.tailIndex = 0;
    this.items = {};
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
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let allTestCase = input.slice(1);
let nowRow = 0;

while (nowRow < allTestCase.length) {
  let [V, E] = allTestCase[nowRow];
  nowRow++;

  let graph = Array.from({ length: V + 1 }, () => []);
  for (let i = 0; i < E; i++) {
    let [u, v] = allTestCase[nowRow];
    nowRow++;
    graph[u].push(v);
    graph[v].push(u);
  }

  console.log(checkBipartite(V, graph) ? "YES" : "NO");
}



function bfs(start, graph, visited, color) {
  let queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;
  color[start] = 0; // 시작 색 0

  while (queue.getLength() > 0) {
    let now = queue.dequeue();

    for (let next of graph[now]) {
      if (!visited[next]) {
        visited[next] = true;
        color[next] = 1 - color[now]; // 반대 색 칠하기
        queue.enqueue(next);
      } else {
        // 이미 방문했으면 색 비교
        if (color[next] === color[now]) {
          return false;
        }
      }
    }
  }
  return true;
}


function checkBipartite(V, graph) {
  let visited = Array(V + 1).fill(false);
  let color = Array(V + 1).fill(-1); // -1 = 미색칠

  for (let i = 1; i <= V; i++) {
    if (!visited[i]) {
      if (!bfs(i, graph, visited, color)) {
        return false;
      }
    }
  }
  return true;
}
