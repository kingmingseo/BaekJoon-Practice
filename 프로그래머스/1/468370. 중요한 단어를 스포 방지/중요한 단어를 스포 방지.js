function solution(message, spoiler_ranges) {
    let data = [];
    
    // 인덱스 유지를 위해 글자 배열로 변환 (기존 논리 유지)
    let maskedMessageArray = message.split(''); 
    
    for(let i = 0; i < spoiler_ranges.length; i++){
        let leftPoint = spoiler_ranges[i][0];
        let rightPoint = spoiler_ranges[i][1];
        
        // 1. 좌측 포인트 끝을 찾기
        while(message[leftPoint] !== ' ' && leftPoint >= 0){
            leftPoint--;
        }
        
        // 2. 우측 포인트 끝을 찾기
        while(message[rightPoint] !== ' ' && rightPoint <= message.length - 1){
            rightPoint++;
        }
        
        // 스포방지 단어 추출 및 저장
        const spoilerWord = message.slice(leftPoint + 1, rightPoint);
        data.push(...spoilerWord.split(' '));
        
        // 스포일러가 있던 자리를 *로 가려서 청정 구역 확보
        for (let j = leftPoint + 1; j < rightPoint; j++) {
            maskedMessageArray[j] = '*';
        }
    }
    
    // 스포일러 단어들이 모두 *로 가려진 문자열
    let cleanMessage = maskedMessageArray.join('');
    // 청정 문자열을 공백 기준으로 쪼갠 청정 단어 배열
    let cleanWords = cleanMessage.split(' ');
    
    
    // data(스포 단어) 중, cleanWords(청정 단어 배열)에 포함되지 않은(!includes) 단어만 필터링합니다.
    let importantWords = data.filter(word => {
        // 공백 단어나 빈 문자열이 들어오는 예외 처리 추가
        if (word.trim() === '') return false; 
        
        // 청정 구역에 포함되어 있지 않아야(=다른 곳에 등장하지 않아야) 중요 단어!
        return !cleanWords.includes(word);
    });
    
    // 중복된 중요 단어가 있다면 하나로 합쳐서 반환
    return [...new Set(importantWords)].length;
}