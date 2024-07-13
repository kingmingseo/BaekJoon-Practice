let [N,...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let distance = arr[0].split(' ').map(Number);
let cityOilFee = arr[1].split(' ').map(Number);
let answer = 0;
for(let i=0; i< distance.length; i++){
  if(i === distance.length -1){
    answer += distance[i] * cityOilFee[i]
    break;
  }

  if(cityOilFee[i]<cityOilFee[i+1]){
    let skipValue = 1;
    answer += (cityOilFee[i]*(distance[i]+distance[i+1]))
    for(let j = i + 2; j < cityOilFee.length-1; j++ ){
      if(cityOilFee[i]<cityOilFee[j]){
        answer += (cityOilFee[i]*(distance[j]))
        skipValue++;
      }
      else{
        break
      }
    } 
    i += skipValue 
    
  }
  else if (cityOilFee[i]>=cityOilFee[i+1]){
    answer += (cityOilFee[i]*(distance[i]))
  }
  
}
console.log(answer)