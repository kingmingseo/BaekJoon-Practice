function solution(priorities, location) {
    let count = 1
    let firstPriority = Math.max(...priorities);
    
    while(true){
        if(firstPriority <= priorities[0] && location === 0){
            break;
        }
        else if (firstPriority <= priorities[0]){
            priorities.shift();
            location--;
            count++;
            firstPriority = Math.max(...priorities);
        }
        else if (firstPriority > priorities[0] && location === 0 ){
            let temp = priorities.shift();
            priorities.push(temp);
            location = priorities.length -1;
        }
        else if (firstPriority > priorities[0]){
            let temp = priorities.shift();
            priorities.push(temp);
            location--;
        }
        
        
        
        
        
    }
    
    return count 
    
    
}