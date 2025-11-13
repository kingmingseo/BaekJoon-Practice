let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let data = input.slice(1).map(a => a.split(' ').map(Number))

function compare(a, b) {
    if (a[1] === b[1]){
        return a[0] - b[0]
    }
    return a[1] - b[1]
}
data.sort(compare)
let finishTime = -1
let ans = 0

for (let i = 0; i < data.length; i++) {

    let startTime = data[i][0] // 이번 회의 시작시간
    if (finishTime <= startTime) { //이번 회의 시작시간이 이전 회의 끝난 시간과 같거나 더 나중일때
        ans++
        finishTime = data[i][1] // 이번회의 끝나는 시간으로 변수 교체 
    }
}

console.log(ans)
