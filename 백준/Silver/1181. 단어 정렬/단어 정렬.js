const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let temp = new Set(input)
let data = [...temp]
data = data.slice(1)

function dicSort(word1, word2) {
  if (word1.length < word2.length) {
    return -1
  }
  else if (word1.length > word2.length) {
    return 1
  }
  else {
    return word1.localeCompare(word2)
  }
}

data.sort(dicSort)

console.log(data.join('\n').trim())