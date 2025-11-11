let input = Number(require('fs').readFileSync('dev/stdin').toString().trim())
let n = 0;
let nowNum = 1
cnt = 0;
while (n <= input) {
    n += nowNum++
    cnt++
    
}

console.log(cnt-1)