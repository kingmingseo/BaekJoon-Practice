let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [N, M] = input[0].split(' ').map(Number)
let data = input[1].split(' ').map(Number)
let start = 0;
let end = Math.max(...data)
let result;
while (start <= end) {
    let mid = Math.floor((start + end) / 2) //절단기 높이 설정
    let total = 0 // 가져가는 나무 

    for (let x of data) {
        let tree = x - mid
        if (tree > 0) {
            total += tree
        }
    }
   
    //가져 가는 나무가 적을때 (절단기 높이를 낮춰야함)
    if (total < M) {
        end = mid - 1

    }
    //가져가는 나무가 너무 많거나 같을때 (절단기 높이를 높여야함)
    else {
        result = mid
        start = mid + 1
    }
}

console.log(result)