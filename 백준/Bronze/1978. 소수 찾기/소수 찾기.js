let [N, arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

arr = arr.split(' ').map(Number);
let answer = 0;
let button = true;
for (let item of arr) {
    for (let i = 2; i < item; i++) {
        if (item === 1) {
            break;
        }
        if (item % i === 0) {
            button = false;
            break;
        }
    }
    if(button && item!==1){
      answer+=1
    }
    button = true
}

console.log(answer);
