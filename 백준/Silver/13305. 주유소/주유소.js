let [N, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let distance = arr[0].split(' ').map(BigInt);
let cityOilFee = arr[1].split(' ').map(BigInt);

let answer = BigInt(0);
let minPrice = cityOilFee[0];

for (let i = 0; i < distance.length; i++) {
    if (cityOilFee[i] < minPrice) {
        minPrice = cityOilFee[i];
    }
    answer += minPrice * distance[i];
}

console.log(answer.toString());