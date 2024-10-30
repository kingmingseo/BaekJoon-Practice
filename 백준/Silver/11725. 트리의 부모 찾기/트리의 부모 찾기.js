let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(a=>a.replace('\r','').split(' ').map(Number));


let tree = Array.from({length:input[0][0]+1},()=>[]);
let visited = Array(input[0][0]+1).fill(false);

//그래프 만들기
for(let i=1; i<input.length; i++){
  let startNode = input[i][0];
  let endNode = input[i][1];

  tree[startNode].push(endNode);
  tree[endNode].push(startNode);
}

let parent = Array(input[0][0]+1).fill(0);

function findParent(nowNode, prevNode,visited){
  visited[nowNode] = true;
  parent[nowNode] = prevNode;
  for(let i=0; i<tree[nowNode].length; i++){
    let nextNode = tree[nowNode][i];
    if(!visited[nextNode]){
      findParent(nextNode,nowNode,visited);
    }
  }
}

findParent(1,0,visited);

for(let i=2; i<parent.length; i++){
  console.log(parent[i])
}
