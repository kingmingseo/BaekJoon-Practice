function solution(s){
    var answer = true;
    let data = s.split('')
    let stack = []
    
    for(let item of data){
        if(stack.length === 0 || item === '('){
            stack.push(item)
        }
    
        else if (item === ")"){
            stack.pop()
        }
        
    }

    
    
    
    return stack.length === 0;
}