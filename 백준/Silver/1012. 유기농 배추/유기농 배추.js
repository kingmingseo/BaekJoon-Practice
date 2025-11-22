const { join } = require('path');

let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(data => data.replace('\r', '')).map(data => data.split(' ').map(Number))
let N = input[0][0]
let nowRow = 1;


for (let i = 0; i < N; i++) {

    //각 테스트 케이스를 위해서 그래프를 만들기 
    let [col, row, loopLimit] = input[nowRow]
    let loopCount = 0
    let ans = 0
    let graph = Array.from({ length: row }, () => Array(col).fill(0))
    var visited = Array.from({ length: row }, () => Array(col).fill(false))
    while (loopCount < loopLimit) {
        nowRow += 1

        let [col, row] = input[nowRow]

        graph[row][col] = 1


        loopCount += 1
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (visited[i][j]) continue
            if (graph[i][j] === 0) continue
            visited[i][j] = true
            ans++
            dfs(visited, i, j, col, row, graph)

        }
    }

    console.log(ans)
    nowRow += 1
}


function dfs(visited, nowRow, nowCol, col, row, graph) {
    let dx = [1, -1, 0, 0]
    let dy = [0, 0, 1, -1]
    for (let i = 0; i < 4; i++) {
        let nextCol = nowCol + dx[i]
        let nextRow = nowRow + dy[i]
        if (nextRow < 0 || nextCol < 0 || nextRow >= row || nextCol >= col) continue
        if (visited[nextRow][nextCol]) continue
        if (graph[nextRow][nextCol] === 0) continue
        visited[nextRow][nextCol] = true
        dfs(visited, nextRow, nextCol, col, row, graph)
    }
}