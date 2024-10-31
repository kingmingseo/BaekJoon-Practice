const fs = require('fs');
const input = Number(fs.readFileSync('dev/stdin').toString().trim());
let d = new Array(100000).fill(0)

for(let i=2; i<=input; i++){
    d[i] = d[i-1] + 1;

    if(i%2 ===0){
        d[i] = Math.min(d[i],d[parseInt(i/2)]+1)
    }
    if(i%3 ===0){
        d[i] = Math.min(d[i],d[parseInt(i/3)]+1)
    }
}

console.log(d[input]);