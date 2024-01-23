function solution(n, lost, reserve) {
    let canBorrow = 0;
    lost.sort((a,b)=>(a-b))
    let temp = 0
    for (let i = 0; i < lost.length; i++) {
        if (reserve.indexOf(lost[i]) > -1) {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            lost.splice(i, 1);
            i--; // 배열이 수정되었으므로 인덱스를 다시 확인
            canBorrow += 1;
            temp +=1
        }
    }

    for(let i =0; i<lost.length; i++){  
        
        //한치 수 작은애 빌려주기
        if(reserve.indexOf(lost[i]-1)>-1){
            reserve.splice(reserve.indexOf(lost[i]-1),1)
            canBorrow+=1;
            continue
        //한치 수 큰애 빌려주기
        }
        else if(reserve.indexOf(lost[i]+1)>-1){
            reserve.splice(reserve.indexOf(lost[i]+1),1)
            canBorrow+=1;
            continue
        }
    }   
 
    return n - (lost.length- canBorrow + temp);
}