const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(line => line.trim()).map(string => Number(string))
let dataSet = new Set()

for (let i = 0; i < input.length; i++) {
  dataSet.add(input[i] % 42)
}

console.log(dataSet.size)