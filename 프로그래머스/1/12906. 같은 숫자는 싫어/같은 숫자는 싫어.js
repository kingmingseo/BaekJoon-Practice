function solution(arr)
{
    var answer = []; 
    answer.push(arr[0]) //첫번째 숫자는 무조건 정답으로 들어가니 push
    let temp = arr[0]; //비교를 위해 임시 변수에 저장
    for(let i=1; i<arr.length; i++){ //배열 두 번째 요소부터 마지막 요소 까지 temp와 비교
        if (temp === arr[i]){ //이전 숫자와 같을 경우
            temp = arr[i]; //temp를 update
            continue //바로 다음 반복문으로 
        }
        else{ //이전 숫자와 다른경우
            answer.push(arr[i]) //정답 배열에 추가 
            temp = arr[i]; //temp를 update
        }
        
    }
    
    return answer;
}