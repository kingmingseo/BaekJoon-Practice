function solution(s) {
    let answer = '';
    let index = 0; // 단어 내의 인덱스를 추적할 변수

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            // 공백을 만나면 그대로 공백을 더하고, 단어 인덱스를 0으로 리셋
            answer += ' ';
            index = 0;
        } else {
            // 공백이 아닐 때만 짝/홀수를 따져서 변환
            if (index % 2 === 0) {
                answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            index++; // 단어 안에서만 인덱스 증가
        }
    }

    return answer;
}