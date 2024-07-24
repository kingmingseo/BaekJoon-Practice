let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);
arr = arr.map((a) => a.replace('\r', ''));
arr = arr.map(Number);
let stackNum = 1;
let stack = [];
let answer = '';

for (let i = 0; i < N; i++) {
    let num = arr[i];

    while (stackNum <= num) {
        stack.push(stackNum);
        stackNum++;
        answer += '+\n';
    }


    let popNum = stack.pop();
    answer += '-\n';
  

    if (popNum !== num) {
        answer = 'NO';
        break
    }
}
console.log(answer.trim());
