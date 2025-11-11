let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [N, total] = input[0].split(' ').map(Number)
let data = input.slice(1).map(Number)
let ans = 0
for (let i=data.length-1; i>=0; i--) {
    let coin = data[i]
    let useCoin = Math.floor(total / coin)
    ans += useCoin
    total = total - (useCoin * coin)
}

console.log(ans)