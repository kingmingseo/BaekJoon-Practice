function solution(prices) {
    var answer = [];
    for (let i = 0; i<prices.length; i++){
        let temp = 0
        for(let j=i+1; j<prices.length; j++){
            if(prices[i]<=prices[j]){
                temp++;
            }
            else{
                temp++;
                break
                }
            
        }
        answer.push(temp);
    }
    return answer;
}