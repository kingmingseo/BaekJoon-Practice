const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(line => line.trim())
let transformData = input.map(num => Number(num))
let candidateMaxVal = -Infinity
let candidateMaxValIdx = 0
for (let i = 0; i < transformData.length; i++) {
  if (candidateMaxVal < transformData[i]) {
    candidateMaxVal = transformData[i]
    candidateMaxValIdx = i
  }
}

console.log(candidateMaxVal)
console.log(candidateMaxValIdx+1)