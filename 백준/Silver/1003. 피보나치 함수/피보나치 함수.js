let input = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((a) => Number(a));

    
function fibo(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    } else if (fiboAnsTable[n] !== 0) {
        return fiboAnsTable[n];
    }

    fiboAnsTable[n] = fibo(n - 2) + fibo(n - 1);
    return fiboAnsTable[n];
}

for (let i = 1; i < input.length; i++) {
    fiboAnsTable = new Array(41).fill(0);
    fiboAnsTable[0] = 0
    fiboAnsTable[1] = 1
    
    fibo(input[i], 0);
    if (input[i] !== 0) {
        console.log(fiboAnsTable[input[i] - 1], fiboAnsTable[input[i]]);
    } else {
        console.log('1 0');
    }
}
