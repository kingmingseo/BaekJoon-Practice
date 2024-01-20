function solution(participant, completion) {
    var answer=''
    let map = new Map()
    
    for(let i =0; i<participant.length; i++){
        if(!map.get(participant[i])){
            map.set(participant[i], 1)
        }
        else{
            map.set(participant[i], map.get(participant[i])+1)
        }
    }
    for(let temp of completion){
        if(map.get(temp)){
            map.set(temp, map.get(temp)-1);
        }
    }
    
     for(let i =0; i< participant.length; i++){
        if(map.get(participant[i])===1){
            answer = participant[i]
            break
        }
     }
         
    return answer
}