function solution(s){
    var answer = true;
    let temp = []
    
    for(let i = 0; i < s.length; i++){
        if(s[i]==='('){ 
            temp.push(s[i]);
        }
        else{
           if(temp.length === 0){
               return false
           }
            else{
                temp.pop()
            }
        }
        
    }
   if(temp.length !==0){
            return false;
    }
    return answer 

}