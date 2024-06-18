function solution(numLog) {
    var answer = '';
    let firstNum = numLog[0]
    for(let i =1; i < numLog.length; i++){
        switch(numLog[i]){
                case numLog[i-1]+1 :
                    answer+='w'
                    break;
                case numLog[i-1]-1 :
                    answer+='s'
                    break;
                case numLog[i-1]+10 :
                    answer+='d'
                    break;
                case numLog[i-1]-10 :
                    answer+='a'
                    break;
                
        }
    }
    return answer;
}