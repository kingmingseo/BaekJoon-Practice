let [N, M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
let arr = new Array(N).fill().map((v, i) => i + 1);
let selected = [];
let answer = '';
let visited = new Array(N).fill(false);

function dfs(depth, start) {
    if (depth === M) {
        for (let item of selected) {
            answer += `${arr[item]} `;
        }
        answer += '\n';
        return;
    }
    for (let i = start; i < N; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1, i+1);
        visited[i] = false;
        selected.pop();
    }
}

dfs(0, 0);
console.log(answer.trim());
