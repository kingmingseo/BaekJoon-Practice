let [N, M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

let arr = new Array(M + 1).fill(true);
arr[0] = false;
arr[1] = false;

for (let i = 2; i <= Math.sqrt(M); i++) {
    if (!arr[i]) {
        continue;
    }
    for (let j = i * 2; j <= M; j += i) {
        arr[j] = false;
    }
}

let result = [];
for (let i = N; i <= M; i++) {
    if (arr[i]) {
        result.push(i);
    }
}

console.log(result.join('\n').trim());
