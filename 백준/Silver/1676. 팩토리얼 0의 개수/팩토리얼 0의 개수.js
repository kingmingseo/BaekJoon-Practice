function factorial(n) {
    let result = BigInt(1);
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    if(n ===0){
      return 0
    }
    return result;
}

let input = require('fs').readFileSync('dev/stdin').toString().trim();
input = String(factorial(BigInt(input)));
let answer = 0;

for (i = input.length - 1; i >= 0; i--) {
    if (input[i] === '0') {
        answer += 1;
    }
    else{
      break;
    } 
}

console.log(answer);
