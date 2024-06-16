function solution(a, b) {
    var answer = 0;
    let temp1 = Number(String(a) + String(b))
    let temp2 = 2 * a * b
    
    if(temp1 >= temp2){
        answer = temp1
    }
    else{
        answer =temp2
    }
    return answer;
}