let [N,...arr]= require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
N= Number(N)
arr = arr.map(a=>a.split(' ').map(Number))

for(let [a,b] of arr){
  let data = 1;
  for(let i=1; i<=b; i++){
    data = (data*a)%10
  }
  if(data ===0){
    console.log(10)
  }
  else{
    console.log(data)
  }
  
}