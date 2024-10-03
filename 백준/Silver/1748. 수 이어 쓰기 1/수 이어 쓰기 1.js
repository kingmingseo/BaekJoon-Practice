let input = require('fs').readFileSync('dev/stdin').toString().trim();
let count = input.length;
input = Number(input);

function getTotalDigits(N) {
    let digits = 0; // 자릿수를 저장할 변수
    let length = 1; // 현재 숫자의 자릿수
    let count = 9; // 각 구간의 숫자 개수 (1자리 수는 9개, 2자리 수는 90개...)

    while (N > 0) {
        let currentRangeMax = Math.min(N, count); // 현재 구간에서 처리할 숫자의 개수
        digits += currentRangeMax * length; // 해당 구간의 숫자들로부터 만들어지는 자릿수 더하기
        N -= currentRangeMax; // 남은 숫자 개수에서 처리한 숫자만큼 빼기
        length++; // 다음 구간은 자릿수가 더 크므로 자릿수를 1 증가
        count *= 10; // 다음 구간의 숫자 개수 (1자리 수는 9개, 2자리 수는 90개, 3자리 수는 900개...)
    }

    return digits;
}

console.log(getTotalDigits(input))