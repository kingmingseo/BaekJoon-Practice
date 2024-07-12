let input = require('fs').readFileSync('dev/stdin').toString();
input = Number(input);

let div5 = Math.floor(input / 5);
let div3 = 0;
while (div5 >= 0) {
    let rest = input-(5*div5);
    if (rest % 3 === 0) {
        div3= Math.floor(rest/3);
        break;
    }
    div5--
}

console.log(div5+div3)
