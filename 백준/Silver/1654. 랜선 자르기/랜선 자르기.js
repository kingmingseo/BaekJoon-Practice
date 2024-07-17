let [temp, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [K, N] = temp.split(' ').map(Number);
arr = arr.map(Number);
let result = 0;
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let total = 0;

    for (let x of arr) {
        total += Math.floor(x / mid);
    }

    if (total >= N) {
        result = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(result);
