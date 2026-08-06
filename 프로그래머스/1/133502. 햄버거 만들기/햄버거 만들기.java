import java.util.*;

class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        Stack<Integer> stack = new Stack<>();
        
        for(int i=0; i<ingredient.length; i++){
            stack.push(ingredient[i]);
            int size = stack.size();
            
            if(size>=4){
                if(  stack.get(size-1)==1 && stack.get(size-2)==3 && stack.get(size-3)==2 && stack.get(size-4)==1){
                      answer+=1;
                      for(int j=0; j<4; j++){
                          stack.pop();
                      }
                }
              
            }
          
            

        }
        return answer;
    }
}