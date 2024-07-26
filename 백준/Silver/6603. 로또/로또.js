let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let data = [];
input = input.map((a) => a.split(' ').map(Number));
let visited = new Array(50).fill(false);
let selected = [];
let answer = '';
for (let i = 0; i < input.length; i++) {
    let temp = [];
    for (let j = 1; j < input[i].length; j++) {
        temp.push(input[i][j]);
    }
    data.push(temp);
}


function dfs(depth, length, j) {
    //모아진 순열을 answer에 담는 부분
    if (depth === 6) {
        for (let item of selected) {
            answer += `${item} `;
        }
        answer += `\n`;
        return;
    }
    //순열을 만들기 위해 재귀 시키는 부분
    for (let i = 0; i < length; i++) {
        if (visited[data[j][i]]) continue;
        if (selected[selected.length - 1] > data[j][i]) {
            visited[data[j][i]] = false;
            continue
        }
        visited[data[j][i]] = true;
        selected.push(data[j][i]);
        dfs(depth + 1, length, j);
        visited[data[j][i]] = false;
        selected.pop();
    }
}

//여러 테스트 케이스를 시도하는 부분
for (let i = 0; i < data.length - 1; i++) {
    dfs(0, data[i].length, i);
    console.log(answer.trim()+'\n');
    answer = '';
}
