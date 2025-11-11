let [A, B] = require('fs').readFileSync('dev/stdin').toString().split(' ').map(Number)

let cnt = 0;

while (B >= A) {
    if (A === B) {
        break
    }
    if (B % 10 === 1) {
        B = Math.floor(B / 10)
    }
    else if (B % 2 === 0) {
        B = Math.floor(B / 2)
    }
    else {
        break
    }
    cnt++
}



if (A !== B) console.log(-1)
else { console.log(cnt+1) }



