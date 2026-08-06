import java.util.*;

class Solution {
    public int solution(int[] ingredient) {
        Stack<Integer> stack = new Stack<>();
        
        int answer = 0 ;
        
        for(int nowNum : ingredient){
            stack.push(nowNum);
            int nowStackSize = stack.size();
            
            
            
            if(nowStackSize>=4 && stack.get(nowStackSize-1)==1 && stack.get(nowStackSize-2)==3 && stack.get(nowStackSize-3)==2 && stack.get(nowStackSize-4)==1){
                answer+=1;
                 for(int i=0; i<4; i++){
                stack.pop();    
            }
            }
           
            
            
        }
        return answer;
    }
}