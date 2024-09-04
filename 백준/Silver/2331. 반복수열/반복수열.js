let input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
let serial = [];
let A = input[0];
let P = input[1];
serial.push(A);
let answer = 0;
while(true){
  let nowNum = 0;
  for(let item of serial[serial.length-1]){
    nowNum += Number(item)**Number(P);
  }
  
  if(serial.indexOf(String(nowNum))>=0){
    answer = serial.indexOf(String(nowNum))
    break;
  }
  serial.push(String(nowNum))
  
}

console.log(answer)