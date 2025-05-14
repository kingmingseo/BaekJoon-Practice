let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let data = input.slice(1)
data = data.map(i => i.split(' ').map(Number))

function compare(a, b) {
  if (a[1]===b[1]){
    return a[0]-b[0]
  }
  return a[1] - b[1]
}

data.sort(compare)
let minEndTime = -Infinity;
let answer = 0

for (let i = 0; i < data.length; i++) {
  let nowStartTime = data[i][0]
  if (nowStartTime >= minEndTime) {
    answer += 1
    minEndTime = data[i][1]
  }
}

console.log(answer)