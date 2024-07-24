let [N, M] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

function check(N) {
    if (N === 1) {
        return ;
    }
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return ;
        }
    }
    return N;
}

let answer = '';
for (let i = N; i <= M; i++) {
  let temp = check(i);
  if(temp){
    answer+=`${temp}\n`;
  }
    
}

console.log(answer.trim());
