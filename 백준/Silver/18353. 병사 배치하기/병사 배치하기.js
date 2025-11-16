let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let N = Number(input[0])
let data = input[1].split(' ').map(Number)
data.reverse()

function lowerBound(arr, start, end, target) {
    while (start < end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] < target) {
            start = mid + 1
        }
        else {
            end = mid
        }
    }
    return start
}

let ans = [0]

for (let item of data) {

    if (ans[ans.length - 1] < item) {
        ans.push(item)
    }
    else {
        ans[lowerBound(ans, 0, ans.length, item)] = item
    }
}

console.log(N - (ans.length - 1))

