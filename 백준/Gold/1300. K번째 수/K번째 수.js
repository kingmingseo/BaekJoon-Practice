let [N, K] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number)

let start = 1;
let end = 10 ** 10

let result = 0

while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let total = 0
    for (let i = 1; i <= N; i++) {
        total += Math.min(Math.floor(mid / i), N)
    }

    //다 합친 값이 K보다 커버리면 범위를 좌측으로
    if (total >= K) {
        result = mid
        end = mid - 1
    }
    else {
        start = mid + 1
    }
}

console.log(result)