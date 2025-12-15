function solution(numbers, hand) {
    var answer = '';
    let leftHand = [1,4,7]
    let rightHand = [3,6,9]
    let lastRightHand = 10
    let lastLeftHand = 12
    let graph = [[4,2]]
 
    //좌표 만들기
    
    for(let i =1; i<5; i++){
        for(let j=1; j<4; j++){
            graph.push([i,j])
           
        }
    }
     console.log(graph[10])
    
    for(let item of numbers){
        if(leftHand.includes(item)){
           answer += 'L'
           lastLeftHand = item
            
        }
        else if (rightHand.includes(item)){
            answer += 'R'
            lastRightHand = item
        }
        
        // 2 5 8 0 이 들어왔을 때 
        // 거리 측정을 어떻게 하면 좋을까? 
        
        else{
            
            let [leftHandPointX,leftHandPointY] = graph[lastLeftHand]
            let [rightHandPointX,rightHandPointY] = graph[lastRightHand]
            let [itemPointX,itemPointY] =  graph[item]
            
            let leftHandLength = Math.abs(leftHandPointX-itemPointX) + Math.abs(leftHandPointY - itemPointY)
            let rightHandLength = Math.abs(rightHandPointX-itemPointX) + Math.abs(rightHandPointY - itemPointY)
            
            if(leftHandLength < rightHandLength){
                lastLeftHand = item
                answer +='L'
            }
            else if(leftHandLength > rightHandLength){
                lastRightHand = item
                answer += 'R'
            }
            else{
                if(hand === 'left'){
                    answer += 'L'
                    lastLeftHand = item
                }
                else{
                    answer += 'R'
                    lastRightHand = item
                }
            }
        }
        
        
    }
    return answer;
}

// 엄지손가락은 상하 좌우 4가지 방향 각 거리는 1 

