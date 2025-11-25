let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(data => data.replace('\r', ''))
let N = Number(input[0])
let data = input.slice(1)

let dx = [1, -1, 0, 0]
let dy = [0, 0, 1, -1]
let visited = Array.from({ length: N }, () => Array(N).fill(false))

function dfs(x, y) {
    let count = 1
    for (let i = 0; i < 4; i++) {
        let nextX = x + dx[i]
        let nextY = y + dy[i]
        if (nextX >= N || nextY >= N || nextX < 0 || nextY < 0) continue
        if (data[nextX][nextY] === '0') continue
        if (visited[nextX][nextY]) continue

        visited[nextX][nextY] = true;
        count += dfs(nextX, nextY)
    }

    return count

}

let final = []
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {

        if (data[i][j] === '0') continue
        if (visited[i][j]) continue
        visited[i][j] = true;
        var ans = [[i, j]]
        final.push(dfs(i, j))
    }
}

function compare(a, b) {
    return a - b
}
console.log(final.length)
console.log(final.sort(compare).join('\n'))

