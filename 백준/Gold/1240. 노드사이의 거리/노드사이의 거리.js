let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(data => data.replace('\r', '').split(' ').map(Number))
let [N, M] = input[0]

let graph = Array.from({ length: N + 1 }, () => [])
let distance = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0))
var visited
var result

//그래프 만들기 
for (let i = 1; i < N; i++) {
    let startNode = input[i][0]
    let endNode = input[i][1]
    let dist = input[i][2]

    graph[startNode].push(endNode)
    graph[endNode].push(startNode)
    distance[startNode][endNode] = dist
    distance[endNode][startNode] = dist
}

function dfs(startNode, destination, result, length) {
    if (destination === startNode) {
        result.push(length)
        return
    }

    for (let nextNode of graph[startNode]) {
        if (visited[nextNode]) continue
        visited[nextNode] = true
        length = length + distance[startNode][nextNode]
        dfs(nextNode, destination, result, length)
        length = length - distance[startNode][nextNode]
    }
}


for (let i = N; i < N + M; i++) {
    let startNode = input[i][0]
    let destination = input[i][1]
    visited = Array(N + 1).fill(false)
    visited[startNode] = true
    result = []
    dfs(startNode, destination, result, 0)
    console.log(Number(result[0]))
}