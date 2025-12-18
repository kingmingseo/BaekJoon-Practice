function solution(k, d) {
    let answer = 0
    for(let y=0; y<=d; y+=k){
        let maxX = Math.sqrt(d**2 - y**2)
        answer += Math.floor(maxX / k) +1
    }
    
    
    return answer;
}