let input = require('fs').readFileSync('dev/stdin').toString().trim();
input = Number(input);
let dpTable = new Array(input+1).fill(0);


//dpTable의 인덱스 i를 1로 만드는데 소모하는 횟수
for (let i = 2; i <= input; i++) {
    dpTable[i] = dpTable[i-1] + 1

    if (i% 2 === 0) {
        dpTable[i] = Math.min(dpTable[i],dpTable[parseInt(i/2)]+1);
    }

    if(i%3 ===0){
        dpTable[i] = Math.min(dpTable[i],dpTable[parseInt(i/3)]+1);
    }
}

console.log(dpTable[input])
