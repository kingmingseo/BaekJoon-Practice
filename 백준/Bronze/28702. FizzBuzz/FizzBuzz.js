let [one,two,three] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let temp1 = Number(one);
let temp2 = Number(two);
let temp3 = Number(three);

if(temp1){
  temp1 = temp1+3;
  if(temp1%3===0 && temp1%5===0){
    console.log('FizzBuzz')
  }
  else if(temp1%3===0 && temp1%5!==0){
    console.log('Fizz')
  }
  else if(temp1%3!==0 && temp1%5===0){
    console.log('Buzz')
  }
  else{
    console.log(temp1)
  }
}
else if(temp2){
  temp2 = temp2+2;
  if(temp2%3===0 && temp2%5===0){
    console.log('FizzBuzz')
  }
  else if(temp2%3===0 && temp2%5!==0){
    console.log('Fizz')
  }
  else if(temp2%3!==0 && temp2%5===0){
    console.log('Buzz')
  }
  else{
    console.log(temp2)
  }

}
else if(temp3){
  temp3 = temp3+1;
  if(temp3%3===0 && temp3%5===0){
    console.log('FizzBuzz')
  }
  else if(temp3%3===0 && temp3%5!==0){
    console.log('Fizz')
  }
  else if(temp3%3!==0 && temp3%5===0){
    console.log('Buzz')
  }
  else{
    console.log(temp3)
  }
}

