let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let N = Number(input[0])
let data = input.slice(1)
data = data.map(a => a.split(' ').map(Number))
let dp = Array.from({ length: N }, () => Array(N).fill(0))
dp[0][0] = data[0][0]



//첫번째 for문의 의미 = 삼각형 현재 층
for (let i = 0; i < data.length-1; i++) {
    for (let j = 0; j < data[i].length; j++) {
        for (let k = j; k < j + 2; k++) {
            let candidate = dp[i][j] + data[i + 1][k]
            dp[i + 1][k] = Math.max(candidate, dp[i + 1][k])
        }
    }

}


//현재 층 도착시 다음층의 현재 i 그리고 다음층의 현재 i + 1 값 비교해서 큰값 넣으면서 dp테이블 만들기

console.log(Math.max(...dp[N-1]))