let index = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number)
let data = index.slice(1)
let N = index[0]
// 방향 그래프를 만들기

let graph = Array.from({ length: N + 1 }, () => [])

for (let i = 0; i < N; i++) {
    graph[i + 1].push(data[i])
}


var ans = []
function dfs(start, nowNode, visited) {
    let nextNode = graph[nowNode][0]
    if (!visited[nextNode]) {
        visited[nextNode] = true
        dfs(start, nextNode, visited)
    }
    else if (start === nextNode){
        ans.push(start)
    }

}


for (let i = 1; i <= N; i++) {
    let visited = Array(N + 1).fill(false)
    visited[i] = true
    dfs(i, i, visited)
}

function compare(a, b) {
    return a - b
}

ans.sort(compare)
console.log(ans.length)
console.log(ans.join('\n'))

