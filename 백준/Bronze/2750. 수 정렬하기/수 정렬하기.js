let [n, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
arr= arr.map(Number)

function selectionSort(arr){
  for(i=0; i<arr.length; i++){
    let minValue = 1001;
    let minIndex = 0;
    for(j=i; j<arr.length; j++){
      if(minValue > arr[j]){
        minValue = arr[j]
        minIndex = j
      }
    }
    let temp = arr[i];
    arr[i] = minValue;
    arr[minIndex] = temp; 
  }
  return arr;
}


console.log(selectionSort(arr).join('\n'))