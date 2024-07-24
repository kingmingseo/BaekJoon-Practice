let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);
arr = arr.map(Number);
arr = arr.sort((a, b) => a - b);
let dict = {};
for (let item of arr) {
    if (!dict[item]) {
        dict[item] = 1;
    } else {
        dict[item] += 1;
    }
}

let max = 0;
for (let item of arr) {
    if (max < dict[item]) {
        max = dict[item];
    }
}
let candidate = [];
for (let item of arr) {
    if (dict[item] === max) {
        candidate.push(item);
    }
}
candidate = new Set(candidate)
candidate = Array.from(candidate)
candidate.sort((a, b) => a - b);

Math.round(arr.reduce((a, b) => a + b) / N) === -0
    ? console.log(0)
    : console.log(Math.round(arr.reduce((a, b) => a + b) / N));
console.log(arr[Math.floor(N / 2)]);
candidate.length > 1 ? console.log(candidate[1]) : console.log(candidate[0]);
console.log(arr[arr.length - 1] - arr[0]);
