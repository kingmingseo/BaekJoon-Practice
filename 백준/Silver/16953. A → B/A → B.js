let [A, B] = require('fs').readFileSync('dev/stdin').toString().split(' ').map(Number)

let answer = 1;

while (B > A) {
  let digitOne = B % 10
  if (digitOne === 1) {
    B = String(B)
    B = Number(B.slice(0, B.length - 1))
    answer += 1
  }
  else if (B % 2 === 0) {
    B = Number(B / 2)
    answer += 1
  }
  else {
    break
  }
}

if (B !== A) {
  console.log(-1)
}
else {
  console.log(answer)
}