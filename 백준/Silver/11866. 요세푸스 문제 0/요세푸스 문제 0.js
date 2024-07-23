let [N,K] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const list = new Array(N).fill().map((v,i)=>i+1);
let answer =[]

while(list.length>0){
  for(let i=0; i<K-1; i++){
    list.push(list.shift())
  }
  
  answer.push(list.shift())
}

answer = answer.join(', ')
console.log(`<${answer}>`)