let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);
arr = arr.map((a) => a.replace('\r', ''));
arr = arr.map(Number);
let stack = [];
let tempArray = new Array(N).fill().map((v, i) => i + 1);
tempArray = tempArray.reverse();
let answer = '';
let visited = new Array(N).fill(false);

for (let i = 0; i < N; i++) {
    if(visited[stack[stack.length-1]] && arr[i]< stack[stack.length-1]){
        answer ='NO'
        break;
    }
    if (stack.length === 0 || stack[stack.length-1] < arr[i]) {
        while (tempArray[tempArray.length - 1] !== arr[i]) {
            let temp = tempArray.pop()
            stack.push(temp);
            answer += '+\n';
            visited[temp-1] = true;
        }
        let temp = tempArray.pop()
        stack.push(temp);
        answer += '+\n';
        visited[temp-1] = true;
    }
    if (stack[stack.length - 1] === arr[i]) {
        stack.pop();
        answer += '-\n';
    } 
}

console.log(answer.trim())
