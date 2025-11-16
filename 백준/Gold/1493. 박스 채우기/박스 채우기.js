let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input = input.map(data => data.split(' ').map(Number))
let [length, width, height] = input[0]
let data = input.slice(2)
let cube = new Array(20).fill(0)

//존재하는 큐브 배열 만들기
for (let i = 0; i < data.length; i++) {
    cube[i] = data[i][1]
}

//받은 변의 길이 기준으로 만들수 있는 가장 큰 변의 길이에 대한 2^n 에 해당하는 n을 리턴
function nearestCube(size) {
    let i = 1;
    while (2 ** i <= size) {
        i += 1;
    }

    return i - 1
}


let size = 19
size = Math.min(size, nearestCube(length))
size = Math.min(size, nearestCube(height))
size = Math.min(size, nearestCube(width))
//이 결과로 현재 size는 큐브의 가장 긴 변의 길이인 2^n에 해당하는 n

let used = 0
let result = 0
for (let n = size; n >= 0; n--) {
    used = used * 8
    let cur = 2 ** n
    let maximumCube = Math.floor(length / cur) * Math.floor(width / cur) * Math.floor(height / cur) - used // 채울수 있는 큐브의 최대치
    let usage = Math.min(maximumCube, cube[n])
    result += usage
    used += usage
}

if (length * height * width === used){
    console.log(result) 
}
else{
    console.log(-1)
}