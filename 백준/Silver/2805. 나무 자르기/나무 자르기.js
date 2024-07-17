let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
    let total = 0;
    let mid = Math.floor((start + end) / 2);
    for (let x of arr) {
        if (x < mid) {
            continue;
        }
        total += x - mid;
    }
    if (total < M) {
        end = mid - 1;
    } else {
        result = mid;
        start = mid + 1;
    }
}

console.log(result);
