let [n,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let data = []
for(let i=0; i<n; i++){
  let [age, name] = arr[i].split(' ')
  data.push([Number(age),name,i])
}

function compare(a,b){
  if(a[0]!==b[0]){
    return a[0]-b[0]
  }
  else{
    return  a[2]-b[2]
  }
}

data.sort(compare)
answer = ''
for(let i=0; i<n; i++){
  answer += data[i][0]+' '+data[i][1] +'\n'
}
console.log(answer.trim())