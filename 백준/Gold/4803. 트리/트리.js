let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(data => data.replace('\r', '').split(' ').map(Number))
let nowRow = 0;
let testNum = 1

while (nowRow < input.length - 1) {
    let [n, m] = input[nowRow]

    var graph = Array.from({ length: n + 1 }, () => [])
    var visited = Array(n + 1).fill(false)
    nowRow++
    // 그래프 만들기
    for (let i = 0; i < m; i++) {
        let [startNode, endNode] = input[nowRow]

        graph[startNode].push(endNode)
        graph[endNode].push(startNode)
        nowRow++
    }


    //방문하기

    let treeCnt = 0
    for (let i = 1; i <= n; i++) {
        if (visited[i]) continue
        visited[i] = true

        if (dfs(0, i)) {
            treeCnt++
        }


    }

    if (treeCnt === 0) {
        console.log(`Case ${testNum}: No trees.`)
    }
    else if (treeCnt === 1) {
        console.log(`Case ${testNum}: There is one tree.`)
    }
    else {
        console.log(`Case ${testNum}: A forest of ${treeCnt} trees.`)
    }
    testNum++

}


function dfs(prevNode, nowNode) {
    for (let nextNode of graph[nowNode]) {
        if (nextNode === prevNode) continue
        if (visited[nextNode]) return false
        visited[nextNode] = true
        if (!dfs(nowNode, nextNode)) return false
    }

    return true
}