let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let computer = Number(input[0])
let pairCount = Number(input[1])
let data = Array.from({ length: computer + 1 }, () => [])

//원하는 데이터 구조 만들기
for (let i = 2; i < input.length; i++) {
    let temp = input[i].split(' ').map(Number)
    data[temp[0]].push(temp[1])
    data[temp[1]].push(temp[0])
}


let visited = Array(computer + 1).fill(0);
function dfs(graph, v, visited) {
    visited[v] = 1
    for (let i of graph[v]) {
        if (visited[i] === 0) {
            dfs(graph, i, visited)
        }
    }
}

dfs(data, 1, visited)

let total = visited.reduce((acc, cur) => {
    return acc + cur
}, 0)

console.log(total - 1)