let input = require('fs').readFileSync('dev/stdin').toString().trim();
input = Number(input);

let dpTable = new Array(input + 1).fill(false);
dpTable[1] = 0;
dpTable[2] = 1;
dpTable[3] = 2;

function playGame(input) {
    for (let i = 4; i <= input; i++) {
        dpTable[i] = Math.min(dpTable[i-1]+1, dpTable[i-3]+1)
    }

    if(dpTable[input]%2 ===1){
      return 'CY'
    }
    else{
      return 'SK'
    }
}

console.log(playGame(input));
