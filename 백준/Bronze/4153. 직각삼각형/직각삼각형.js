let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let arr = input.map(a=>a.split(' ').map(Number));

for(let i=0; i<arr.length-1; i++){
  let a = arr[i][0];
  let b = arr[i][1];
  let c = arr[i][2];

  let longest = Math.max(c,Math.max(a,b))

  if(longest === a){
    if(longest**2 === b**2 + c**2){
      console.log('right')
    }
    else{
      console.log('wrong')
    }
  }
  else if (longest === b){
    if(longest**2 === a**2 + c**2){
      console.log('right')
    }
    else{
      console.log('wrong')
    }
  }

  else if (longest === c){
    if(longest**2 === a**2 + b**2){
      console.log('right')
    }
    else{
      console.log('wrong')
    }
  }
}