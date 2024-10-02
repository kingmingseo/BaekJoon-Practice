let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(a=>a.replace('\r','').split(' '))
let dic = {}
let [n,m] =input.shift()
n = Number(n)
m = Number(m)

for(let i=0; i<n; i++){
  dic[input[i][0]] = input[i][1]
}

for(let i=n; i<input.length; i++){
  console.log(dic[input[i]])
}