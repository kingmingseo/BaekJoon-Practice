function solution(nums) {
    var answer = 0;
    let noDuplication = [...new Set(nums)]
    let maxPocketmon = nums.length/2
    if(noDuplication.length >= maxPocketmon ){
        answer = maxPocketmon
    }
    else{
        answer = noDuplication.length
    }

    
    return answer
}