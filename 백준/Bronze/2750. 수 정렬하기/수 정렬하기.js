let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number)

const compare = (a, b) => {
    return a - b
}

input = input.slice(1, input.length)
input.sort(compare)
console.log(input.join('\n').trim())