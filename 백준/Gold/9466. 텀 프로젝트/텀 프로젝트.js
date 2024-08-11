const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let T = +input[0];
let index = 1;
let visited;
let done;
let arr;
let cnt = 0;

while (T > 0) {
  const n = +input[index];
  const temp = input[index + 1].split(" ").map((el) => +el);
  arr = [0, ...temp];
  visited = Array(n + 1).fill(false);
  done = Array(n + 1).fill(false);

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    dfs(i);
  }

  console.log(n - cnt);

  index += 2;
  T -= 1;
  cnt = 0;
}

function dfs(node) {
  visited[node] = true;
  const next = arr[node];

  if (!visited[next]) dfs(next);
  else if (!done[next]) {
    for (let i = next; i !== node; i = arr[i]) {
      cnt += 1;
    }

    cnt += 1;
  }

  done[node] = true;
}