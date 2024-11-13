let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

function getAnswer(N) {
    let rule = [1, 1, 1];

    for (let i = 3; i < N; i++) {
        rule[i] = rule[i - 2] + rule[i - 3];
    }
    
    return rule[N-1];
}

for (let i = 1; i < input.length; i++) {
    console.log(getAnswer(input[i]));
}
