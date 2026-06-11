function solution(s, n) {
    const data1 = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    const data2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let data = s.split('')
    let answer = ""
    for(const item of data){
        if(item === ' ') answer += " "
        
        else if(data1.indexOf(item)!== -1){
            answer += data1[data1.indexOf(item) + n]
        }
        else{
            answer += data2[data2.indexOf(item) + n]
        }
    }
    return answer 
}


// 1. 일단 문자열을 배열로 쪼개서 각 루프를 돌아야함 .
// 2. 루프에서 n만큼 점프를 시켜야하는데 기준점을 알고 