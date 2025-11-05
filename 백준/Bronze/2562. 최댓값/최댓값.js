let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number)


let maxNum = 0;
let minNumOrder = 0
for (let i=0; i<input.length; i++){
    if(input[i]>maxNum){
        maxNum = input[i]
        minNumOrder = i
    }
}

console.log(maxNum)
console.log(minNumOrder+1)