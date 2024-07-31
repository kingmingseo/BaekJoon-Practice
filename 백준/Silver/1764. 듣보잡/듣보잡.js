let [test, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [N, M] = test.split(' ').map(Number);
arr = arr.map((a) => a.replace('\r', ''));
let testCase1 = {};
let testCase2 = [];
let answer = [];
for (let i = 0; i < N; i++) {
    testCase1[arr[i]] = 1;
}
for (let i = N; i < arr.length; i++) {
    if(testCase1[arr[i]]===1){
      answer.push(arr[i])
    }
}

console.log(answer.length)
answer.sort()
for(let item of answer){
  console.log(item)
}