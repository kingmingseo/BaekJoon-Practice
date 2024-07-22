let [N, M] = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

let one = 0;
let two = 0;
for (let i = Math.min(N, M); i > 0; i--) {
    if (N % i === 0 && M % i === 0) {
        one = i;
        break;
    }
}

console.log(one);
console.log((N*M)/one);
