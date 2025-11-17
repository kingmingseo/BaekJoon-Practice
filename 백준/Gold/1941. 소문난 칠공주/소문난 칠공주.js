let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(a => a.replace('\r', ''))

let finalAns = 0

function checkNear(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) === 1
}

function countS(combination) {
    let ans = 0
    for (let [x, y] of combination) {
        if (input[x][y] === 'S') ans++
    }
    return ans
}

// 연결성 검증
function isConnected(combination) {
    if (combination.length === 0) return false
    
    let visited = new Set()
    
    function dfs(x, y) {
        let key = `${x},${y}`
        if (visited.has(key)) return
        
        visited.add(key)
        
        // 인접한 좌표 확인
        for (let [nx, ny] of combination) {
            if (checkNear([x, y], [nx, ny])) {
                dfs(nx, ny)
            }
        }
    }
    
    dfs(combination[0][0], combination[0][1])
    return visited.size === combination.length
}

// 모든 좌표 생성
let positions = []
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        positions.push([i, j])
    }
}

// 25개 중 7개 선택하면서 바로 검증
function comb(arr, depth, start, current) {
    if (depth === 7) {
        if (countS(current) >= 4 && isConnected(current)) {
            finalAns++
        }
        return
    }
    
    for (let i = start; i < arr.length; i++) {
        current.push(arr[i])
        comb(arr, depth + 1, i + 1, current)
        current.pop()
    }
}

comb(positions, 0, 0, [])
console.log(finalAns)