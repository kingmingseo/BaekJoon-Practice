let [T, ...temp] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let data = [];
let answer = '';

function compare(a, b) {
  return Number(a[0]) - Number(b[0]);
}

function calculation(data) {
    let minRank = 1000000;
    let answer = 0;
    for (let i = 0; i < data.length; i++) {
        if (minRank > data[i][1]) {
            minRank = data[i][1];
            answer += 1;
        }
    }
    return answer;
}

for (let i = 0; i < temp.length; i++) {
    let nowData = temp[i].split(' ').map(Number);
    if (nowData.length === 1 && data.length !== 0) {
        data.sort(compare);
        answer += calculation(data) + '\n';
        data = [];
        continue;
    } else if (nowData.length === 1 && data.length === 0) {
        continue;
    } else if (i === temp.length - 1) {
        data.push(nowData);
        data.sort(compare);
       
        answer += calculation(data) + '\n';
        data = [];
    } else {
        data.push(nowData);
    }
}

console.log(answer.trim());
