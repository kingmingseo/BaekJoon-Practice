let input = Number(require('fs').readFileSync('dev/stdin').toString().trim())

let queen = []
let ans = 0
function check(a, b) {
    for (let [x, y] of queen) {
        if (b === y) return false

        if (Math.abs(a - x) === Math.abs(b - y)) return false
    }

    return true
}

function dfs(row) {
    if (row === input) {
        ans++;
        return;
    }
    for (let i = 0; i < input; i++) {
        if (!check(row, i)) continue
        queen.push([row, i])
        dfs(row + 1)
        queen.pop()
    }
}


dfs(0)
console.log(ans)
