function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    let onBridge = [] 
    
    while(truck_weights.length > 0 || onBridge.length> 0){
        let Allweight = onBridge.reduce((a,b)=>a+b[0],0)
        
        //다리 위에 올라갈 수 있는 지 판단
        if(truck_weights.length>0 && bridge_length>onBridge.length && weight >= Allweight+truck_weights[0]){
            let nowTruck = truck_weights.shift()
            onBridge.push([nowTruck,bridge_length])
        }
        
        //트럭들의 움직임. 만약 거리가 0이되면 다 건넌걸로 간주하고 onBridge에서 제거
        for(let i=0; i<onBridge.length; i++){
            onBridge[i][1]=onBridge[i][1]-1;
            if(onBridge[i][1]===0){
                onBridge.shift()
                i--;
            }
        }
        answer+=1
        
    }
    return answer;
}