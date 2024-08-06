let [a,b] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ')
a = Number(a)
b = Number(b)

let item = []
for(let i=1; i<=a; i++){
  if(a%i===0){
    item.push(i)
  }
}
if(!item[b-1]){
  console.log(0)
}
else{
  console.log(item[b-1])
}