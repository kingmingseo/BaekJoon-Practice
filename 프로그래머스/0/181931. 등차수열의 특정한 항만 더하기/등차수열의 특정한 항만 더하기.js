function solution(a, d, included) {
    var answer = 0;
    let value = a
    for(let i =0; i<included.length; i++){
        if (included[i] ===true){
            answer += value;
        }
        value+=d
    }
    return answer;
}