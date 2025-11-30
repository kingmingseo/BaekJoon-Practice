let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number)
let N = input[0]
let data = input.slice(1)
data.unshift(0)

function dfs(start, nowNode, visited) {
    let nextNode = data[nowNode]
    if (!visited[nextNode]) {
        visited[nextNode] = true
        dfs(start, nextNode, visited)
    }
    else if (start === nextNode) {
        ans.push(start)
        return
    }
}


var ans = []

for (let i = 1; i <= N; i++) {
    let visited = Array(N + 1).fill(false)
    visited[i] = true
    dfs(i, i, visited)
}

ans.sort((a, b) => a - b)
console.log(ans.length)
console.log(ans.join('\n'))