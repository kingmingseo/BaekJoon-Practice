let [n,...arr]= require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let data = arr.map(a=>a.split(' ').map(Number))

function selectionSort(arr){
  let answer = 0;

  for(let i=1; i<20; i++){
    for(let j=i+1; j<21; j++){
      if(arr[i]>arr[j]){
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        answer +=1
      }
    }
  }
  return answer
}

for(let i=1; i<=n; i++)
console.log(i,selectionSort(data[i-1]))

