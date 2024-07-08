let [n,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

for(let i =0; i<n; i++){
  let temp = arr[i].split(' ').map(a=>Number(a))
  let count = temp.shift()
  let sum = temp.reduce((a,b)=>a+b,0)
  let avg = sum/count
  let ratio = 0
  for(let i=0; i<count; i++){
    if (temp[i]>avg){
      ratio+=1
    }
  }
  console.log(((ratio/count)*100).toFixed(3)+'%')
}