let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let [size, ...arr] = input;
let [M, N] = size.trim('\r').split(' ');
arr = arr.map((i) => i.trim('\r').split(''));

let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];
let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
let answer = 99999999999;
let whiteCount = 0;
let blackCount = 0;

for (let x = 0; x < M - 7; x++) {
    for (let y = 0; y < N - 7; y++) {
        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
               
                if (black[j][i] !== arr[j + x][i + y]) {
                    blackCount += 1;
                }
                if (white[j][i] !== arr[j + x][i + y]) {
                    whiteCount += 1;
                }
            }
        }
      
            answer = Math.min(blackCount, whiteCount,answer);
        
        blackCount = 0;
        whiteCount = 0;
    }
}

console.log(answer);
