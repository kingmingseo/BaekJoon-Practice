let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(data => data.replace('\r', ''))
input = input.map(data => data.split(' ').map(Number))

let nowRow = 0;
let testCase = 1
while (nowRow < input.length - 1) {
    let [n, m] = input[nowRow]
    nowRow++

    //그래프 만들기
    let graph = Array.from({ length: n + 1 }, () => [])
    let testCaseRow = 0;
    while (testCaseRow < m) {
        let [startNode, endNode] = input[nowRow]

        graph[startNode].push(endNode)
        graph[endNode].push(startNode)
        nowRow++
        testCaseRow++
    }

    let treeCnt = 0
    let visited = Array(n + 1).fill(false)
    for (let i = 1; i <= n; i++) {
        if (visited[i]) continue
        visited[i] = true
        var hasCycle = false
        dfs(graph, i, 0, visited)
        if (!hasCycle) treeCnt++
    }


    if (treeCnt === 0) {
        console.log(`Case ${testCase}: No trees.`)
    }
    else if (treeCnt === 1) {
        console.log(`Case ${testCase}: There is one tree.`)
    }
    else {
        console.log(`Case ${testCase}: A forest of ${treeCnt} trees.`)
    }
    testCase++


}


function dfs(graph, nowNode, prevNode, visited) {
    for (let nextNode of graph[nowNode]) {
        if (prevNode === nextNode) continue
        if (visited[nextNode]) {
            hasCycle = true
            break
        }
        visited[nextNode] = true
        dfs(graph, nextNode, nowNode, visited)
    }


}
