let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n') 
let data = input.slice(1).map(word => word.replace('\r', ''))
function isPalindrome(word, l, r) {
    while (l < r) {
        if (word[l] !== word[r]) {
            return false;
        }
        l++
        r--
    }
    return true;
}
for (let word of data) {
    let left = 0;
    let right = word.length - 1;
    let result = 0;

    while (left < right) {
        if (word[left] !== word[right]) {
            // 왼쪽 제거 버전
            const removeLeft = isPalindrome(word, left + 1, right);
            // 오른쪽 제거 버전
            const removeRight = isPalindrome(word, left, right - 1);

            if (removeLeft || removeRight) result = 1;
            else result = 2;
            break;
        }
        left++;
        right--;
    }

    console.log(result);
}
