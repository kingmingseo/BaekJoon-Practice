let input = require('fs').readFileSync('dev/stdin').toString().trim()
let answer = ''

for(let item of input){
 
  if (item === item.toLowerCase()){
    answer += item.toUpperCase()
  }
  else if(item === item.toUpperCase()){
    answer += item.toLowerCase()
  }
}

console.log(answer)