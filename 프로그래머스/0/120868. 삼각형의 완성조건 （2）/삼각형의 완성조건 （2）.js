function solution(sides) {
    // 1. 가장 긴 변이 slide 안에 있을때 
    let bigNum = Math.max(...sides)
    let smallNum = Math.min(...sides)
    let temp = bigNum - (bigNum -smallNum)
    
    
    // 2. 가장 긴 변이 result 일 때 
    let temp2 = Number(sides[0]) + Number(sides[1])
    let temp3 = temp2 - (bigNum +1)
    
    return (temp+temp3)
}

// 1. 가장 긴 변이 sides 안에 있을 때 





// sides 안에 긴 변을 기준으로 넘어가면 두 sides의 합 - 1까지는 가능 