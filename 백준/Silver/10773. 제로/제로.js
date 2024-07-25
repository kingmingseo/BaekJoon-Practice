let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
arr = arr.map(Number);
let stack = [];

for (let item of arr) {
    if (item === 0) {
        stack.pop();
    } else {
        stack.push(item);
    }
}
if(stack.length!==0){
  console.log(stack.reduce((a, b) => a + b));
}
else{
  console.log(0)
}

