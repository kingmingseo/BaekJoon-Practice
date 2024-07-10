let [n, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

data = [];
for (let item of arr) {
    let [x, y] = item.split(' ').map(Number);
    data.push([x, y]);
}

function compare(a, b) {
  if(a[1]!==b[1]){
    return a[1]-b[1]
  }
  else{
    return a[0]-b[0]
  }
}

data.sort(compare)
answer = ''

for(let item of data){
  answer += item.join(' ')+'\n'
}
console.log(answer.trim())