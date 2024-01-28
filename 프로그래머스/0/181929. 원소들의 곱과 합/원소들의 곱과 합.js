function solution(num_list) {
    let totalSum = 0;
    let totalMul = 1;
    for(let i of num_list){
        totalSum+= i
        totalMul*= i
    }
    
    if(totalMul<totalSum**2){
        return 1
    }
    else return 0
    
}