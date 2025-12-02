let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(data => data.replace('\r', ''))
let [N, M] = input[0].split(' ').map(Number)
let data = input.slice(1).map(data => data.split(' ').map(Number))

let safeArea = []
let virusArea = []
//벽을 세울수 있는 위치 그리고 바이러스 위치 파악하기
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (data[i][j] === 0) {
            safeArea.push([i, j])
        }
        else if (data[i][j] === 2) {
            virusArea.push([i, j])
        }
    }
}

let wallWay = []
//벽 세울 수 있는 경우의 수 만들기 
function dfs(result, depth, index) {
    if (depth === 3) {
        wallWay.push([...result])
        return
    }

    for (let i = index; i < safeArea.length; i++) {
        result.push(safeArea[i])
        dfs(result, depth + 1, i + 1)
        result.pop()
    }
}

dfs([], 0, 0)


let dx = [1, -1, 0, 0]
let dy = [0, 0, 1, -1]

//바이러스 퍼뜨리기
function virusMove(x, y, graph, visited) {

    for (let i = 0; i < 4; i++) {
        let nextX = x + dx[i]
        let nextY = y + dy[i]

        if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue
        if (visited[nextX][nextY]) continue
        if (graph[nextX][nextY] === 1 || graph[nextX][nextY] === 2) continue

        graph[nextX][nextY] = 1
        visited[nextX][nextY] = true
        virusMove(nextX, nextY, graph, visited)
    }

}

let safeAreaMax = 0
//벽 세우고 바이러스 퍼뜨리기
for (let item of wallWay) {
    let graph = JSON.parse(JSON.stringify(data))

    //벽 세우기 
    for (let wall of item) {
        let [x, y] = wall
        graph[x][y] = 1
    }

    //바이러스 퍼뜨리기
    for (let virus of virusArea) {
        let [x, y] = virus
        let visited = Array.from({ length: N }, () => Array(M).fill(false))

        virusMove(x, y, graph, visited)
    }

    let tempSafeArea = 0

    //순회하면서 안전영역세기
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 0) {
                tempSafeArea++
            }
        }
    }

    safeAreaMax = Math.max(safeAreaMax, tempSafeArea)

}
console.log(safeAreaMax)