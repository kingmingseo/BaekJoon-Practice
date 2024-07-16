let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let words = arr.map((a) => a.replace('\r', ''));

function isPalindrome(word, left, right, deletedChar = false) {
    // 기저 조건: 왼쪽 인덱스가 오른쪽 인덱스보다 크거나 같으면 회문
    if (left >= right) return deletedChar ? 1 : 0;

    // 양쪽 문자가 같으면 다음 문자로 이동
    if (word[left] === word[right]) {
        return isPalindrome(word, left + 1, right - 1, deletedChar);
    }

    // 이미 문자를 삭제했다면 회문이 아님
    if (deletedChar) return 2;

    // 왼쪽 또는 오른쪽 문자를 삭제하고 재귀 호출
    return Math.min(isPalindrome(word, left + 1, right, true), isPalindrome(word, left, right - 1, true));
}

function solution(word) {
    return isPalindrome(word, 0, word.length - 1);
}

const result = words.map(solution);
console.log(result.join('\n'));
