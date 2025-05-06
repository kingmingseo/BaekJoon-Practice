const [a, b, c] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')

/* 3개 전부 같은 경우 */
if (a === b && b === c) {
  console.log(10000 + a * 1000)
}
/* a, b 가 같은 경우 */
else if (a === b) {
  console.log(1000 + a * 100)
}
/* b, c 가 같은 경우 */
else if (b === c) {
  console.log(1000 + b * 100)
}
/* a, c 가 같은 경우 */
else if (a === c) {
  console.log(1000 + c * 100)
}
/* 전부 다른 경우 */
else {
  console.log(Math.max(a, b, c) * 100)
}