let input = require('fs').readFileSync('dev/stdin').toString().trim();
input = Number(input)
let fence = 7;
let nowHexagon = 6;
let answer = 2;
while(true){
  if(input <= fence){
    if(input === 1){
      answer = 1
    }
    break
  }
  nowHexagon += 6;
  fence+=nowHexagon
  answer +=1;
} 

console.log(answer)