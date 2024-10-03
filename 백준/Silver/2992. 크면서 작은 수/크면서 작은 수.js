const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function findNextNumber(X) {
  let digits = X.toString().split('').map(Number);
  let n = digits.length;
  let i, j;

  for (i = n - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      break;
    }
  }

  if (i === -1) {
    return 0;
  }

  for (j = n - 1; j > i; j--) {
    if (digits[j] > digits[i]) {
      break;
    }
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  let right = digits.splice(i + 1).sort((a, b) => a - b);
  digits = digits.concat(right);

  return parseInt(digits.join(''));
}

const X = parseInt(input);
console.log(findNextNumber(X));