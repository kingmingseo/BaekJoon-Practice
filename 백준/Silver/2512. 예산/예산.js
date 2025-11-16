let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let N = Number(input[0])
let data = input[1].split(' ').map(Number)
let budget = Number(input[2])
let end = Math.max(...data)
let start = 1
let result = 0

while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let total = 0
    for (let x of data) {
        total += Math.min(x, mid)
    }

    if (total > budget) {
        end = mid - 1
    }
    else {
        result = mid
        start = mid + 1
    }
}

console.log(result)