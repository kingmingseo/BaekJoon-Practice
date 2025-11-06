let [N, K] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
N = Number(N)
K = Number(K)

let visited = Array(100000).fill(false)
let queue = []
let total = 0
function bfs(v, target) {
    queue.push([v, 0])
    visited[v] = true

    while (queue.length !== 0) {
        let [now, dist] = queue.shift()
        if (now === target) {
            return dist
        }

        let nextPositions = [now - 1, now + 1, now * 2];

        for (let next of nextPositions) {
            if (next >= 0 && next <= 100000 && !visited[next]) {
                queue.push([next, dist + 1]);
                visited[next] = true;
            }
        }

    }

}




console.log(bfs(N, K))
