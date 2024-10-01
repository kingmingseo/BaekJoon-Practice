let input = require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((data) => data.replace('\r', ''));

let caseCount = Number(input.shift());
let nowLine = 0;

while (input.length > nowLine) {
    let loopCount = Number(input[nowLine]);
    nowLine += 1;
    let style = {};

    for (let i = 0; i < loopCount; i++) {
        let [name, gear] = input[nowLine].split(' ');
        if (!style[gear]) {
            style[gear] = 1;
        } else {
            style[gear] += 1;
        }
        nowLine += 1;
    }

    let result = 1;
    for (let item in style) {
        result *= (style[item] + 1); // 각 의상 종류별로 안 입는 경우를 추가
    }

    console.log(result - 1); // 아무것도 입지 않는 경우 제외
}