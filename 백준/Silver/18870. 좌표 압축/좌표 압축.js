let [n,arr]= require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
arr = arr.split(' ')
let data =[...arr]
data.sort((a,b)=>a-b)
let dupDelArr = [...new Set(data)];
let dic = {};
let answer = ''
for(let i=0; i<dupDelArr.length; i++){
  dic[dupDelArr[i]]=i
}

for(let i=0; i<n; i++){
  answer += dic[arr[i]]+' '
}

console.log(answer.trim())