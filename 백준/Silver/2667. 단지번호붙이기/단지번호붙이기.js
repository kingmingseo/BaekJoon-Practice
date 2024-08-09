let [n, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
n = Number(n);
arr = arr.map((a) => a.split('').map(Number));
let answer = [];

function dfs(x, y) {
    if (x >= arr.length || x < 0 || y >= arr[0].length || y < 0) {
        return;
    }

    if (arr[x][y] === 1) {
        aptCount += 1;
        arr[x][y] = -1;

        // 상하 좌우를 살피는 코드
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 1) {
            // 단지 개수를 세는 코드
            aptCount = 0;
            dfs(i, j);
            answer.push(aptCount);
        }
    }
}
console.log(answer.length);
answer.sort((a,b)=>a-b)
for(let item of answer){
  console.log(item)
}
