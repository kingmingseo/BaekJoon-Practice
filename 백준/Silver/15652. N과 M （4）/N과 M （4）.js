let [N, M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number)
let ans = ''
function dfs(result, depth) {
    if (depth === M) {
        ans += result.join(' ')
        ans += '\n'
        return
    }

    for (let i = 1; i <= N; i++) {
        if (result[result.length - 1] > i) continue

        result.push(i)
        dfs(result, depth + 1)
        result.pop()
    }
}

dfs([], 0)
console.log(ans.trim())