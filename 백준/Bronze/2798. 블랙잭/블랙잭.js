let [temp1, temp2] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let [N, M] = temp1.split(' ').map(Number);
let arr = temp2.split(' ').map(Number).sort((a,b)=>a-b)
let answer = 0;


for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    for(let k=0; k<N; k++){
      if(i===j || j==k || i===k){
        continue
      }
      let total = arr[i]+arr[j]+ arr[k]
      if(total <= M && total > answer){
        answer = total
      }
    }
  }
}

console.log(answer)