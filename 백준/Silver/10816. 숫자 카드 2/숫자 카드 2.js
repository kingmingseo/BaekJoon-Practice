let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let data = input[1].split(' ').map(Number);
let M = Number(input[2]);
let shouldFind = input[3].split(' ').map(Number);
let dic = {};
let answer = []
for(let item of data){
  if(!dic[item]){
    dic[item] = 1;
  }
  else{
    dic[item]+=1;
  }
}

for(let item of shouldFind){
  if(!dic[item]){
    answer.push(0)
  }
  else{
    answer.push(dic[item])
  }
}

console.log(answer.join(' '))


