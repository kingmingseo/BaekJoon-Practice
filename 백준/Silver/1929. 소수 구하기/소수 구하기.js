const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `3 16`
)
  .split(" ")
  .map(Number);

const [M, N] = input;

const isPrimeNumber = new Array(N + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
  if (!isPrimeNumber[i]) {
    continue;
  }

  for (let j = i * 2; j <= N; j += i) {
    isPrimeNumber[j] = false;
  }
}

const results = [];

for (let i = M; i <= N; i++) {
  if (isPrimeNumber[i]) {
    results.push(i);
  }
}

console.log(results.join("\n"));
