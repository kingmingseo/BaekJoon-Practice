let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
arr = arr.map(Number)
let dp = Array(N).fill(0)
dp[0] = arr[0]
dp[1] = arr[0] + arr[1]
dp[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2])

for (let i = 3; i < N; i++) {
    let candidate1 = dp[i - 1]
    let candidate2 = arr[i] + dp[i - 2]
    let candidate3 = arr[i] + arr[i - 1] + dp[i - 3]

    dp[i] = Math.max(candidate1, candidate2, candidate3)
}

console.log(dp[N - 1])