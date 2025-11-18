let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let [N, M] = input[0].split(' ').map(Number)
let numList = input[1].split(' ').map(Number)
let data = input.slice(2).map(data => data.split(' ').map(Number))
let dpTable = Array(100001).fill(0)


function makeDpTable() {
    let temp = 0
    for (let i = 1; i <= numList.length; i++) {
        temp += numList[i-1]
        dpTable[i] = temp
    }
}
makeDpTable()

for (let [a, b] of data) {
    console.log(dpTable[b] - dpTable[a - 1])
}