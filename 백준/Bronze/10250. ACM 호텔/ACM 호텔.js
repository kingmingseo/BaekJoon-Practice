let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
arr = arr.map((a) => a.split(' ').map(Number));

for (let item of arr) {
    let H = item[0];
    let W = item[1];
    let count = item[2];
    let hosu = 0;
    let floor = 0;
    if (count % H ===0){
      hosu = Math.floor(count / H)
      floor = H 
    }
    else {
      hosu =Math.floor(count/H) + 1;
      floor = count % H
    }
    if(hosu <10){
      console.log(Number(String(floor)+'0'+String(hosu)))
    }
    else{
      console.log(Number(String(floor)+String(hosu)))
    }

} 