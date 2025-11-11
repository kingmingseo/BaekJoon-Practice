let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let K = input[0].split(' ').map(Number)[1]
let data = input[1].split(' ').map(Number)

function compare(a, b) {
    return a - b
}

data.sort(compare)
console.log(data[K-1])