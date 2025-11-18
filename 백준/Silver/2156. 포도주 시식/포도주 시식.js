let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
arr = arr.map(Number)

N = Number(N)
let d = new Array(N).fill(0)

d[0] = arr[0]
d[1] = arr[1] + arr[0]
d[2] = Math.max(arr[0] + arr[2], arr[0] + arr[1], arr[1] + arr[2])

for (let i = 3; i < N; i++) {
    d[i] = d[i - 1]
    d[i] = Math.max(d[i], arr[i] + d[i - 2])
    d[i] = Math.max(d[i], arr[i - 1] + d[i - 3] + arr[i])

}

console.log(d[N - 1])