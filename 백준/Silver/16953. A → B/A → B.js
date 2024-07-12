let [A, B] = require('fs').readFileSync('dev/stdin').toString().split(' ').map(Number);
let answer = 0

while(B>=A){

    if(B===A){
        break;
    }
    B = String(B)
    if(B.slice(B.length-1,B.length) === '1'){
        answer += 1;
        B = Number(String(B.slice(0,B.length-1)))
    }
    else{
        B = Number(B)
        if(B %2 !== 0 ){
            answer = -1
            break;
        }
        B = Math.floor(B/2)
        answer +=1
    }

}
if(B !== A){
    console.log(-1)
}
else{
    console.log(answer+1)
}
