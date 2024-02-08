function solution(n, edge) {
    let visited = new Array(n+1).fill(0)
    let level = new Array(n+1).fill(0)

    let queue = [];
    queue.push(1)
    visited[1] = 1;

    while(queue.length){
        let target = queue.shift();
        let lev = level[target] +1
        edge.forEach((el)=>{
            if(el[0] === target && visited[el[1]] !== 1){
                visited[el[1]] = 1
                queue.push(el[1])
                level[el[1]] = lev
                return
            }
            if(el[1] === target && visited[el[0]] !== 1){
                visited[el[0]] = 1
                queue.push(el[0])
                level[el[0]] = lev
            }
        })
    }

    let MAX = Math.max(...level)
    return level.filter(el=>el===MAX).length
}