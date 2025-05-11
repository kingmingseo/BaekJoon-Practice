var globalArray = []

function merge_sort(A, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(A, p, q);
    merge_sort(A, q + 1, r);

    return merge(A, p, q, r);
  }
}

function merge(A, p, q, r) {
  let i = p
  let j = q + 1
  let t = 0;
  let tmp = []
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      globalArray.push(A[i]);
      tmp[t] = A[i];
      t++;
      i++;
    }

    else {
      tmp[t] = A[j];
      globalArray.push(A[j]);
      t++;
      j++;
    }
  }
  while (i <= q) {
    globalArray.push(A[i]);
    tmp[t++] = A[i++];
  }


  while (j <= r) {
    globalArray.push(A[j]);
    tmp[t++] = A[j++];

  }
  i = p;
  t = 0;
  while (i <= r)
    A[i++] = tmp[t++];
}

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(line => line.trim())
const [N, K] = input[0].split(' ').map(Number)
const A = input[1].split(' ').map(Number)

merge_sort(A, 0, A.length - 1)
let answer = globalArray[K-1]

if(globalArray.length < K){
  console.log(-1)
}
else{
  console.log(answer)
}

