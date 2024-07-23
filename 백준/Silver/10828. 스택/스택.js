let [N,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
N = Number(N);

arr = arr.map(a=>a.split(' ').map(a=>a.replace('\r','')))
let stack = []
let answer = ''
for (let item of arr){
  if(item[0]==='push'){
    stack.push(Number(item[1]));
  }
  else if(item[0]==='pop'){
    if(stack.length ===0){
      answer += -1 +'\n'
    }
    else{
      answer += stack.pop() + '\n'
    }
  }
  else if(item[0]==='size'){
    answer += stack.length +'\n'
  }
  else if(item[0]==='empty'){
    if(stack.length===0){
      answer += 1 +'\n'
    }
    else{
      answer += 0 +'\n'
    }
  }
  else if(item[0]==='top'){
    stack.length !== 0 ? answer += stack[stack.length-1] + '\n' : answer += -1 +'\n'
  }
  
}
console.log(answer.trim())