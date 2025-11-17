const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [R, C] = input[0].split(' ').map(Number)
const data = input.slice(1).map(a => a.replace('\r', ''))

const dx = [1, 0, -1, 0]
const dy = [0, 1, 0, -1]
const alphabetSet = new Set()

let max = 0

function dfs(curX, curY, length) {
    max = Math.max(max, length)
    
    for (let i = 0; i < 4; i++) {
        const nextX = curX + dx[i]
        const nextY = curY + dy[i]
        
        if (nextX < 0 || nextX >= R || nextY < 0 || nextY >= C) continue
        
        const nextChar = data[nextX][nextY]
        if (alphabetSet.has(nextChar)) continue
        
        alphabetSet.add(nextChar)
        dfs(nextX, nextY, length + 1)
        alphabetSet.delete(nextChar)
    }
}

alphabetSet.add(data[0][0])
dfs(0, 0, 1)

console.log(max)