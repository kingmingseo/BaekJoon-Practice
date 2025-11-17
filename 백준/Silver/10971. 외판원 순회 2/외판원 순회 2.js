let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let N = Number(input[0])
let data = input.slice(1).map(data => data.split(' ').map(Number))
let visited = Array(N + 1).fill(false)
let ans = Infinity

function dfs(result, depth) {

    if (depth === N - 1) {
        let curNode = 0;
        let total = 0;
        for (let nextNode of result) {
            if (data[curNode][nextNode] === 0) return
            else {
                total += data[curNode][nextNode]
                curNode = nextNode
            }
        }
        if (data[curNode][0] !== 0) {
            total += data[curNode][0]
        }
        else {
            return
        }

        if (ans > total) {
            ans = total
        }


        return

    }

    for (let i = 1; i < N; i++) {
        if (visited[i]) continue
        visited[i] = true
        result.push(i)
        dfs(result, depth + 1)
        result.pop()
        visited[i] = false
    }

}

dfs([], 0)

console.log(ans)