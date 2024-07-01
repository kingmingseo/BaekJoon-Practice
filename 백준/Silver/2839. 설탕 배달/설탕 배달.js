let input = +require('fs').readFileSync('dev/stdin');
let answer = -1;
let div5 = Math.floor(input / 5);
while (div5 >= 0) {
    let result5 = input - div5*5
    if(result5%3 === 0){
        answer = div5 + Math.floor(result5/3)
        break
    }
    else{
        div5-=1
    }
}


console.log(answer);
