let [N, arr] = require('fs').readFileSync('dev/stdin').toString().split('\n')
arr = arr.split(' ').map(Number)
let set = new Set(arr)
let data = [...set]

let dic = {};
let temp = [...data].sort((a,b)=>a-b)
let result = ''

for(let i =0; i<temp.length; i++){
  dic[temp[i]] = i
}

for(let i=0; i<N; i++){
  result += dic[arr[i]]+' '
}

console.log(result.trim())