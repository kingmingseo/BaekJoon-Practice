let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number)

function selectionSort(arr){
  for(let i=0; i<arr.length; i++){
    let minIndex = i

    for(let j= i+1; j<arr.length; j++){
      if(arr[j]<=arr[minIndex]){
        minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp 
  }
}
input = input.slice(1)
selectionSort(input)
console.log(input.join('\n').trim())