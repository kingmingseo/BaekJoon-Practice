let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let distance = input[1].split(' ').map(BigInt);
let gasStation = input[2].split(' ').map(BigInt);

let totalCost = 0n;
let minPrice = gasStation[0];

for (let i = 0; i < N - 1; i++) {
  if (gasStation[i] < minPrice) {
    minPrice = gasStation[i];
  }
  totalCost += minPrice * distance[i];
}

console.log(totalCost.toString());
