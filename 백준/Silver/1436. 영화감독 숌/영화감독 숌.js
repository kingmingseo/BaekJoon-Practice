let input = +require('fs').readFileSync('dev/stdin').toString();
let temp = [];
let count = 1;
while(temp.length<=10000){
    if(String(count).indexOf('666')>-1){
        temp.push(Number(count))
    }
    count++
}
console.log(temp[input-1])
