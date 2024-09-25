let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let listDic = input.slice(1, n+1).map(a => a.trim());
let dic = {};

for (let i = 0; i < n; i++) {
    dic[listDic[i]] = i + 1;
}

for (let i = n + 1; i < n + m + 1; i++) {
    let query = input[i].trim();
    if (isNaN(query)) {
        console.log(dic[query]);
    } else {
        console.log(listDic[Number(query) - 1]);
    }
}