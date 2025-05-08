const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(line => line.trim())

const [a, b] = input.map(num => num.split(' ').map(str => Number(str)))

let maxScore = Math.max(...b)

let newScoreSum = b.reduce((a, b) =>  a + (b / maxScore * 100),0)

console.log((newScoreSum / a))