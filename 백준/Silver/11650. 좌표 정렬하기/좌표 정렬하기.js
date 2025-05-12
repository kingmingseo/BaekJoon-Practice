const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(line => line.split(' ').map(Number))
let data = input.slice(1);

function compare(arr1, arr2) {
  if (arr1[0] < arr2[0]) {
    return -1
  }
  else if (arr1[0] > arr2[0]) {
    return 1
  }

  else {
    if (arr1[1] < arr2[1]) {
      return -1
    }
    else if (arr1[1] > arr2[1]) {
      return 1
    }
    else {
      return 0
    }
  }
}

data.sort(compare)
let answer = ''
for (let i = 0; i < data.length; i++) {
  answer += data[i].join(' ')
  answer += '\n'
}

console.log(answer.trim())
