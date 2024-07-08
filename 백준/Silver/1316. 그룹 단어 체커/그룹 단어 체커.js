let [a, ...b] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let answer = a;
for (let i = 0; i < a; i++) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let temp = b[i].replace('\r', '');
    let beforeWord = '';

    for (let item of temp) {
        //처음 맞이하는단어

        if (alphabet.indexOf(item) > -1) {
            alphabet = alphabet.slice(0, alphabet.indexOf(item)) + alphabet.slice(alphabet.indexOf(item) + 1);
        }
        //연속된 단어
        else if (beforeWord === item) {
            continue;
        }

        //아까 나왔던 단어이면서 연속되지않은단어
        else if (alphabet.indexOf(item) === -1 && item !== beforeWord) {
            answer -= 1;
            break;
        }
        beforeWord = item;
    }
}
console.log(answer);
