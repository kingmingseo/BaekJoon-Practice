const fs = require("fs");

const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `BaekjoonOnlineJudge`;

let answer = "";

for (let i = 0; i < input.length; i++) {
  answer += input[i];

  if (i !== 0 && (i + 1) % 10 === 0) {
    answer += `\n`;
  }
}

console.log(answer);
