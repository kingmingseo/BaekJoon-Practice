let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
input = input.map((a) => a.replace('\r', ''));

let stack = [];

function checkSentence(sentence) {
    for (let i = 0; i < sentence.length; i++) {
        let nowLetter = sentence[i];
    
        if (['(', '[', '{'].includes(nowLetter)) {
            stack.push(nowLetter);
        } else if (nowLetter === ')') {
            let top = stack.pop();
            if (top !== '(') {
                stack.push('no');
                return;
            }
        } else if (nowLetter === ']') {
            let top = stack.pop();
            if (top !== '[') {
                stack.push('no');
                return;
            }
        } else if (nowLetter === '}') {
            let top = stack.pop();
            if (top !== '{') {
                stack.push('no');
                return;
            }
        } else if (nowLetter === '.') {
            return;
        } else {
            continue;
        }
    }
}

let answer = '';
for (let sentence of input) {
    if(sentence==='.'){
      break
    }
    checkSentence(sentence);
    if (stack.length !== 0) {
        answer += 'no\n';
    } else {
        answer += 'yes\n';
    }
    stack = [];
}

console.log(answer.trim());
