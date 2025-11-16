let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [K, N] = input[0].split(' ').map(Number)
let data = input.slice(1).map(Number)
let start = 1;
let end = Math.max(...data)
let result = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2)  //자르는 랜선의 공통 길이
    let total = 0
    for (let x of data) {
        total += Math.floor(x / mid) //mid의 길이로 잘랐을 때 만들 수 있는 랜선의 개수
    }

    if (total < N) { //자르고 나온 랜선의 개수가 필요한 랜선의 개수보다 적을때(즉 랜선이 더 짧아야함)
        end = mid - 1
    }
    else { //랜선의 개수가 너무 많거나 같을때 (즉 랜선이 더 길어야함)
        result = mid;
        start = mid + 1
    }
}

console.log(result)