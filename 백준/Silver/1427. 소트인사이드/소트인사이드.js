let input = require('fs').readFileSync('dev/stdin').toString().trim().split('').map(Number)

function compare(a,b){
    return b-a
}

input.sort(compare)


console.log(input.join(''))