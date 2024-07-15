let [N, K] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

let sum = K*(K+1)/2

if(sum>N){
  console.log(-1)
}
else{
  N = N-sum;
  if(N % K === 0) console.log(K-1);
  else console.log(K);
}



