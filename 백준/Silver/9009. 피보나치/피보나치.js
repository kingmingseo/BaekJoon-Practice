
let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

input = input.slice(1).map(Number)

let data = [0, 1, 1]

for (let i = 3; i < 50; i++) {
    data[i] = data[i - 1] + data[i - 2]
}


for (let nowNumber of input) {
    let ans = []
    let i = 0
    while (nowNumber !== 0) {
        if (data[i] > nowNumber) {
            nowNumber -= data[i - 1]
            ans.push(data[i - 1])
            i = 0
        }
        else if (data[i] === nowNumber) {
            nowNumber -= data[i]
            ans.push(data[i])
            i = 0
        }
        else {
            i++
        }
    }
    console.log(ans.reverse().join(' '))
}
