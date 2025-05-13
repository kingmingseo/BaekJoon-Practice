let input = require('fs').readFileSync('dev/stdin').toString().trim()
let answer = 0

while (input >= 3) {
  if (input % 5 === 0) {
    answer += Math.floor(input / 5)
    input %= 5
    break;
  }
  else {
    input -= 3
    answer += 1
  }



}

if (input > 0) {
  console.log(-1)
}
else {
  console.log(answer)
}
