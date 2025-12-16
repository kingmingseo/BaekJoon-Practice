function solution(n, lost, reserve) {
    let reserveArray = Array(n+1).fill(1)
    lost = lost.sort((a,b)=>a-b)
    reserve = reserve.sort((a,b)=>a-b)
    reserveArray[0] = 0
    
     for(let item of lost){
        reserveArray[item] = 0
    }
    
    for(let item of reserve){
        reserveArray[item] += 1
    }
    
   
    

    for(let item of lost){
        if(reserveArray[item] === 1){
            continue
           
        }
        else if(reserveArray[item -1] === 2){
            reserveArray[item-1] -= 1
            reserveArray[item] +=1
           
        } 
        else if(reserveArray[item+1]===2){
            reserveArray[item+1] -=1
            reserveArray[item] +=1
        }
    }
    let answer = 0
    
    for(let item of reserveArray){
        if(item > 0) answer++
    }
    
    return answer
    
}

//만약 lost [1,2,4] 인데 reserve가 [1,2,3]

// 1은 자기꺼 입고 
// 2도 자기꺼 입고
// 4는 