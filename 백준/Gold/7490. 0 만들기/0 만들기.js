let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number)
let n = 0
let data = input.slice(1)
let operatorList = [' ', '-', '+']
let arr = []
let ans = []
function dfs(result, depth) {
    //연산자는 숫자보다 하나 덜 필요
    if (depth === n - 1) {
        let str = ''

        for (let i = 0; i < n - 1; i++) {
            str += arr[i] + result[i]
        }
        str += arr[n - 1] + ''
        let current = eval(str.split(' ').join(''))
        if (current === 0) {
            ans.push(str)
        }
        return
    }

    for (let opreator of operatorList) {
        result.push(opreator)
        dfs(result, depth + 1)
        result.pop()
    }
}



for (let i = 0; i < data.length; i++) {
    ans = []
    arr = Array.from({ length: data[i] }, (_, j) => j + 1)
    n = data[i]
    dfs([], 0)

    console.log(ans.sort().join('\n'))

    if (i !== data.length - 1){
        console.log()
    }
        
}
