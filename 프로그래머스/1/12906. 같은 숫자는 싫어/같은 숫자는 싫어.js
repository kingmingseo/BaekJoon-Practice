function solution(arr)
{   
   let beforeNum = -1
   let start = true
   let data = []
   
   for(const nowNum of arr){  
       
       if(nowNum === beforeNum){
           continue
       }
     
       data.push(nowNum)
       beforeNum = nowNum
    
   }
    return data
}