let [T, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
T = Number(T);
arr = arr.map((a) => a.split(' ').map(Number));

let nowIndex = 0;
let testCase = [];
let testCase2 = [];
for (let i = 0; i < T; i++) {
    let repeat = arr[nowIndex][2];
    testCase2.push(arr[nowIndex]);
    let temp = [];
    for (let j = 0; j < repeat; j++) {
        nowIndex++;
        temp.push(arr[nowIndex]);
    }
    nowIndex++;
    testCase.push(temp);
}

function makeGraph(x, y, data) {
    let graph = [];
    for (let i = 0; i < y; i++) {
        let temp = new Array(x).fill(0);
        graph.push(temp);
    }
    for (let item of data) {
        graph[item[1]][item[0]] = 1;
    }
    return graph
}



function dfs(x, y, graph) {
    if (x < 0 || x > graph[0].length-1) return;
    if (y < 0 || y > graph.length-1) return;

    if (graph[y][x] == 1) {
        graph[y][x] = -1;
        dfs(x + 1, y, graph);
        dfs(x - 1, y, graph);
        dfs(x, y + 1, graph);
        dfs(x, y - 1, graph);
        return true;
    }
    return false;
}


for(let i=0; i<T; i++){
  let nowCase = testCase[i]
  let nowX = testCase2[i][0]
  let nowY = testCase2[i][1]
  let answer = 0;
  graph = makeGraph(nowX,nowY,nowCase)

  for(let y=0; y<nowY; y++){
    for(let x=0; x<nowX; x++){
      if(dfs(x,y,graph)) answer++
    }
  }
  console.log(answer)
}