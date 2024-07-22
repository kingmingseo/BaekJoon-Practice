let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

input = input.map(a=>a.replace('\r',''));

for(let item of input){
  if(item==='0'){
    break;
  }
  else{
    let temp =item.split('').reverse().join('')
    temp === item ? console.log('yes'):console.log('no')
  }
}