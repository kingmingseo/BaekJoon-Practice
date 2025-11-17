let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

input = input.slice(0, input.length - 1)

let data = []
let nowData
let visited = []
for (let i = 0; i < input.length; i++) {
    let tempData = input[i].split(' ').slice(1).map(Number)

    data.push(tempData)
}

let ans = ''
function dfs(result, depth) {
    if (depth === 6) {
        ans += result.join(' ')
        ans += '\n'
        return
    }

    for (let i = 0; i < nowData.length; i++) {
        if (visited[i] || nowData[i] < result[result.length - 1]) continue
        visited[i] = true
        result.push(nowData[i])
        dfs(result, depth + 1)
        result.pop()
        visited[i] = false
    }
}

for (let item of data) {
    nowData = item
    visited = Array(nowData.length).fill(false)
    dfs([], 0)
    ans += '\n'
}
console.log(ans.trim())