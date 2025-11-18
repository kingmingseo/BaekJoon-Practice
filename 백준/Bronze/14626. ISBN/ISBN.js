let input = require('fs').readFileSync('dev/stdin').toString().trim()
let total = 0
let temp = 0
let ans = 0




for (let i = 0; i < 13; i++) {
    if (input[i] === '*') {
        temp = i + 1
        continue
    }
    if (i % 2 === 0) {
        total += Number(input[i]) * 1
    }
    else {
        total += Number(input[i]) * 3
    }
}

let multiply = temp % 2 === 0 ? 3 : 1
let goal = total % 10
for (let i = 0; i <= 9; i++) {
    if ((goal + multiply * i) % 10 === 0) {
        ans = i
        break
    }
}


console.log(ans)

