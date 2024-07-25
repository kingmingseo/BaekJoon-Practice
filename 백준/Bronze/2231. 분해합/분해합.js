let input = require('fs').readFileSync('dev/stdin').toString().trim();
input = Number(input)
let answer = 0;
for (let i = 1; i <= input; i++) {
    let candidate = i;
    let sum = 0;
    
    while (candidate > 0) {
        sum += candidate % 10;
        candidate = Math.floor(candidate / 10);
    }
    if (sum + i === input) {
        answer = i;
        break;
    }
}
console.log(answer);
