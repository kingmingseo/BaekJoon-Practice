let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let data = input[1].split(' ').map(Number)

function compare(a, b) {
    return a - b
}

data.sort(compare)

let ans = 0
let temp = 0
for (let i = 0; i < data.length; i++) {
    temp += data[i]
    ans += temp

}

console.log(ans)