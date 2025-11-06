let [N, data] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

data = data.split('').map(Number)

console.log(data.reduce((acc, cur) => {
    return acc + cur
}, 0))
