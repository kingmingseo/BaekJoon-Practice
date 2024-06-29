let input = +require('fs').readFileSync('dev/stdin').toString().trim();
let topNum;
let botNum;
let line = 0;

// 몇번 째 라인인가?
while (input > 0) {
    line++;
    input -= line;
}

//몇 번째 위치에 위치해 있는가?
let linePosition = line + input;

//라인의 번호가 짝수인지 홀수인지 구분해서 분자 분모의 값 설정 
if (line % 2 === 1) {
    topNum = line;
    botNum = 1;
    for (let i = 0; i < linePosition - 1; i++) {
        topNum--;
        botNum++;
    }
}

if (line % 2 === 0) {
    topNum = 1;
    botNum = line;
    for (let i = 0; i < linePosition - 1; i++) {
        topNum++;
        botNum--;
    }
}
console.log(`${topNum}/${botNum}`);
