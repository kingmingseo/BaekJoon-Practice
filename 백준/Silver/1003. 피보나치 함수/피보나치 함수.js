let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
N = Number(N)
arr = arr.map(Number)
let maxDptableIndex = Math.max(...arr)
let dpTable = Array(0).fill(40)
dpTable[0] = [1, 0]
dpTable[1] = [0, 1]

for (let i = 2; i <= maxDptableIndex; i++) {
    dpTable[i] = [dpTable[i - 2][0] + dpTable[i - 1][0], dpTable[i - 2][1] + dpTable[i - 1][1]]
}

for (let item of arr) {
    console.log(dpTable[item].join(' '))
}