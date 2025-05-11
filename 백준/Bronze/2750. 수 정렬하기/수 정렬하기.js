const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(Boolean).map(Number);

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

const data = input.slice(1); // 첫 줄은 개수
selectionSort(data);
console.log(data.join('\n'));
