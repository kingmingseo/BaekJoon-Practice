import java.util.*;

class Solution {
    public int solution(int a, int d, boolean[] included) {
        ArrayList test = new ArrayList();
        test.add(a);
        int tempNum = a;
        int answer = included[0] == true ? a : 0;
        
        for(int i=1; i<included.length; i++){
            tempNum+=d;
            test.add(tempNum);
            if(included[i]==true){
                answer += tempNum;
            }
        }
      
        return answer;
    }
}