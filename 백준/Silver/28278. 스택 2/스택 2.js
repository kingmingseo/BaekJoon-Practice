let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().replace(/\r/g, '').trim().split('\n');
let stack = [];
let answer = '';

for (let i = 0; i < N; i++) {
  let command = arr[i].split(' ');

  if (command[0] === '1') {
    stack.push(command[1]);
  } else if (command[0] === '2') {
    if (stack.length === 0) {
      answer += '-1\n';
    } else {
      answer += stack.pop() + '\n';
    }
  } else if (command[0] === '3') {
    answer += stack.length + '\n';
  } else if (command[0] === '4') {
    if (stack.length === 0) {
      answer += '1\n';
    } else {
      answer += '0\n';
    }
  } else if (command[0] === '5') {
    if (stack.length !== 0) {
      answer += stack[stack.length - 1] + '\n';
    } else {
      answer += '-1\n';
    }
  }
}

console.log(answer);
