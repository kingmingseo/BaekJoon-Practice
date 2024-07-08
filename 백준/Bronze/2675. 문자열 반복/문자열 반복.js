let [n,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')


for(let i=0; i<n; i++){
  let answer = ''
  let temp= arr[i].split(' ')
  temp[1]= temp[1].replace('\r','')
  for(let j of temp[1]){
    answer += j.repeat(temp[0])
  }
  console.log(answer)
}
