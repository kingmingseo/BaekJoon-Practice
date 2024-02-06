function solution(players, callings) {
    const dict = players.reduce((acc,cur,index) => {
       acc[cur] = index 
        return acc
    },{})
    
   callings.forEach((e)=>{
       let nowPlayerIndex = dict[e]
       let previousPlayer = players[nowPlayerIndex-1]
       
       dict[e] = nowPlayerIndex-1
       dict[previousPlayer] = nowPlayerIndex       
       
       players[nowPlayerIndex-1] = players[nowPlayerIndex]
       players[nowPlayerIndex] = previousPlayer
       
   })
    
    return players
}