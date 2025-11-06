let [N, K] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
N = Number(N)
K = Number(K)

let visited = Array(100001).fill(false)
let queue = []

function bfs(start, target) {
    queue.push([start, 0])
    visited[start] = true

    while (queue.length !== 0) {
        let [now, dist] = queue.shift()

        if (now === target) {
            return dist
        }

        let nextPosition = [now + 1, now - 1, now * 2]

        for (let next of nextPosition) {
            if (next >= 0 && next <= 100000 && visited[next] === false) {
                queue.push([next, dist + 1])
                visited[next] = true
            }

        }

    }
}

console.log(bfs(N, K))