let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
input = input.map((a) => a.split(' ').map(Number));
let nowIndex = 0;
let graphInfo = [];
let graph = []

while (true) {
    let [point, line] = input[nowIndex];
    graphInfo.push([point, line]);
    if (point === 0 && line === 0) break;
    nowIndex += 1;
    let graphTemp = Array.from({ length: point + 1 }, () => []);
    for (let i = 0; i < line; i++) {
        let [startNode, endNode] = input[nowIndex];
        graphTemp[startNode].push(endNode);
        graphTemp[endNode].push(startNode);
        nowIndex++;
    }
    graph.push(graphTemp)
}

function isCycle(x, prev,graph) {
    visited[x] = true;
    
    for (let item of graph[x]) {
        if(!visited[item]){
            if(isCycle(item,x,graph)) return true;
        }
        else if (item!=prev) return true;
    }
    return false; 
    
}

for (let i=0; i<graph.length; i++) {
    let pointCount = graphInfo[i][0]
    visited = new Array(pointCount + 1).fill(false);
    let answer = 0
    let NowGraph = graph[i]
    for(let i=1; i<NowGraph.length; i++){
        if(!visited[i]){
            if(!isCycle(i,0,NowGraph)) answer+=1;
        }
    }
    if(answer>1){console.log(`Case ${i+1}: A forest of ${answer} trees.`)}
    else if(answer===1){console.log(`Case ${i+1}: There is one tree.`)}
    else {console.log(`Case ${i+1}: No trees.`)}
}
