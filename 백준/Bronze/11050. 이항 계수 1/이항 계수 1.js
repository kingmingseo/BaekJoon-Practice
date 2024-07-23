let [N,K] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

function factorial(n) {
  let result = 1;
  for(let i=n; i>0; i--){
    result = result*i;
  }
  return result
}
  
let a = factorial(N);
let b = factorial(K);
let c = factorial(N-K);


console.log(a/(b*c))