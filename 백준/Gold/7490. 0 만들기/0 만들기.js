let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);
arr = arr.map(Number);
let candidate = ['+', '-', ' '];
let selected = [];
let answer = [];

function dfs(depth, top) {
    if (depth === top) {
        temp = '1';
        for (let i = 2; i < top + 2; i++) {
            temp += selected[i - 2];
            temp += `${i}`;
        }
        if (eval(temp.replaceAll(' ', '')) === 0) {
            answer.push(temp);
        }
        return;
    }
    for (let item of candidate) {
        selected.push(item);
        dfs(depth + 1, top);
        selected.pop(item);
    }
}

for (let i = 0; i < N; i++) {
    dfs(0, arr[i] - 1);
    console.log(answer.sort().join('\n')+'\n');
    answer = [];
}
