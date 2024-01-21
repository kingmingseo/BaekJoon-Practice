function solution(sizes) {

    let temp1 = sizes.map((element,i)=>{
        if(sizes[i][0]>sizes[i][1]){
            return sizes[i][0]   
        }
        else{
            return sizes [i][1]
        }
    })
    
   let temp2 = sizes.map((element,i)=>{
        if(sizes[i][0]<sizes[i][1]){
            return sizes[i][0]   
        }
        else{
            return sizes [i][1]
        }
    })
        
    return Math.max(...temp1)*Math.max(...temp2)
}