let [N, M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number)
let visited = Array(N + 1).fill(false)

function dfs(arr, depth) {
    if (depth === M) {

        console.log(arr.join(' '))
        return
    }

    for (let i = 1; i <= N; i++) {
        if (visited[i] || arr[arr.length - 1] > i) {
            continue
        }
        visited[i] = true
        arr.push(i)
        dfs(arr, depth + 1)
        arr.pop()
        visited[i] = false
    }
}


dfs([], 0)




