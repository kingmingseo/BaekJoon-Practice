let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let N = Number(input[0])
let data = input[1].split(' ')
let visited = Array(10).fill(false)
let maxNum = -1
let maxStr = ''
let minNum = Infinity
let minStr = ''


function dfs(depth, beforeNum, result) {
    if (result.length === N + 1) {
        let tempNum = result.join('')
        let selectNum = Number(tempNum)
        if (selectNum > maxNum) {
            maxNum = selectNum
            maxStr = tempNum
        } 
        if (selectNum < minNum) {
            minNum = selectNum
            minStr = tempNum
        }
    }

    for (let i = 0; i <= 9; i++) {
        if (visited[i]) continue
        if (data[depth - 1] === '<') {
            if (beforeNum < i) {
                visited[i] = true;
                result.push(i)
                dfs(depth + 1, i, result)
                result.pop()
                visited[i] = false
            }

        }
        else {
            if (beforeNum > i) {
                result.push(i)
                visited[i] = true;
                dfs(depth + 1, i, result)
                result.pop()
                visited[i] = false
            }

        }
    }
}

for (let i = 0; i <= 9; i++) {
    visited = Array(10).fill(false)
    visited[i] = true
    dfs(1, i, [i])
    visited[i] = false
}

console.log(maxStr)
console.log(minStr)


