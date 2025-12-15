class Queue{
    constructor(){
        this.headIndex = 0
        this.tailIndex = 0
        this.items = {}
    }
    
    enqueue(item){
        this.items[this.tailIndex] = item
        this.tailIndex++
    }
    
    dequeue(){
        let tempItem = this.items[this.headIndex]
        delete this.items[this.headIndex]
        this.headIndex++
        
        return tempItem
    }
    
    getLength(){
        return this.tailIndex - this.headIndex
    }
}

function bfs(i,j,maxi,maxj,visited,maps){
    let queue = new Queue()
    let di = [1,-1,0,0]
    let dj = [0,0,1,-1]
    
    queue.enqueue([i,j])
    visited[i][j] = true
    let total = Number(maps[i][j])
    while(queue.getLength()){
        let [nowi,nowj] = queue.dequeue()
        
        for(let i=0; i<4; i++){
            let nexti = nowi + di[i]
            let nextj = nowj + dj[i]
            if(nexti < 0 || nextj < 0 || nexti >= maxi || nextj >= maxj ) continue
            if(maps[nexti][nextj] ==="X") continue
            if(visited[nexti][nextj]) continue
            
            visited[nexti][nextj] = true
            
            total += Number(maps[nexti][nextj])
            queue.enqueue([nexti,nextj])
        }
        
    }
    return total

}

function solution(maps) {
    let maxj = maps[0].length
    let maxi = maps.length
    let visited = Array.from({length:maxi}, ()=>Array(maxj).fill(false))
    
    
    let answer = []
    for(let i=0; i<maxi; i++){
        for(let j=0; j<maxj; j++){
            if(maps[i][j]==="X") continue
            if(visited[i][j]) continue
            console.log([i,j])
            answer.push(bfs(i,j,maxi,maxj,visited,maps))
        }
    }
    if(answer.length){
        return answer.sort((a,b)=>a-b)
    }
    return [-1]
}




