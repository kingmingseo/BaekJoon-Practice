const [input, ...data] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [N, K] = input.split(' ').map(Number)

/* 동전 가치 데이터를 가장 큰 것 부터 한 번씩 순회하면서 나눠봐야함 */
/* 나눈 몫을 기록해야하고 나머지에 대해서 또 나눗셈을 수행해야함 (0이 될때 까지) */

let result = K;
let count = 0;
for (let i = N - 1; i >= 0; i--) {
  let nowCoinValue = data[i]
  let needCoin = Math.floor(result / nowCoinValue);
  count += needCoin
  result = result - (nowCoinValue * needCoin)
}

console.log(count)