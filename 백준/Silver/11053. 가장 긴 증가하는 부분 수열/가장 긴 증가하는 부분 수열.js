let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(data => data.replace('\r', '').split(' ').map(Number))
let data = input[1]
let dp = [0]

function lowerBound(arr, left, right, target) {
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid
        }
    
    }
    return left
}


for (let item of data) {
    if (dp[dp.length - 1] < item) {
        dp.push(item)
    }
    else {
        dp[lowerBound(dp, 0, data.length - 1, item)] = item
    }
}

console.log(dp.length-1)

