let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(data => data.replace('\r', ''))
let N = Number(input[0])
let data = input.slice(1)
let colorMissing = []

//색약이 보는 그림 만들기
for (let i = 0; i < N; i++) {
    let tempStr = ''
    for (let j = 0; j < N; j++) {
        if (data[i][j] === 'G' || data[i][j] === 'R') {
            tempStr += 'R'
        }
        else {
            tempStr += 'B'
        }
    }
    colorMissing.push(tempStr)
}

let visited = Array.from({ length: N }, () => Array(N).fill(false))
let visited2 = Array.from({ length: N }, () => Array(N).fill(false))

//결국에는 한칸씩 방문하면서 들어갈수 있는 구역이 몇가지인지 찾아야함 
//방문 안한곳을 최초방문할때 그 방문한 곳의 색상을 기억해서 그 색상만 마구마구 방문하면 하나의 그룹을 찾을 수있다!
let dx = [1, -1, 0, 0]
let dy = [0, 0, 1, -1]

function dfs(target, data, x, y) {

    for (let i = 0; i < 4; i++) {
        let nextX = x + dx[i]
        let nextY = y + dy[i]

        if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue
        if (visited[nextX][nextY]) continue
        if (data[nextX][nextY] !== target) continue

        visited[nextX][nextY] = true
        dfs(target, data, nextX, nextY)

    }

}

function visiting(data, visited) {
    let ans = 0
    //그림 한부분식 방문해보기
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (visited[i][j]) continue
            visited[i][j] = true
            ans++
            dfs(data[i][j], data, i, j)
        }
    }
    return ans
}
let ans = []
ans.push(visiting(data, visited))
visited = Array.from({ length: N }, () => Array(N).fill(false))
ans.push(visiting(colorMissing, visited))

console.log(ans.join(' '))
